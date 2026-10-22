// import { HelpCircle, Check, X } from "lucide-react";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useApp } from "./context/AppContext";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";

// // Load stripe outside of component to avoid recreating it on each render
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// // CheckoutForm Component that will be shown in the modal
// const CheckoutForm = ({ selectedPlan, onSuccess, onCancel }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) {
//       setLoading(false);
//       return;
//     }

//     try {
//       // Create a payment intent on your server
//       const { data } = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/payment/create-payment-intent",
//         {
//           planId: selectedPlan._id,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Confirm card payment
//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             name: "User payment",
//           },
//         },
//       });

//       if (result.error) {
//         setError(result.error.message);
//         console.log(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {
//           // Payment successful, now update the user's plan on your backend
//           const upgradeRes = await fetch(
//             "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/payment/update-user-plan",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//               },
//               body: JSON.stringify({
//                 planId: selectedPlan._id,
//                 paymentIntentId: result.paymentIntent.id,
//               }),
//             }
//           );

//           if (upgradeRes.ok) {
//             onSuccess();
//           } else {
//             const errorData = await upgradeRes.json();
//             setError(
//               errorData.error ||
//                 "Payment successful but couldn't upgrade plan. Please contact support."
//             );
//           }
//         }
//       }
//     } catch (err) {
//       setError(
//         "An error occurred during payment processing. Please try again."
//       );
//       console.error(err);
//     }

//     setLoading(false);
//   };

//   // Helper function to safely get the price to display
//   const getPriceDisplay = () => {
//     if (typeof selectedPlan.price === 'number') {
//       return selectedPlan.price;
//     } else if (typeof selectedPlan.price === 'string') {
//       // Remove "$" if present
//       return selectedPlan.price.replace(/^\$/, '');
//     }
//     return 0; // Fallback
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="p-3 border border-gray-300 rounded-md bg-white">
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//       </div>

//       {error && <div className="text-red-500 text-sm">{error}</div>}

//       <div className="flex justify-end gap-3 mt-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           className={`px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Processing..." : `Pay $${getPriceDisplay()}`}
//         </button>
//       </div>
//     </form>
//   );
// };

// // Custom Plan Component
// const CustomPlanModal = ({ onCancel, onProceed }) => {
//   const [minutes, setMinutes] = useState(5001);
//   const [price, setPrice] = useState(120);
//   const token = localStorage.getItem("token");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Calculate price based on Enterprise plan's price-to-minutes ratio
//   // Enterprise is $119 for 5000 minutes (about $0.0238 per minute)
//   const calculatePrice = (mins) => {
//     const enterpriseRatePerMinute = 119 / 5000; // ≈ $0.0238 per minute
//     let calculatedPrice = Math.round(mins * enterpriseRatePerMinute);
//     // Ensure minimum price is at least $120 (just above Enterprise plan)
//     return Math.max(calculatedPrice, 120);
//   };

//   const handleMinutesChange = (e) => {
//     const newMinutes = parseInt(e.target.value) || 5001;
//     setMinutes(newMinutes);
//     setPrice(calculatePrice(newMinutes));
//   };

//   const handleCreateCustomPlan = async () => {
//     if (minutes <= 5000) {
//       setError("Minutes must be greater than 5000");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Create custom plan on backend
//       const response = await fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/plan", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           name: `Custom (${minutes} mins)`,
//           price: price,
//           minutes: minutes,
//           features: [
//             "✅ Lead Scraping (200 leads/batch)",
//             "✅ Deduplication & Repeated Number Handling",
//             "✅ Real-Time Sync with New Leads",
//             "✅ Built-in Dialer for Human Calling",
//             "✅ Meeting Scheduler + Auto Reminders",
//             "✅ Call Summary & Post-call Activities",
//             "✅ Email & SMS Communication Integration",
//             "✅ Editable Email/SMS Templates",
//             "✅ Lead Classification (Hot/Cold)",
//             "✅ Conversion Insight Dashboard",
//             "✅ History Tracking (Emails, Calls, SMS)",
//             "✅ Admin Panel (Lead/User Management)",
//             "✅ Analytics (Conversion, Performance)",
//             "✅ CRM Integration (Salesforce, etc.)",
//             "✅ Custom Reporting",
//           ]
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to create custom plan");
//       }

//       // Pass the new plan to the parent component
//       onProceed(data.plan);
//     } catch (err) {
//       setError(err.message || "An error occurred. Please try again.");
//       console.error("Error creating custom plan:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-gray-900">
//         Customize Your Plan
//       </h2>

//       <div className="mb-6">
//         <label
//           htmlFor="minutes"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Minutes (Minimum 5001)
//         </label>
//         <input
//           type="number"
//           id="minutes"
//           min="5001"
//           value={minutes}
//           onChange={handleMinutesChange}
//           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//       </div>

//       <div className="mb-6">
//         <div className="flex justify-between items-center">
//           <span className="text-sm font-medium text-gray-700">
//             Monthly Price:
//           </span>
//           <span className="text-xl font-bold text-teal-600">${price}</span>
//         </div>
//         <p className="text-xs text-gray-500 mt-1">
//           Based on our standard rates (approx. $0.0238 per minute)
//         </p>
//       </div>

//       {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//       <div className="flex justify-end gap-3">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleCreateCustomPlan}
//           disabled={loading || minutes <= 5000}
//           className={`px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Creating..." : "Create Custom Plan"}
//         </button>
//       </div>
//     </div>
//   );
// };

// const PlansSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [showStripeModal, setShowStripeModal] = useState(false);
//   const [showCustomPlanModal, setShowCustomPlanModal] = useState(false);
//   const location = useLocation();
//   const token = localStorage.getItem("token");
//   const { user } = useApp();

//   // Predefined plans data
//   const plans = [
//     {
//       name: "Starter",
//       price: "$0",
//       credits: "10 (Mins)",
//       features: [
//         "✔️ Lead Scraping (200 leads/batch)",
//         "✅ Deduplication & Repeated Number Handling",
//         "❌ Real-Time Sync with New Leads",
//         "✅ Built-in Dialer for Human Calling",
//         "❌ Meeting Scheduler + Auto Reminders",
//         "❌ Call Summary & Post-call Activities",
//         "❌ Email & SMS Communication Integration",
//         "❌ Editable Email/SMS Templates",
//         "❌ Lead Classification (Hot/Cold)",
//         "❌ Conversion Insight Dashboard",
//         "❌ History Tracking (Emails, Calls, SMS)",
//         "❌ Admin Panel (Lead/User Management)",
//         "❌ Analytics (Conversion, Performance)",
//         "❌ CRM Integration (Salesforce, etc.)",
//         "❌ Custom Reporting",
//       ],
//       _id: "680b21d5c6c75485cfa16b12",
//     },
//     {
//       name: "Pro",
//       price: "$49",
//       credits: "500 (Mins)",
//       features: [
//         "✅ Lead Scraping (200 leads/batch)",
//         "✅ Deduplication & Repeated Number Handling",
//         "✅ Real-Time Sync with New Leads",
//         "✅ Built-in Dialer for Human Calling",
//         "✅ Meeting Scheduler + Auto Reminders",
//         "✅ Call Summary & Post-call Activities",
//         "✅ Email & SMS Communication Integration",
//         "✅ Editable Email/SMS Templates",
//         "✅ Lead Classification (Hot/Cold)",
//         "✅ Conversion Insight Dashboard",
//         "❌ History Tracking (Emails, Calls, SMS)",
//         "❌ Admin Panel (Lead/User Management)",
//         "❌ Analytics (Conversion, Performance)",
//         "❌ CRM Integration (Salesforce, etc.)",
//         "❌ Custom Reporting",
//       ],
//       _id: "680b230254d1f6b1ad9a6ec2",
//     },
//     {
//       name: "Growth",
//       price: "$79",
//       credits: "1000 (Mins)",
//       features: [
//         "✅ Lead Scraping (200 leads/batch)",
//         "✅ Deduplication & Repeated Number Handling",
//         "✅ Real-Time Sync with New Leads",
//         "✅ Built-in Dialer for Human Calling",
//         "✅ Meeting Scheduler + Auto Reminders",
//         "✅ Call Summary & Post-call Activities",
//         "✅ Email & SMS Communication Integration",
//         "✅ Editable Email/SMS Templates",
//         "✅ Lead Classification (Hot/Cold)",
//         "✅ Conversion Insight Dashboard",
//         "✅ History Tracking (Emails, Calls, SMS)",
//         "✅ Admin Panel (Lead/User Management)",
//         "✅ Analytics (Conversion, Performance)",
//         "❌ CRM Integration (Salesforce, etc.)",
//         "❌ Custom Reporting",
//       ],
//       _id: "680b232254d1f6b1ad9a6ec5",
//     },
//     {
//       name: "Enterprise",
//       price: "$119",
//       credits: "5000 (Mins)",
//       features: [
//         "✅ Lead Scraping (200 leads/batch)",
//         "✅ Deduplication & Repeated Number Handling",
//         "✅ Real-Time Sync with New Leads",
//         "✅ Built-in Dialer for Human Calling",
//         "✅ Meeting Scheduler + Auto Reminders",
//         "✅ Call Summary & Post-call Activities",
//         "✅ Email & SMS Communication Integration",
//         "✅ Editable Email/SMS Templates",
//         "✅ Lead Classification (Hot/Cold)",
//         "✅ Conversion Insight Dashboard",
//         "✅ History Tracking (Emails, Calls, SMS)",
//         "✅ Admin Panel (Lead/User Management)",
//         "✅ Analytics (Conversion, Performance)",
//         "✅ CRM Integration (Salesforce, etc.)",
//         "✅ Custom Reporting",
//       ],
//       _id: "680b234e54d1f6b1ad9a6ec8",
//     },
//     {
//       name: "Global Custom",
//       price: "Custom",
//       credits: ">5000 (Mins)",
//       features: [
//         "✅ Lead Scraping (200 leads/batch)",
//         "✅ Deduplication & Repeated Number Handling",
//         "✅ Real-Time Sync with New Leads",
//         "✅ Built-in Dialer for Human Calling",
//         "✅ Meeting Scheduler + Auto Reminders",
//         "✅ Call Summary & Post-call Activities",
//         "✅ Email & SMS Communication Integration",
//         "✅ Editable Email/SMS Templates",
//         "✅ Lead Classification (Hot/Cold)",
//         "✅ Conversion Insight Dashboard",
//         "✅ History Tracking (Emails, Calls, SMS)",
//         "✅ Admin Panel (Lead/User Management)",
//         "✅ Analytics (Conversion, Performance)",
//         "✅ CRM Integration (Salesforce, etc.)",
//         "✅ Custom Reporting",
//       ],
//       isCustom: true,
//     },
//   ];

//   // Calculate visible cards based on screen size
//   const getVisibleCount = () => {
//     if (typeof window === "undefined") return 3;

//     if (window.innerWidth >= 1024) return 3; // lg screens
//     if (window.innerWidth >= 768) return 2; // md screens
//     return 1; // sm screens
//   };

//   const visibleCount = getVisibleCount();
//   const maxIndex = Math.max(0, plans.length - visibleCount);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handlePlanSuccess = () => {
//     alert("Plan upgraded successfully!");
//     setSelectedPlan(null);
//     setShowStripeModal(false);
//     window.location.reload();
//   };

//   const handleCustomPlanCreate = (newPlan) => {
//     setShowCustomPlanModal(false);
//     setSelectedPlan(newPlan);
//     setShowStripeModal(true);
//   };

//   const handlePlanSelect = (plan) => {
//     // Handle Global Custom plan
//     if (plan.isCustom) {
//       setShowCustomPlanModal(true);
//       return;
//     }

//     // Free plan doesn't need payment - FIX HERE: separate handling for free plan
//     if (plan.name === "Starter" || plan.price === "$0") {
//       fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/upgrade-free-plan", {  // Use different endpoint that doesn't verify payment
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ planId: plan._id }),
//       })
//         .then((res) => {
//           if (res.ok) {
//             alert("Plan upgraded successfully!");
//             window.location.reload();
//           } else {
//             return res.json().then(data => {
//               throw new Error(data.error || "Something went wrong!");
//             });
//           }
//         })
//         .catch((error) => {
//           console.error("Error upgrading plan:", error);
//           alert(error.message || "Something went wrong!");
//         });
//     } else {
//       setSelectedPlan(plan);
//       setShowStripeModal(true);
//     }
//   };

//   // Helper function to safely get the price to display
//   const formatPlanPrice = (price) => {
//     if (typeof price === 'number') {
//       return price;
//     } else if (typeof price === 'string' && price.startsWith('$')) {
//       // Remove "$" if present
//       return price.substring(1);
//     }
//     return price; // Just return as is if it's neither a number nor starts with $
//   };

//   // Check if current plan is subscription with active status
//   const isActiveSubscription = user?.subscriptionStatus === "active";
//   const isCurrentlySelected = (plan) => {
//     return plan.name === user?.plan?.name || 
//            (plan.isCustom && user?.plan?.name?.startsWith("Custom"));
//   };

//   return (
//     <div className="relative max-w-6xl mx-auto px-4 py-8">
//       {isActiveSubscription && (
//         <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
//           <h3 className="text-blue-700 font-medium">Active Subscription</h3>
//           <p className="text-blue-600 text-sm mt-1">
//             You have an active subscription until{" "}
//             {new Date(user?.subscriptionCurrentPeriodEnd).toLocaleDateString()}.
//             Changes to your plan will take effect at the end of your current
//             billing period.
//           </p>
//         </div>
//       )}

//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-300 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
//           }}
//         >
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`flex-shrink-0 p-4 w-full ${
//                 visibleCount === 3
//                   ? "lg:w-1/3"
//                   : visibleCount === 2
//                   ? "md:w-1/2"
//                   : "w-full"
//               }`}
//             >
//               <div className="p-5 rounded-t-lg bg-white border border-gray-200 border-b-0">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {plan.name}
//                 </h3>
//                 <div className="mt-4">
//                   <span className="text-3xl font-bold text-gray-900">
//                     {plan.price}
//                   </span>
//                   <span className="text-gray-500 text-sm ml-1">
//                     {!plan.isCustom && "/month"}
//                   </span>
//                 </div>
//                 <div className="mt-1.5 flex items-center text-sm text-gray-500">
//                   <span>{plan.credits}</span>
//                 </div>
//                 <button
//                   disabled={isCurrentlySelected(plan)}
//                   onClick={() => {
//                     if (location.pathname !== "/plan") {
//                       if (!token) {
//                         window.location.href = "/signup";
//                       } else {
//                         window.location.href = "/plan";
//                       }
//                     } else {
//                       handlePlanSelect(plan);
//                     }
//                   }}
//                   className={`
//                     mt-5 w-full py-2 px-4 
//                     ${isCurrentlySelected(plan) && "cursor-not-allowed opacity-70"}
//                     text-sm font-medium cursor-pointer transition-colors duration-200 shadow-md rounded-md
//                     ${
//                       isCurrentlySelected(plan)
//                         ? "bg-gray-400 hover:bg-gray-300 text-white"
//                         : "bg-purple-600 hover:bg-purple-700 text-white"
//                     }
//                   `}
//                 >
//                   {isCurrentlySelected(plan)
//                     ? "Currently purchased"
//                     : plan.isCustom
//                     ? "Customize plan"
//                     : plan.name === "Starter"
//                     ? "Try for free"
//                     : `Start ${plan.name} trial`}
//                 </button>
//               </div>
//               <div className="p-6 rounded-b-lg bg-white border border-gray-200 border-t-0">
//                 <ul className="space-y-3">
//                   {plan.features.map((feat, idx) => {
//                     const isFeatureAvailable =
//                       feat.startsWith("✅") || feat.startsWith("✔️");
//                     const featureText = feat.substring(2).trim();

//                     return (
//                       <li
//                         key={idx}
//                         className="text-sm text-gray-700 flex items-center gap-2"
//                       >
//                         {isFeatureAvailable ? (
//                           <Check
//                             size={16}
//                             className="text-green-500 flex-shrink-0"
//                           />
//                         ) : (
//                           <X size={16} className="text-red-500 flex-shrink-0" />
//                         )}
//                         <span>{featureText}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom Plan Modal */}
//       {showCustomPlanModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg w-full max-w-lg shadow-lg relative">
//             <CustomPlanModal
//               onCancel={() => setShowCustomPlanModal(false)}
//               onProceed={handleCustomPlanCreate}
//             />
//           </div>
//         </div>
//       )}

//       {/* Plan confirmation modal (without Stripe) */}
//       {selectedPlan && !showStripeModal && !showCustomPlanModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
//             <h2 className="text-2xl font-bold mb-2 text-gray-900">
//               Confirm Your Plan
//             </h2>
//             <p className="text-gray-700 mb-4">
//               You're about to purchase the <strong>{selectedPlan.name}</strong>{" "}
//               plan for <strong>${formatPlanPrice(selectedPlan.price)}</strong>
//             </p>

//             <h3 className="text-lg font-semibold mb-2">Included Features:</h3>
//             <ul className="mb-4 space-y-1 text-sm text-gray-600 max-h-40 overflow-y-auto">
//               {selectedPlan.features.map((feat, i) => {
//                 const isFeatureAvailable =
//                   feat.startsWith("✅") || feat.startsWith("✔️");
//                 const featureText = feat.substring(2).trim();

//                 return (
//                   <li
//                     key={i}
//                     className="flex items-center gap-2 text-sm text-gray-600"
//                   >
//                     {isFeatureAvailable ? (
//                       <Check
//                         size={16}
//                         className="text-green-500 flex-shrink-0"
//                       />
//                     ) : (
//                       <X size={16} className="text-red-500 flex-shrink-0" />
//                     )}
//                     <span>{featureText}</span>
//                   </li>
//                 );
//               })}
//             </ul>

//             <div className="flex justify-end gap-3 mt-4">
//               <button
//                 onClick={() => setSelectedPlan(null)}
//                 className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setShowStripeModal(true)}
//                 className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700"
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Stripe Payment Modal */}
//       {selectedPlan && showStripeModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
//             <h2 className="text-2xl font-bold mb-2 text-gray-900">
//               Complete Payment
//             </h2>
//             <p className="text-gray-700 mb-4">
//               Complete your payment for the <strong>{selectedPlan.name}</strong>{" "}
//               plan - <strong>${formatPlanPrice(selectedPlan.price)}</strong> per month
//             </p>

//             <Elements stripe={stripePromise}>
//               <CheckoutForm
//                 selectedPlan={selectedPlan}
//                 onSuccess={handlePlanSuccess}
//                 onCancel={() => {
//                   setShowStripeModal(false);
//                   setSelectedPlan(null);
//                 }}
//               />
//             </Elements>

//             <div className="mt-4 text-xs text-gray-500">
//               <p>
//                 Test card: 4242 4242 4242 4242 | Any future date | Any 3 digits
//                 CVC | Any ZIP
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Navigation arrows */}
//       {currentIndex > 0 && (
//         <button
//           onClick={prevSlide}
//           className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-100 focus:outline-none text-teal-600 font-extrabold"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-7 w-7"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//       )}

//       {currentIndex < maxIndex && (
//         <button
//           onClick={nextSlide}
//           className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-100 focus:outline-none text-teal-600"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-7 w-7"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// };

// export default PlansSlider;







import { HelpCircle, Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useApp } from "./context/AppContext";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// Load stripe outside of component to avoid recreating it on each render
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// CheckoutForm Component that will be shown in the modal
const CheckoutForm = ({ selectedPlan, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      // Create a payment intent on your server
      const { data } = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/payment/create-payment-intent",
        {
          planId: selectedPlan._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data);


      // Confirm card payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "User payment",
          },
        },
      });

      console.log(result);


      if (result.error) {

        setError(result.error.message);
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          // Payment successful, now update the user's plan on your backend
          const upgradeRes = await fetch(
            "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/payment/update-user-plan",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                planId: selectedPlan._id,
                paymentIntentId: result.paymentIntent.id,
              }),
            }
          );

          if (upgradeRes.ok) {
            onSuccess();
          } else {
            const errorData = await upgradeRes.json();
            setError(
              errorData.error ||
              "Payment successful but couldn't upgrade plan. Please contact support."
            );
          }
        }
      }
    } catch (err) {
      setError(
        "An error occurred during payment processing. Please try again."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to safely get the price to display
  const getPriceDisplay = () => {
    if (typeof selectedPlan.price === 'number') {
      return selectedPlan.price;
    } else if (typeof selectedPlan.price === 'string') {
      // Remove "$" if present
      return selectedPlan.price.replace(/^\$/, '');
    }
    return 0; // Fallback
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-3 border border-gray-300 rounded-md bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
        >
          {loading ? "Processing..." : `Pay $${getPriceDisplay()}`}
        </button>
      </div>
    </form>
  );
};

// Custom Plan Component
const CustomPlanModal = ({ onCancel, onProceed }) => {
  const [minutes, setMinutes] = useState(1001);
  const [price, setPrice] = useState(200);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Calculate price based on Enterprise plan's price-to-minutes ratio
  // Enterprise is $180 for 1000 minutes (about $0.18 per minute)
  const calculatePrice = (mins) => {
    const enterpriseRatePerMinute = 180 / 1000; // $0.18 per minute
    let calculatedPrice = Math.round(mins * enterpriseRatePerMinute);
    // Ensure minimum price is at least $200 (just above Enterprise plan)
    return Math.max(calculatedPrice, 200);
  };

  const handleMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value) || 1001;
    setMinutes(newMinutes);
    setPrice(calculatePrice(newMinutes));
  };

  const handleCreateCustomPlan = async () => {
    if (minutes <= 1000) {
      setError("Minutes must be greater than 1000");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Create custom plan on backend
      const response = await fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          planId: `custom_${Date.now()}`,
          name: `Custom (${minutes} mins)`,
          price: price,
          minutes: minutes,
          features: {
            transcription: true,
            summary: true,
            actionSuggestions: true,
            insights: true,
            toneAnalysis: true,
            multipleUsers: true,
            customAnalytics: true
          },
          description: `Custom plan with ${minutes} minutes and all premium features`,
          sortOrder: 10,
          isActive: true,
          billingCycle: 30,
          isPopular: false
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create custom plan");
      }

      // Pass the new plan to the parent component
      onProceed(data.data);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Error creating custom plan:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Customize Your Plan
      </h2>

      <div className="mb-6">
        <label
          htmlFor="minutes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Minutes (Minimum 1001)
        </label>
        <input
          type="number"
          id="minutes"
          min="1001"
          value={minutes}
          onChange={handleMinutesChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Monthly Price:
          </span>
          <span className="text-xl font-bold text-teal-600">${price}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Based on our standard rates (approx. $0.18 per minute)
        </p>
      </div>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleCreateCustomPlan}
          disabled={loading || minutes <= 1000}
          className={`px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Creating..." : "Create Custom Plan"}
        </button>
      </div>
    </div>
  );
};

const PlansSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showStripeModal, setShowStripeModal] = useState(false);
  const [showCustomPlanModal, setShowCustomPlanModal] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { user } = useApp();

  // Fetch plans from API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/plans?active=true");
        const data = await response.json();

        if (data.success) {
          // Transform API data to match component format
          const transformedPlans = data.data.map(plan => ({
            ...plan,
            price: plan.price === 0 ? "$0" : `$${plan.price}`,
            credits: `${plan.minutes} (Mins)`,
            features: transformPlanFeatures(plan.features),
            _id: plan._id
          }));

          setPlans([...transformedPlans]);
        } else {
          setError("Failed to load plans");
        }
      } catch (err) {
        console.error("Error fetching plans:", err);
        setError("Failed to load plans");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // Transform plan features from object to array format
  const transformPlanFeatures = (features) => {
    const featureMap = {
      transcription: "Transcription",
      summary: "Summaries",
      actionSuggestions: "Action Suggestions",
      insights: "Meeting Insights",
      toneAnalysis: "Tone Analysis",
      multipleUsers: "Multiple Users",
      customAnalytics: "Custom Analytics"
    };

    return Object.entries(features).map(([key, value]) => {
      const icon = value ? "✅" : "❌";
      const featureName = featureMap[key] || key;
      return `${icon} ${featureName}`;
    });
  };

  // Calculate visible cards based on screen size
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2; // md screens
    return 1; // sm screens
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, plans.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handlePlanSuccess = () => {
    alert("Plan upgraded successfully!");
    setSelectedPlan(null);
    setShowStripeModal(false);
    window.location.reload();
  };

  const handleCustomPlanCreate = (newPlan) => {
    setShowCustomPlanModal(false);
    setSelectedPlan(newPlan);
    setShowStripeModal(true);
  };

  const handlePlanSelect = (plan) => {
    // Handle Custom plan
    if (plan.isCustom) {
      setShowCustomPlanModal(true);
      return;
    }

    // Free plan doesn't need payment
    if (plan.name === "Free" || plan.price === "$0") {
      fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/upgrade-free-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ planId: plan._id }),
      })
        .then((res) => {
          if (res.ok) {
            alert("Plan upgraded successfully!");
            window.location.reload();
          } else {
            return res.json().then(data => {
              throw new Error(data.error || "Something went wrong!");
            });
          }
        })
        .catch((error) => {
          console.error("Error upgrading plan:", error);
          alert(error.message || "Something went wrong!");
        });
    } else {
      setSelectedPlan(plan);
      setShowStripeModal(true);
    }
  };

  // Helper function to safely get the price to display
  const formatPlanPrice = (price) => {
    if (typeof price === 'number') {
      return price;
    } else if (typeof price === 'string' && price.startsWith('$')) {
      return price.substring(1);
    }
    return price;
  };

  // Check if current plan is subscription with active status
  const isActiveSubscription = user?.subscriptionStatus === "active";
  const isCurrentlySelected = (plan) => {
    return plan._id === user?.plan
  };

  // Loading state
  if (loading) {
    return (
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">Loading plans...</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      {isActiveSubscription && (
        <div className="bg-purple-50 border border-purple-200 rounded-md p-4 mb-6">
          <h3 className="text-purple-700 font-medium">Active Subscription</h3>
          <p className="text-purple-600 text-sm mt-1">
            You have an active subscription until{" "}
            {new Date(user?.subscriptionCurrentPeriodEnd).toLocaleDateString()}.
            Changes to your plan will take effect at the end of your current
            billing period.
          </p>
        </div>
      )}

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={plan._id || index}
              className={`flex-shrink-0 p-4 w-full ${visibleCount === 3
                ? "lg:w-1/3"
                : visibleCount === 2
                  ? "md:w-1/2"
                  : "w-full"
                }`}
            >
              <div className="p-5 rounded-t-lg bg-white border border-gray-200 border-b-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">
                    {!plan.isCustom && plan.price !== "Custom" && "/month"}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center text-sm text-gray-500">
                  <span>{plan.credits}</span>
                </div>
                {plan.description && (
                  <div className="mt-2 text-xs text-gray-600">
                    {plan.description}
                  </div>
                )}
                <button
                  disabled={isCurrentlySelected(plan)}
                  onClick={() => {
                    if (location.pathname !== "/plan") {
                      if (!token) {
                        window.location.href = "/signup";
                      } else {
                        window.location.href = "/plan";
                      }
                    } else {
                      handlePlanSelect(plan);
                    }
                  }}
                  className={`
                    mt-5 w-full py-2 px-4 
                    ${isCurrentlySelected(plan) && "cursor-not-allowed opacity-70"}
                    ${!isCurrentlySelected(plan) && "cursor-pointer"}
                    text-sm font-medium  transition-colors duration-200 shadow-md rounded-md
                    ${isCurrentlySelected(plan)
                      ? "bg-gray-400 hover:bg-gray-300 text-white"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                    }
                  `}
                >
                  {isCurrentlySelected(plan)
                    ? "Currently purchased"
                    : plan.isCustom
                      ? "Customize Plan"
                      : plan.name === "Free"
                        ? "Try for Free"
                        : `Start ${plan.name} Plan`}
                </button>
              </div>
              <div className="p-6 rounded-b-lg bg-white border border-gray-200 border-t-0">
                <ul className="space-y-3">
                  {plan.features.map((feat, idx) => {
                    const isFeatureAvailable =
                      feat.startsWith("✅") || feat.startsWith("✔️");
                    const featureText = feat.substring(2).trim();

                    return (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-center gap-2"
                      >
                        {isFeatureAvailable ? (
                          <Check
                            size={16}
                            className="text-green-500 flex-shrink-0"
                          />
                        ) : (
                          <X size={16} className="text-red-500 flex-shrink-0" />
                        )}
                        <span>{featureText}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Plan Modal */}
      {showCustomPlanModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-lg shadow-lg relative">
            <CustomPlanModal
              onCancel={() => setShowCustomPlanModal(false)}
              onProceed={handleCustomPlanCreate}
            />
          </div>
        </div>
      )}

      {/* Plan confirmation modal (without Stripe) */}
      {selectedPlan && !showStripeModal && !showCustomPlanModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Confirm Your Plan
            </h2>
            <p className="text-gray-700 mb-4">
              You're about to purchase the <strong>{selectedPlan.name}</strong>{" "}
              plan for <strong>${formatPlanPrice(selectedPlan.price)}</strong>
            </p>

            <h3 className="text-lg font-semibold mb-2">Included Features:</h3>
            <ul className="mb-4 space-y-1 text-sm text-gray-600 max-h-40 overflow-y-auto">
              {selectedPlan.features.map((feat, i) => {
                const isFeatureAvailable =
                  feat.startsWith("✅") || feat.startsWith("✔️");
                const featureText = feat.substring(2).trim();

                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    {isFeatureAvailable ? (
                      <Check
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                    ) : (
                      <X size={16} className="text-red-500 flex-shrink-0" />
                    )}
                    <span>{featureText}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setSelectedPlan(null)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowStripeModal(true)}
                className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stripe Payment Modal */}
      {selectedPlan && showStripeModal && (
        <div className="fixed backdrop-blur-xs inset-0 z-50 bg-black/30 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Complete Payment
            </h2>
            <p className="text-gray-700 mb-4">
              Complete your payment for the <strong>{selectedPlan.name}</strong>{" "}
              plan - <strong>${formatPlanPrice(selectedPlan.price)}</strong> per month
            </p>

            <Elements stripe={stripePromise}>
              <CheckoutForm
                selectedPlan={selectedPlan}
                onSuccess={handlePlanSuccess}
                onCancel={() => {
                  setShowStripeModal(false);
                  setSelectedPlan(null);
                }}
              />
            </Elements>

            <div className="mt-4 text-xs text-gray-500">
              <p>
                Test card: 4242 4242 4242 4242 | Any future date | Any 3 digits
                CVC | Any ZIP
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-100 focus:outline-none text-teal-600 font-extrabold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {currentIndex < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-100 focus:outline-none text-teal-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PlansSlider;