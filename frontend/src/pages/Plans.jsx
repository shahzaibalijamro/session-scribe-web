import { useEffect, useState } from "react";
import { Check, GanttChartSquare, HelpCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import PlansSlider from "../components/PlansSlider";
import { useApp } from '../components/context/AppContext';
import axios from "axios";

function Plan() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [users, setUsers] = useState(1);
  const url = useLocation();
  const { user, setUser } = useApp();

  useEffect(() => {
    if (!user && url.pathname === "/plan") {
      const token = localStorage.getItem("token");
      if (token) {
        const fetchProfile = async () => {
          try {
            const response = await axios.get(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/auth`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUser(response.data);
          } catch (error) {
            console.error("Failed to fetch user data", error);
          }
        };
        fetchProfile();
      }
    }
  }, []);

  return (
    <>
      <div
        className={`min-h-screen ${url.pathname === "/plan" ? "pb-5" : "py-20"
          } ${url.pathname === "/pricing" ? "bg-gray-50" : " bg-white"}  `}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#111827]">
              {user?.plan ? "Upgrade Your Plan " : "Choose Your Plan"}
            </h1>
            <p className="mt-2 text-xl text-black font-semibold">
              {url.pathname === "/plan" && !user?.plan
                ? "Please choose a pricing plan to continue." : user?.plan ? "You can upgrade to the following plans"
                  : "Pricing for one-person startups to Fortune 500 enterprises."}
            </p>
          </div>

          {/* <div className="mt-8 flex  justify-center items-center">
            <div className="inline-flex items-center bg-[#F3F4F6] rounded-full p-1">
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 
                ${
                  billingCycle === "annual"
                    ? "bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-colors"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                upgrade plan done Annual Billing
              </button>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 
                ${
                  billingCycle === "monthly"
                    ? "bg-white text-[#111827] shadow-sm"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                Monthly Billing
              </button>
            </div>
          </div> */}

          {/* <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border-b border-black py-6">
            <h2 className="text-lg font-medium text-[#111827]">
              Edition and Users
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold ">
                How many users do you have?
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setUsers((prev) => Math.max(1, prev - 1))}
                  className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full border border-gray-800 outline-none   hover:text-[#111827] transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center text-[#111827]">{users}</span>
                <button
                  onClick={() => setUsers((prev) => prev + 1)}
                  className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full border border-gray-800 outline-none  hover:text-[#111827] transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 py-10">
            <GanttChartSquare />
            <p className="text-sm font-semibold">
              Paying teams book 183% more meetings
            </p>
          </div> */}
          {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 overflow-x-auto gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#111827]">
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-[#111827]">
                      {plan.price}
                    </span>
                    <span className="text-[#6B7280] text-sm ml-1">
                      per seat/month
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center text-sm text-[#6B7280]">
                    <span>{plan.credits}</span>
                    <HelpCircle className="w-4 h-4 ml-1 text-[#9CA3AF]" />
                  </div>
                  <button
                    className={`mt-5 w-full py-2 px-4  text-sm font-medium transition-colors duration-200 shado-md shadow-gray-300 rounded-md 
                    ${
                      plan.name === "Free"
                        ? "bg-gray-400 hover:bg-gray-300 text-white"
                        : "bg-teal-600 hover:bg-teal-700  text-white tranisition-colors"
                    }`}
                  >
                    {plan.name === "Free" ? "Try for free" : "Start free trial"}
                  </button>
                </div>
                <div className="border-t border-[#E5E7EB] p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-sm text-[#373a42] leading-5">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> */}
          <PlansSlider></PlansSlider>
        </div>
      </div>
    </>
  );
}

export default Plan;