// SimulationDashboard.jsx
import React, { useState } from "react";
import axios from "axios";
import AlternativeFuturesDashboard from "./AlternativeFuturesDashboard";

const SimulationDashboard = () => {
  const [simulationData, setSimulationData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState("");

  const handleGenerate = async () => {
    if (!decision.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/simulate", {
        decision,
      });
      setSimulationData(res.data.futures);
      setCurrentPage(0);
    } catch (err) {
      console.error("Simulation error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Talk to Your Future</h1>

      {!simulationData && (
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Enter your decision..."
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white w-full max-w-md"
          />
          <button
            onClick={handleGenerate}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            {loading ? "Generating..." : "Generate My Futures"}
          </button>
        </div>
      )}

      {simulationData && (
        <>
          <AlternativeFuturesDashboard
            futureData={simulationData[currentPage]}
            pageIndex={currentPage}
          />

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === simulationData.length - 1}
              className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {simulationData.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "bg-indigo-500 scale-110" : "bg-gray-700 opacity-50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SimulationDashboard;
