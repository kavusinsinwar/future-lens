const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-[#2A1A3A] via-[#121212] to-[#1A1A21] text-white px-8 py-20" id="how">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FutureLens
            </span>{" "}
            Works
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Three simple steps to better decision making with AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Describe Your Decision",
              desc: "Tell us about the choice you're facing, from career moves to life changes. Our AI understands context and nuance.",
              icon: "✍️",
              gradient: "from-blue-500 to-purple-500",
              bgGradient: "from-blue-900/20 to-purple-900/20",
              borderColor: "border-blue-500/20 hover:border-blue-500/40",
            },
            {
              title: "AI Generates Scenarios",
              desc: "Our advanced AI creates detailed alternative futures based on your specific situation and preferences.",
              icon: "⚙️",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-900/20 to-pink-900/20",
              borderColor: "border-purple-500/20 hover:border-purple-500/40",
            },
            {
              title: "Compare & Decide",
              desc: "Visualize outcomes with interactive charts and make informed decisions with complete confidence.",
              icon: "📊",
              gradient: "from-pink-500 to-red-500",
              bgGradient: "from-pink-900/20 to-red-900/20",
              borderColor: "border-pink-500/20 hover:border-pink-500/40",
            },
          ].map(({ title, desc, icon, gradient, bgGradient, borderColor }, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${bgGradient} backdrop-blur-sm p-8 rounded-2xl border ${borderColor} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl text-center relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>

              <div className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300`}>{icon}</div>

              <h4 className={`font-bold text-xl mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {title}
              </h4>

              <p className="text-gray-300 text-sm leading-relaxed relative z-10">{desc}</p>

              {/* Progress indicator */}
              <div className="mt-6 w-full bg-gray-700 rounded-full h-1">
                <div
                  className={`bg-gradient-to-r ${gradient} h-1 rounded-full transition-all duration-1000 group-hover:w-full`}
                  style={{ width: `${((i + 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🔒", label: "Secure & Private" },
              { icon: "⚡", label: "Lightning Fast" },
              { icon: "🎯", label: "Highly Accurate" },
              { icon: "🌍", label: "Global Access" },
            ].map(({ icon, label }, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 group">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-200">{icon}</div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
