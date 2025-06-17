"use client"

import React, { useState } from "react"

// Custom UI Components with modern navbar theme
const Button = ({ children, onClick, disabled, className, variant = "default", size = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105"

  const variants = {
    default:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl rounded-full",
    ghost:
      "hover:bg-gray-700/50 backdrop-blur-sm text-gray-300 hover:text-white rounded-full border border-gray-600 hover:border-purple-500",
    outline:
      "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full backdrop-blur-sm",
  }

  const sizes = {
    default: "h-12 py-3 px-6",
    sm: "h-9 px-4 rounded-full text-sm",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className, ...props }) => (
  <div
    className={`rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#1A1A21] to-[#2A1A3A] text-white shadow-2xl backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 ${className}`}
    {...props}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-4 sm:p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className, ...props }) => (
  <h3
    className={`text-xl sm:text-2xl font-bold leading-none tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}
    {...props}
  >
    {children}
  </h3>
)

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 sm:p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`flex min-h-[100px] w-full rounded-xl border border-gray-600 bg-gray-800/50 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ${className}`}
    {...props}
  />
)

const Label = ({ children, className, htmlFor, ...props }) => (
  <label
    className={`text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
)

const Select = ({ children, value, onValueChange, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className={`flex h-12 w-full items-center justify-between rounded-xl border border-gray-600 bg-gray-800/50 backdrop-blur-sm px-4 py-3 text-sm text-white hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <svg
          className={`h-4 w-4 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full z-50 w-full mt-2 rounded-xl border border-gray-600 bg-gray-800/95 backdrop-blur-sm p-2 shadow-2xl">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onSelect: (val) => {
                onValueChange(val)
                setIsOpen(false)
              },
            }),
          )}
        </div>
      )}
    </div>
  )
}

const SelectItem = ({ children, value, onSelect }) => (
  <div
    className="relative flex w-full cursor-pointer select-none items-center rounded-lg py-2 px-3 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all duration-200"
    onClick={() => onSelect(value)}
  >
    {children}
  </div>
)

// Modern Icons with gradients
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
  </svg>
)

const Copy = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

// Gemini AI-inspired Skeleton Components
const SkeletonLine = ({ className, delay = 0 }) => (
  <div
    className={`bg-gradient-to-r from-gray-800/50 via-purple-500/20 to-gray-800/50 rounded-lg animate-pulse ${className}`}
    style={{
      animationDelay: `${delay}ms`,
      backgroundSize: "200% 100%",
      animation: `shimmer 2s infinite linear ${delay}ms, pulse 2s infinite ${delay}ms`,
    }}
  >
    <style jsx>{`
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
    `}</style>
  </div>
)

const SkeletonCard = ({ delay = 0 }) => (
  <Card className="animate-pulse border-purple-500/10">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div className="flex-1 space-y-3">
          <div className="flex items-center space-x-3">
            <SkeletonLine className="h-6 w-32" delay={delay} />
            <SkeletonLine className="h-2 w-2 rounded-full" delay={delay + 100} />
          </div>
          <SkeletonLine className="h-8 w-3/4" delay={delay + 200} />
        </div>
        <div className="flex space-x-2">
          <SkeletonLine className="h-8 w-8 rounded-full" delay={delay + 300} />
          <SkeletonLine className="h-8 w-8 rounded-full" delay={delay + 400} />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <SkeletonLine className="h-4 w-full" delay={delay + 500} />
        <SkeletonLine className="h-4 w-5/6" delay={delay + 600} />
        <SkeletonLine className="h-4 w-4/5" delay={delay + 700} />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-3">
            <SkeletonLine className="h-6 w-24" delay={delay + 800} />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <SkeletonLine className="h-4 w-4 rounded-full" delay={delay + 900 + i * 100} />
                <SkeletonLine className="h-4 flex-1" delay={delay + 950 + i * 100} />
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <SkeletonLine className="h-6 w-24" delay={delay + 1300} />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <SkeletonLine className="h-4 w-4 rounded-full" delay={delay + 1400 + i * 100} />
                <SkeletonLine className="h-4 flex-1" delay={delay + 1450 + i * 100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SkeletonChart = ({ delay = 0 }) => (
  <Card className="animate-pulse border-purple-500/10">
    <CardHeader>
      <SkeletonLine className="h-6 w-48" delay={delay} />
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="relative w-24 h-24 mx-auto">
              <SkeletonLine className="w-24 h-24 rounded-full" delay={delay + i * 200} />
            </div>
            <SkeletonLine className="h-4 w-20 mx-auto" delay={delay + 800 + i * 100} />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

// Fixed Custom Radio Group Components
const RadioGroup = ({ value, onValueChange, className, children }) => (
  <div className={className} role="radiogroup">
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          selectedValue: value,
          onValueChange,
        })
      }
      return child
    })}
  </div>
)

const RadioGroupItem = ({ value, id, selectedValue, onValueChange }) => {
  const handleClick = () => {
    console.log("Radio button clicked:", value) // Debug log
    if (onValueChange) {
      onValueChange(value)
    }
  }

  const isSelected = selectedValue === value

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      className={`aspect-square h-5 w-5 rounded-full border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        isSelected
          ? "border-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
          : "border-gray-500 bg-transparent hover:border-purple-400"
      }`}
      onClick={handleClick}
      id={id}
    >
      {isSelected && (
        <div className="flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      )}
    </button>
  )
}

export default function AlternativeFuturesDashboard() {
  const [inputText, setInputText] = useState("")
  const [selectedInfo, setSelectedInfo] = useState("Kavya AI")
  const [futureScope, setFutureScope] = useState("5 years")
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [detailLevel, setDetailLevel] = useState("basic")
  const [parsedFutures, setParsedFutures] = useState([])
  const [hasResults, setHasResults] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  const parseFuturesFromText = (text) => {
    const futures = []
    const futureBlocks = text.split(/Future \d+:/)

    futureBlocks.forEach((block, index) => {
      if (index === 0) return

      const lines = block
        .trim()
        .split("\n")
        .filter((line) => line.trim())
      let title = ""
      let description = ""
      const pros = []
      const cons = []
      let currentSection = ""

      lines.forEach((line) => {
        const trimmedLine = line.trim()

        if (trimmedLine.startsWith("Title:")) {
          title = trimmedLine.replace("Title:", "").trim()
        } else if (trimmedLine.startsWith("Description:")) {
          description = trimmedLine.replace("Description:", "").trim()
        } else if (trimmedLine === "Pros:") {
          currentSection = "pros"
        } else if (trimmedLine === "Cons:") {
          currentSection = "cons"
        } else if (trimmedLine.startsWith("- ")) {
          const item = trimmedLine.replace("- ", "")
          if (currentSection === "pros") {
            pros.push(item)
          } else if (currentSection === "cons") {
            cons.push(item)
          }
        }
      })

      if (title && description) {
        futures.push({ title, description, pros, cons })
      }
    })

    return futures
  }

  // Generate mock futures if API doesn't return enough
  const generateMockFutures = (count, decision) => {
    const mockFutures = [
      {
        title: "Conservative Approach",
        description: `Taking a cautious path with ${decision}. This approach minimizes risk while maintaining steady progress toward your goals.`,
        pros: [
          "Lower risk exposure",
          "Predictable outcomes",
          "Maintains current stability",
          "Easier to reverse if needed",
        ],
        cons: ["Slower progress", "May miss opportunities", "Limited growth potential", "Could lead to regret"],
      },
      {
        title: "Aggressive Growth Strategy",
        description: `Pursuing an ambitious path with ${decision}. This approach maximizes potential gains but comes with higher risks.`,
        pros: ["Maximum growth potential", "Faster achievement of goals", "Higher rewards", "Builds confidence"],
        cons: ["Higher risk of failure", "Requires more resources", "Stressful execution", "Less predictable outcomes"],
      },
      {
        title: "Balanced Hybrid Approach",
        description: `Finding middle ground with ${decision}. This approach balances risk and reward while maintaining flexibility.`,
        pros: [
          "Balanced risk-reward ratio",
          "Maintains flexibility",
          "Sustainable long-term",
          "Reduces extreme outcomes",
        ],
        cons: [
          "May not maximize potential",
          "Requires careful monitoring",
          "Complex decision making",
          "Moderate results",
        ],
      },
      {
        title: "Innovative Alternative Path",
        description: `Exploring creative solutions for ${decision}. This approach considers unconventional options that others might overlook.`,
        pros: [
          "Unique competitive advantage",
          "Creative problem solving",
          "Potential for breakthrough",
          "Differentiated approach",
        ],
        cons: ["Unproven methods", "Higher uncertainty", "May lack support", "Requires more research"],
      },
    ]

    return mockFutures.slice(0, count)
  }

  const handleGenerate = async () => {
    if (!inputText.trim()) return

    setIsGenerating(true)
    setHasResults(false)
    setParsedFutures([])

    try {
      const res = await fetch("http://localhost:3001/api/simulate/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          decision: inputText,
          age: 30,
          goals: "Grow professionally while maintaining balance",
          risk: "Moderate",
          scope: futureScope,
          detailLevel: detailLevel,
        }),
      })

      const data = await res.json()

      if (data.result) {
        const parsed = parseFuturesFromText(data.result)

        // Determine expected number of futures based on detail level
        const expectedCount = detailLevel === "detailed" ? 4 : 2

        let finalFutures = parsed

        // If we don't have enough futures from API, supplement with mock data
        if (parsed.length < expectedCount) {
          const mockFutures = generateMockFutures(expectedCount, inputText)
          finalFutures = [...parsed, ...mockFutures.slice(parsed.length, expectedCount)]
        } else if (parsed.length > expectedCount) {
          // If we have too many, trim to expected count
          finalFutures = parsed.slice(0, expectedCount)
        }

        setParsedFutures(finalFutures)
        setHasResults(true)
        setCurrentPage(0)
      } else {
        // Fallback to mock data if API fails
        const expectedCount = detailLevel === "detailed" ? 4 : 2
        const mockFutures = generateMockFutures(expectedCount, inputText)
        setParsedFutures(mockFutures)
        setHasResults(true)
        setCurrentPage(0)
      }
    } catch (err) {
      console.error("Error generating:", err)
      // Fallback to mock data on error
      const expectedCount = detailLevel === "detailed" ? 4 : 2
      const mockFutures = generateMockFutures(expectedCount, inputText)
      setParsedFutures(mockFutures)
      setHasResults(true)
      setCurrentPage(0)
    } finally {
      setIsGenerating(false)
    }
  }

  const nextPage = () => {
    if (parsedFutures.length > 0) {
      setCurrentPage((prev) => (prev + 1) % parsedFutures.length)
    }
  }

  const prevPage = () => {
    if (parsedFutures.length > 0) {
      setCurrentPage((prev) => (prev - 1 + parsedFutures.length) % parsedFutures.length)
    }
  }

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  const generateMockData = (futureIndex) => {
    const baseValues = [
      [78, 69, 65, 33],
      [85, 72, 58, 91],
      [82, 45, 67, 74],
      [76, 88, 71, 52],
    ]
    return baseValues[futureIndex % baseValues.length] || [70, 70, 70, 70]
  }

  const generateTrajectoryData = (futureIndex) => {
    const baseData = [
      [60, 65, 70, 72, 75],
      [55, 62, 68, 71, 74],
      [50, 58, 65, 70, 73],
      [65, 70, 75, 78, 80],
    ]
    return baseData[futureIndex % baseData.length] || [60, 65, 70, 72, 75]
  }

  const handleCopyScenario = async () => {
    if (parsedFutures.length > 0) {
      const currentFuture = parsedFutures[currentPage]
      const textToCopy = `
Future Scenario: ${currentFuture.title}

Description: ${currentFuture.description}

Advantages:
${currentFuture.pros.map((pro) => `• ${pro}`).join("\n")}

Challenges:
${currentFuture.cons.map((con) => `• ${con}`).join("\n")}
      `.trim()

      try {
        await navigator.clipboard.writeText(textToCopy)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (err) {
        console.error("Failed to copy:", err)
      }
    }
  }

  const handleEyeClick = () => {
    setShowDetailModal(true)
  }

  const closeDetailModal = () => {
    setShowDetailModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1A1A21] to-[#2A1A3A] text-white p-3 sm:p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Alternative Futures
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Make better decisions with AI-powered scenario planning
          </p>
        </div>

        {/* Input Section */}
        <Card className="border-2 border-purple-500/30 hover:border-purple-500/50">
          <CardContent className="p-4 sm:p-8">
            <div className="space-y-6">
              <div className="relative">
                <Label className="block text-base sm:text-lg mb-4 sm:mb-6 font-medium text-gray-200">
                  ✨ Describe your current decision point
                </Label>
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="E.g. Should I accept a job offer in another city or stay at my current position?"
                  className="text-sm sm:text-base min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <Label className="block text-sm font-medium mb-3 text-gray-300">🤖 Information Source</Label>
                  <Select value={selectedInfo} onValueChange={setSelectedInfo}>
                    <SelectItem value="Kavya AI">Kavya AI</SelectItem>
                  </Select>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-3 text-gray-300">⏰ Future Scope</Label>
                  <Select value={futureScope} onValueChange={setFutureScope}>
                    <SelectItem value="1 year">1 year</SelectItem>
                    <SelectItem value="3 years">3 years</SelectItem>
                    <SelectItem value="5 years">5 years</SelectItem>
                  </Select>
                </div>

                <div className="sm:col-span-2 lg:col-span-1 flex items-end">
                  <div className="flex items-center space-x-4 w-full justify-center lg:justify-start">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="detailLevel"
                        value="basic"
                        checked={detailLevel === "basic"}
                        onChange={() => setDetailLevel("basic")}
                        className="form-radio text-indigo-600"
                      />
                      <span className="text-sm text-gray-300 cursor-pointer">Basic</span>
                    </label>

                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="detailLevel"
                        value="detailed"
                        checked={detailLevel === "detailed"}
                        onChange={() => setDetailLevel("detailed")}
                        className="form-radio text-indigo-600"
                      />
                      <span className="text-sm text-gray-300 cursor-pointer">Detailed</span>
                    </label>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !inputText.trim()}
                className="w-full text-base sm:text-lg py-4 mt-6 sm:mt-8"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                {isGenerating
                  ? `🔮 Generating ${detailLevel === "detailed" ? "4" : "2"} Alternative Futures...`
                  : `🚀 Generate ${detailLevel === "detailed" ? "4" : "2"} Alternative Futures`}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Gemini AI-inspired Loading State */}
        {isGenerating && (
          <div className="space-y-6">
            <Card className="border border-purple-500/30">
              <CardContent className="p-6 sm:p-12">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 border-4 border-purple-500/30"></div>
                    <div className="animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 border-4 border-purple-500 border-t-transparent absolute top-0"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      🔮 Analyzing your decision...
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      Creating {detailLevel === "detailed" ? "4 detailed" : "2 focused"} future scenarios
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {Array.from({
                      length: detailLevel === "detailed" ? 4 : 2,
                    }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skeleton Loading Cards */}
            <div className="space-y-6">
              <SkeletonCard delay={0} />
              <SkeletonChart delay={500} />
              <SkeletonChart delay={1000} />
            </div>
          </div>
        )}

        {/* Results Section */}
        {hasResults && parsedFutures.length > 0 && (
          <>
            {/* Carousel Navigation */}
            <Card className="border border-purple-500/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <Button onClick={prevPage} variant="ghost" className="flex items-center space-x-2 w-full sm:w-auto">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </Button>

                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <span className="text-gray-400 font-medium text-sm sm:text-base">
                      {detailLevel === "detailed" ? "Detailed" : "Basic"} Analysis
                    </span>
                    <div className="flex space-x-2 sm:space-x-3">
                      {parsedFutures.map((_, index) => (
                        <Button
                          key={index}
                          onClick={() => goToPage(index)}
                          variant={currentPage === index ? "default" : "ghost"}
                          size="sm"
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm ${
                            currentPage === index
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                              : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-purple-500/20"
                          }`}
                        >
                          {index + 1}
                        </Button>
                      ))}
                    </div>
                    <span className="text-gray-400 font-medium text-sm sm:text-base">of {parsedFutures.length}</span>
                  </div>

                  <Button onClick={nextPage} variant="ghost" className="flex items-center space-x-2 w-full sm:w-auto">
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Content */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {parsedFutures.map((future, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 space-y-6 sm:space-y-8">
                    {/* Future Details */}
                    <Card className="border border-purple-500/30 hover:border-purple-500/50">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                              <span className="px-3 py-1 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-full text-xs sm:text-sm font-medium border border-purple-500/30 w-fit">
                                Future {pageIndex + 1} of {parsedFutures.length}
                              </span>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-400">
                                  {detailLevel === "detailed" ? "Detailed Analysis" : "Basic Overview"}
                                </span>
                              </div>
                            </div>
                            <CardTitle className="text-xl sm:text-2xl md:text-3xl">{future.title}</CardTitle>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={handleCopyScenario}
                              variant="ghost"
                              size="sm"
                              className={`text-gray-400 hover:text-white transition-all duration-200 ${copySuccess ? "text-green-400" : ""}`}
                              title="Copy scenario to clipboard"
                            >
                              <Copy className="w-4 h-4" />
                              {copySuccess && <span className="ml-1 text-xs">✓</span>}
                            </Button>
                            <Button
                              onClick={handleEyeClick}
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-white"
                              title="View detailed preview"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700/50 backdrop-blur-sm">
                          <p className="text-gray-200 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                            {future.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <div className="space-y-4">
                              <h4 className="font-bold text-green-400 mb-4 flex items-center text-base sm:text-lg">
                                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                                  +
                                </span>
                                Advantages
                              </h4>
                              <ul className="space-y-3">
                                {future.pros &&
                                  future.pros.map((pro, index) => (
                                    <li
                                      key={index}
                                      className="text-gray-300 flex items-start group text-sm sm:text-base"
                                    >
                                      <span className="text-green-400 mr-3 mt-1 group-hover:scale-110 transition-transform">
                                        ✓
                                      </span>
                                      <span className="group-hover:text-white transition-colors">{pro}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h4 className="font-bold text-red-400 mb-4 flex items-center text-base sm:text-lg">
                                <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                                  -
                                </span>
                                Challenges
                              </h4>
                              <ul className="space-y-3">
                                {future.cons &&
                                  future.cons.map((con, index) => (
                                    <li
                                      key={index}
                                      className="text-gray-300 flex items-start group text-sm sm:text-base"
                                    >
                                      <span className="text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform">
                                        ⚠
                                      </span>
                                      <span className="group-hover:text-white transition-colors">{con}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Key Outcomes - Enhanced Circular Progress Charts */}
                    <Card className="border border-purple-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg sm:text-xl">
                          <span className="mr-3">📊</span>
                          Key Outcomes Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                          {["Career Growth", "Life Satisfaction", "Financial Stability", "Work-Life Balance"].map(
                            (label, index) => {
                              const value = generateMockData(pageIndex)[index]
                              const colors = ["#6366F1", "#EC4899", "#06B6D4", "#8B5CF6"]
                              const circumference = 2 * Math.PI * 15.9155
                              const strokeDasharray = `${(value / 100) * circumference} ${circumference}`

                              return (
                                <div key={index} className="text-center group">
                                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-16 h-16 sm:w-24 sm:h-24 transform -rotate-90" viewBox="0 0 36 36">
                                      {/* Background circle */}
                                      <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#1F2937"
                                        strokeWidth="3"
                                      />
                                      {/* Progress circle */}
                                      <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke={colors[index]}
                                        strokeWidth="3"
                                        strokeDasharray={strokeDasharray}
                                        strokeLinecap="round"
                                        className="drop-shadow-lg"
                                        style={{
                                          filter: `drop-shadow(0 0 6px ${colors[index]}40)`,
                                        }}
                                      />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <span className="text-base sm:text-xl font-bold text-white group-hover:scale-110 transition-transform">
                                        {value}%
                                      </span>
                                    </div>
                                  </div>
                                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                                    {label}
                                  </p>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Outcome Trajectory - Enhanced Line Graph */}
                    <Card className="border border-purple-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg sm:text-xl">
                          <span className="mr-3">📈</span>
                          Success Trajectory Over Time
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 sm:h-96 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-4 sm:p-6 relative backdrop-blur-sm border border-gray-700/30">
                          <svg className="w-full h-full" viewBox="0 0 600 300">
                            {/* Enhanced Grid pattern */}
                            <defs>
                              <pattern id={`grid-${pageIndex}`} width="60" height="30" patternUnits="userSpaceOnUse">
                                <path
                                  d="M 60 0 L 0 0 0 30"
                                  fill="none"
                                  stroke="#374151"
                                  strokeWidth="0.5"
                                  opacity="0.5"
                                />
                              </pattern>
                              <linearGradient id={`lineGradient-${pageIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="50%" stopColor="#EC4899" />
                                <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#grid-${pageIndex})`} />

                            {/* Y-axis labels */}
                            {[0, 25, 50, 75, 100].map((val, i) => (
                              <text
                                key={i}
                                x="30"
                                y={260 - i * 50}
                                textAnchor="end"
                                fill="#9CA3AF"
                                fontSize="10"
                                fontWeight="500"
                                className="sm:text-xs"
                              >
                                {val}%
                              </text>
                            ))}

                            {/* Trajectory line with gradient */}
                            <polyline
                              fill="none"
                              stroke={`url(#lineGradient-${pageIndex})`}
                              strokeWidth="3"
                              points={generateTrajectoryData(pageIndex)
                                .map((val, i) => `${80 + i * 120},${260 - val * 2}`)
                                .join(" ")}
                              style={{
                                filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))",
                              }}
                            />

                            {/* Enhanced Data points */}
                            {generateTrajectoryData(pageIndex).map((val, i) => (
                              <g key={i}>
                                <circle
                                  cx={80 + i * 120}
                                  cy={260 - val * 2}
                                  r="5"
                                  fill="#8B5CF6"
                                  className="hover:r-8 transition-all cursor-pointer"
                                  style={{
                                    filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.8))",
                                  }}
                                />
                                <circle cx={80 + i * 120} cy={260 - val * 2} r="2" fill="white" />
                              </g>
                            ))}

                            {/* X-axis labels */}
                            {["1Y", "2Y", "3Y", "4Y", "5Y"].map((label, i) => (
                              <text
                                key={i}
                                x={80 + i * 120}
                                y={285}
                                textAnchor="middle"
                                fill="#9CA3AF"
                                fontSize="10"
                                fontWeight="500"
                                className="sm:text-xs"
                              >
                                {label}
                              </text>
                            ))}
                          </svg>

                          {/* Enhanced Legend */}
                          <div className="absolute top-2 sm:top-6 right-2 sm:right-6 bg-gray-900/80 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-gray-700/50">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                              <span className="text-xs sm:text-sm text-gray-300 font-medium">Success Trajectory</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Enhanced Scenario Comparison - Radar Chart */}
                    <Card className="border border-purple-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg sm:text-xl">
                          <span className="mr-3">🎯</span>
                          Multi-Dimensional Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 sm:h-96 flex  items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30">
                          <svg width="100%" height="100%" viewBox="0 0 500 480" className="max-w-sm sm:max-w-none">
                            <g transform="translate(225,225)">
                              {/* Enhanced Grid circles */}
                              {[40, 80, 120, 160, 200].map((r, i) => (
                                <circle
                                  key={r}
                                  cx="0"
                                  cy="0"
                                  r={r}
                                  fill="none"
                                  stroke="#374151"
                                  strokeWidth="1"
                                  opacity={0.3 + i * 0.1}
                                />
                              ))}

                              {/* Grid lines */}
                              {[0, 1, 2, 3, 4, 5].map((i) => {
                                const angle = ((i * 60 - 90) * Math.PI) / 180
                                return (
                                  <line
                                    key={i}
                                    x1="0"
                                    y1="0"
                                    x2={Math.cos(angle) * 200}
                                    y2={Math.sin(angle) * 200}
                                    stroke="#374151"
                                    strokeWidth="1"
                                    opacity="0.4"
                                  />
                                )
                              })}

                              {/* Enhanced Data polygon */}
                              <defs>
                                <linearGradient id={`radarGradient-${pageIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                                  <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
                                  <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
                                </linearGradient>
                              </defs>
                              <polygon
                                points={
                                  pageIndex === 0
                                    ? "0,-160 138,-80 138,80 0,120 -138,80 -138,-80"
                                    : pageIndex === 1
                                      ? "0,-140 160,-60 100,100 0,90 -160,60 -100,-100"
                                      : pageIndex === 2
                                        ? "0,-180 120,-90 160,60 0,130 -120,90 -160,-60"
                                        : "0,-150 130,-75 120,90 0,110 -130,75 -120,-90"
                                }
                                fill={`url(#radarGradient-${pageIndex})`}
                                stroke="#8B5CF6"
                                strokeWidth="3"
                                style={{
                                  filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))",
                                }}
                              />

                              {/* Enhanced Labels */}
                              <text
                                x="0"
                                y="-210"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill="#E5E7EB"
                                fontSize="12"
                                fontWeight="600"
                                className="text-xs sm:text-sm"
                              >
                                Career
                              </text>
                              <text
                                x="170"
                                y="-90"
                                textAnchor="start"
                                fill="#E5E7EB"
                                fontSize="12"
                                fontWeight="600"
                                className="text-xs sm:text-sm"
                              >
                                Growth
                              </text>
                              <text
                                x="170"
                                y="95"
                                textAnchor="start"
                                fill="#E5E7EB"
                                fontSize="12"
                                fontWeight="600"
                                className="text-xs sm:text-sm"
                              >
                                Balance
                              </text>
                              <text
                                x="0"
                                y="140"
                                textAnchor="middle"
                                fill="#E5E7EB"
                                fontSize="12"
                                fontWeight="600"
                                className="text-xs sm:text-sm"
                              >
                                Financial
                              </text>
                              <text
                                x="-170"
                                y="95"
                                textAnchor="end"
                                fill="#E5E7EB"
                                fontSize="12"
                                fontWeight="600"
                                className="text-xs sm:text-sm"
                              >
                                Location
                              </text>
                              <text
                                x="-170"
                                y="-90"
                                textAnchor="end"
                                fill="#E5E7EB"
                                fontSize="12"
                                fontWeight="600"
                                className="text-xs sm:text-sm"
                              >
                                Social
                              </text>
                            </g>
                          </svg>
                        </div>

                        <div className="flex justify-center space-x-4 sm:space-x-8 mt-6 sm:mt-8">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm text-gray-300 font-medium">
                              Scenario {pageIndex + 1} Analysis
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Page Indicators */}
            <div className="flex justify-center space-x-2 sm:space-x-3">
              {parsedFutures.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 sm:h-3 w-8 sm:w-12 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === index
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  onClick={() => goToPage(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Detail Modal */}
      {showDetailModal && parsedFutures.length > 0 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-[#1A1A21] to-[#2A1A3A] rounded-2xl border border-purple-500/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={closeDetailModal}
              className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {parsedFutures[currentPage].title}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {parsedFutures[currentPage].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-xl p-4 sm:p-6 border border-green-500/20">
                  <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      +
                    </span>
                    Key Advantages
                  </h3>
                  <ul className="space-y-3">
                    {parsedFutures[currentPage].pros.map((pro, index) => (
                      <li key={index} className="text-gray-200 flex items-start text-sm sm:text-base">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-xl p-4 sm:p-6 border border-red-500/20">
                  <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-3">-</span>
                    Key Challenges
                  </h3>
                  <ul className="space-y-3">
                    {parsedFutures[currentPage].cons.map((con, index) => (
                      <li key={index} className="text-gray-200 flex items-start text-sm sm:text-base">
                        <span className="text-red-400 mr-3 mt-1">⚠</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <Button
                  onClick={handleCopyScenario}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Full Scenario
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
