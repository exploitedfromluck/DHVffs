"use client";

import { useState } from "react";

export default function MathematicalFoundationSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="px-4 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">
          The Math Behind Bagging
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Want to understand the mathematical principles? Click below!
        </p>

        {/* Expandable Section */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full p-6 transition-shadow bg-white border-l-4 border-blue-600 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
        >
          <span className="text-2xl font-bold text-gray-800">
            📐 Mathematical Foundation
          </span>
          <span
            className={`text-3xl transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-6">
            {/* Formula 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                1️⃣ Bagged Prediction Formula
              </h3>
              <div className="p-4 mb-4 border-l-4 border-blue-600 rounded bg-blue-50">
                <p className="font-mono text-lg text-gray-800 break-words">
                  f_bag(x) = (1/B) × Σ f_i(x)
                </p>
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Translation:</span> The final
                prediction is the average of all B model predictions.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                B = number of models, f_i(x) = prediction from model i
              </p>
            </div>

            {/* Formula 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                2️⃣ Variance Reduction (The Key Benefit!)
              </h3>
              <div className="p-4 mb-4 border-l-4 border-green-600 rounded bg-green-50">
                <p className="font-mono text-lg text-gray-800 break-words">
                  Var(f_bag(x)) = (1/B) × Var(f(x))
                </p>
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Translation:</span> Variance
                (errors) reduces by a factor of B. With 10 models, variance
                becomes 1/10th!
              </p>
              <p className="mt-2 text-sm text-gray-600">
                This is why bagging works: More models = Lower errors
              </p>
            </div>

            {/* Formula 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                3️⃣ Bootstrap Sampling
              </h3>
              <div className="p-4 mb-4 border-l-4 border-purple-600 rounded bg-purple-50">
                <p className="font-mono text-lg text-gray-800 break-words">
                  Each sample: Random selection with replacement (63.2% unique
                  data)
                </p>
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Translation:</span> When creating a
                dataset of size N by random selection with replacement,
                approximately 63.2% of original data points are unique.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                The 36.8% duplicates provide diversity for training different
                models!
              </p>
            </div>

            {/* Key Insight */}
            <div className="p-6 bg-indigo-100 border-l-4 border-indigo-600 rounded-lg">
              <h3 className="mb-3 text-2xl font-bold text-indigo-800">
                🔑 Key Mathematical Insight
              </h3>
              <p className="text-indigo-900">
                Bagging reduces variance (model instability) while keeping bias
                roughly the same. This is the bias-variance trade-off, and
                bagging exploits it beautifully!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
