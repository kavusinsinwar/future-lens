"use client"

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/useContext"

const Hero = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)
  const [isLoadingDemo, setIsLoadingDemo] = useState(false)

  const handleExploreClick = () => {
    if (user) {
      navigate("/main")
    } else {
      navigate("/login")
    }
  }

  const handleWatchDemoClick = () => {
    setIsLoadingDemo(true)
    setTimeout(() => {
      setIsVideoModalOpen(true)
      setShouldPlayVideo(true)
      setIsLoadingDemo(false)
    }, 1000)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setShouldPlayVideo(false)
  }

  return (
    <>
      {/* Optional Loading Overlay */}
      {isLoadingDemo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <p className="text-white text-xl animate-pulse">Loading Demo...</p>
        </div>
      )}

      <section className="bg-gradient-to-br from-[#121212] via-[#1A1A21] to-[#2A1A3A] text-white px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto gap-8 relative z-10">
          <div className="flex-1 text-left max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-bold leading-tight mb-6">
              Explore Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Alternative Futures
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Make better decisions with AI-powered scenario planning. Visualize multiple life paths and their outcomes before you choose.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExploreClick}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span className="text-2xl group-hover:animate-bounce">🚀</span>
                <span>Start Exploring Free</span>
              </button>
              <button
                onClick={handleWatchDemoClick}
                className="group border-2 border-gray-600 hover:border-purple-500 px-8 py-4 rounded-full hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">▶️</span>
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-gray-400">Decisions Made</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400">AI Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1A1A21] to-[#2A1A3A] mt-0 md:mt-28 p-8 rounded-2xl border border-purple-500/20 shadow-2xl max-w-md text-left backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl transform hover:scale-105 animate-float">
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
              `}</style>

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>

              <p className="text-purple-400 text-sm mb-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-full px-4 py-2 w-fit backdrop-blur-sm border border-purple-500/20">
                ✨ Scenario Preview
              </p>

              <h4 className="font-bold mb-3 text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Career Change Analysis
              </h4>

              <p className="text-sm mb-6 text-gray-300 leading-relaxed">
                Should I accept the job offer in another city or stay at my current position?
              </p>

              <div className="flex justify-between text-sm gap-4">
                <div className="bg-gradient-to-br from-[#1D222D] to-[#2A2A3A] rounded-xl p-4 flex-1 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <p className="text-blue-400 font-bold text-2xl mb-1">78%</p>
                  <p className="text-gray-400 text-xs">Financial Growth</p>
                  <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1D222D] to-[#2A2A3A] rounded-xl p-4 flex-1 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <p className="text-purple-400 font-bold text-2xl mb-1">92%</p>
                  <p className="text-gray-400 text-xs">Career Satisfaction</p>
                  <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-1 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>🤖 AI Confidence: High</span>
                <span>⏱️ Generated in 2.3s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-[#1A1A21] to-[#2A1A3A] rounded-2xl border border-purple-500/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 border-b border-purple-500/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Product Demo
              </h3>
              <p className="text-gray-300 mt-2">See how AI-powered scenario planning works</p>
            </div>

            <div className="p-6">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay={shouldPlayVideo}
                  poster="/placeholder.svg?height=400&width=700"
                >
                  <source src="demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm">
                  Watch how our AI analyzes different life scenarios and helps you make informed decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
