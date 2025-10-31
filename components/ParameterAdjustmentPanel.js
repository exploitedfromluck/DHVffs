"use client";

import { useState } from "react";

export default function ParameterAdjustmentPanel({ onParametersChange }) {
  const [parameters, setParameters] = useState({
    nEstimators: 10,
    maxSamples: 100,
    maxFeatures: 100,
    bootstrap: true,
    randomState: 42,
  });

  const handleChange = (param, value) => {
    const newParams = { ...parameters, [param]: value };
    setParameters(newParams);
    onParametersChange(newParams);
  };

  return (
    <div className="p-8 mb-8 bg-white border-l-4 border-blue-600 rounded-lg shadow-md">
      <h3 className="mb-6 text-2xl font-bold text-gray-800">
        ⚙️ Adjust Bagging Parameters
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Number of Estimators */}
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">
            👥 Number of Models (n_estimators)
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={parameters.nEstimators}
            onChange={(e) =>
              handleChange("nEstimators", parseInt(e.target.value))
            }
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">1</span>
            <span className="text-2xl font-bold text-blue-600">
              {parameters.nEstimators}
            </span>
            <span className="text-sm text-gray-600">100</span>
          </div>
          <p className="text-xs text-gray-600">
            More models = Better accuracy (slower)
          </p>
        </div>

        {/* Max Samples */}
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">
            📊 Max Samples (%)
          </label>
          <input
            type="range"
            min="10"
            max="100"
            step="10"
            value={parameters.maxSamples}
            onChange={(e) =>
              handleChange("maxSamples", parseInt(e.target.value))
            }
            className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">10%</span>
            <span className="text-2xl font-bold text-green-600">
              {parameters.maxSamples}%
            </span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
          <p className="text-xs text-gray-600">Lower = More diversity</p>
        </div>

        {/* Max Features */}
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">
            🎯 Max Features (%)
          </label>
          <input
            type="range"
            min="10"
            max="100"
            step="10"
            value={parameters.maxFeatures}
            onChange={(e) =>
              handleChange("maxFeatures", parseInt(e.target.value))
            }
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">10%</span>
            <span className="text-2xl font-bold text-purple-600">
              {parameters.maxFeatures}%
            </span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
          <p className="text-xs text-gray-600">Lower = Less overfitting</p>
        </div>

        {/* Bootstrap */}
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">
            🔄 Bootstrap Sampling
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => handleChange("bootstrap", true)}
              className={`flex-1 py-2 px-4 rounded font-semibold transition-all ${
                parameters.bootstrap
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ✅ True
            </button>
            <button
              onClick={() => handleChange("bootstrap", false)}
              className={`flex-1 py-2 px-4 rounded font-semibold transition-all ${
                !parameters.bootstrap
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ❌ False
            </button>
          </div>
          <p className="text-xs text-gray-600">
            True = With replacement (recommended)
          </p>
        </div>

        {/* Random State */}
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">
            🎲 Random State (Seed)
          </label>
          <input
            type="number"
            min="0"
            max="999"
            value={parameters.randomState}
            onChange={(e) =>
              handleChange("randomState", parseInt(e.target.value))
            }
            className="w-full px-3 py-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500"
          />
          <p className="text-xs text-gray-600">For reproducible results</p>
        </div>
      </div>

      {/* Current Configuration Summary */}
      <div className="p-4 mt-6 border-l-4 border-blue-600 rounded-lg bg-blue-50">
        <h4 className="mb-2 font-bold text-blue-800">
          📋 Current Configuration:
        </h4>
        <p className="text-sm text-blue-900">
          <span className="font-mono">
            BaggingClassifier(n_estimators={parameters.nEstimators},
            max_samples={parameters.maxSamples}%, max_features=
            {parameters.maxFeatures}%, bootstrap=
            {parameters.bootstrap ? "True" : "False"}, random_state=
            {parameters.randomState})
          </span>
        </p>
      </div>
    </div>
  );
}
