import Stripe from "stripe";
import userModel from "../models/user.model.js";
import { planModel } from "../models/plan.model.js";

const createPaymentIntent = async (req, res) => {
  const userId = req.user._id;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { planId } = req.body;
  try {
    const user = await userModel.findById(userId).populate("plan");
    const plan = await planModel.findById(planId);
    if (!user || !plan) {
      return res.status(404).send({ error: "User or plan not found" });
    }
    const amount = plan.price * 100;
    let customerId = user?.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.username,
        metadata: {
          userId: user._id.toString(),
        },
      });
      customerId = customer.id;
      await userModel.findByIdAndUpdate(userId, {
        stripeCustomerId: customerId,
      });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: {
        userId: userId.toString(),
        planId: planId,
        planName: plan.name,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("Error creating payment intent:", error);
    res.status(500).send({ error: error.message });
  }
};

const updateUserPlan = async (req, res) => {
  const userId = req.user._id;
  const { planId, paymentIntentId } = req.body;

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const plan = await planModel.findById(planId);

    if (!plan) {
      return res.status(404).send({ error: "Plan not found" });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).send({ error: "Payment has not been completed" });
    }

    const renewalDate = new Date();
    renewalDate.setDate(renewalDate.getDate() + 30);

    await userModel.findByIdAndUpdate(userId, {
      plan: planId,
      planPurchaseDate: new Date(),
      planRenewalDate: renewalDate,
      subscriptionStatus: "active",
      subscriptionCurrentPeriodEnd: renewalDate,
      isSubscribed: true,
    });

    res.send({ success: true, message: "Plan updated successfully" });
  } catch (error) {
    console.log("Error updating user plan:", error);
    res.status(500).send({ error: error.message });
  }
};

const upgradeFreeUserPlan = async (req, res) => {
  const userId = req.user._id;
  const { planId } = req.body;

  try {
    const plan = await planModel.findById(planId);

    if (!plan) {
      return res.status(404).send({ error: "Plan not found" });
    }

    if (plan.price !== 0 && plan.price !== "0" && plan.price !== "$0") {
      return res.status(403).send({ error: "Not a free plan" });
    }

    const renewalDate = new Date();
    renewalDate.setDate(renewalDate.getDate() + 30);

    await userModel.findByIdAndUpdate(userId, {
      plan: planId,
      planPurchaseDate: new Date(),
      planRenewalDate: renewalDate,
      subscriptionStatus: "active",
      subscriptionCurrentPeriodEnd: renewalDate,
    });

    res.send({ success: true, message: "Plan upgraded successfully" });
  } catch (error) {
    console.log("Error updating free plan:", error);
    res.status(500).send({ error: error.message });
  }
};

export { createPaymentIntent,updateUserPlan,upgradeFreeUserPlan };