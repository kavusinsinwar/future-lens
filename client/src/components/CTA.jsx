import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // ✅ Toast for "Coming Soon"

const CTA = () => {
  const navigate = useNavigate();

  // You can replace this with your actual auth logic
  const isAuthenticated = localStorage.getItem("token");

  const handleStartTrial = () => {
    if (isAuthenticated) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  };

  const handleTalkToSales = () => {
    toast("🚀 Coming Soon!", {
      icon: "💬",
      style: {
        borderRadius: "10px",
        background: "#1f1f1f",
        color: "#fff",
      },
    });
  };

  return (
    <section className="bg-gradient-to-t from-[#121212] via-[#1A1A21] to-[#2A1A3A] text-white px-4 sm:px-8 py-20 relative overflow-hidden">
      {/* Background Decorative Blur Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#1A1A21] via-[#2A1A3A] to-[#1A1A21] p-6 sm:p-12 rounded-3xl border-2 border-purple-500/30 text-center backdrop-blur-sm shadow-2xl hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden">
          {/* Inner Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>

          <div className="relative z-10">
            {/* Tag */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
                🚀 Limited Time Offer
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Explore Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Future?
              </span>
            </h3>

            {/* Subheading */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands making better decisions with AI-powered scenario
              planning. Start your journey to better decision-making today.
            </p>

            {/* Stats - Responsive Row */}
            <div className="px-2 sm:px-4">
              <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0 mb-10">
                <div className="text-center w-full sm:w-auto">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-400">Happy Users</div>
                </div>
                <div className="text-center w-full sm:w-auto">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    50,000+
                  </div>
                  <div className="text-sm text-gray-400">Scenarios Created</div>
                </div>
                <div className="text-center w-full sm:w-auto">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleStartTrial}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Your Free Trial</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>

              <button
                onClick={handleTalkToSales}
                className="group border-2 border-gray-600 hover:border-purple-500 px-8 py-4 rounded-full hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 flex items-center space-x-2"
              >
                <span>💬</span>
                <span>Talk to Sales</span>
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">No credit card required</p>
          </div>

          {/* Small decorative dots */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-500/20 rounded-full"></div>
          <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-blue-500/20 rounded-full"></div>
          <div className="absolute -bottom-2 -right-4 w-4 h-4 bg-purple-500/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
