"use client";

import { useState } from "react";
import Link from "next/link";

export default function InteractiveDemoSection() {
  const [selectedDataset, setSelectedDataset] = useState("iris");
  const [showResults, setShowResults] = useState(false);

  const datasets = [
    {
      id: "iris",
      name: "Iris Flower Dataset",
      samples: 150,
      features: 4,
      description: "Classify iris flowers into 3 species",
    },
    {
      id: "titanic",
      name: "Titanic Survival",
      samples: 891,
      features: 11,
      description: "Predict passenger survival",
    },
    {
      id: "housing",
      name: "Housing Prices",
      samples: 506,
      features: 13,
      description: "Predict house prices",
    },
    {
      id: "wine",
      name: "Wine Classification",
      samples: 178,
      features: 13,
      description: "Classify wine quality",
    },
  ];

  const currentDataset = datasets.find((d) => d.id === selectedDataset);

  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-2 text-4xl font-bold text-center text-gray-800">
          🎯 Try Bagging on Sample Datasets
        </h2>
        <p className="mb-8 text-lg text-center text-gray-600">
          Select a dataset and run bagging to see detailed training, testing,
          and comparison results
        </p>

        {/* Dataset Selection */}
        <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
          {datasets.map((dataset) => (
            <button
              key={dataset.id}
              onClick={() => {
                setSelectedDataset(dataset.id);
                setShowResults(false);
              }}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer text-left ${
                selectedDataset === dataset.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:border-blue-600"
              }`}
            >
              <h4 className="text-lg font-bold">{dataset.name}</h4>
              <p
                className={`text-sm ${
                  selectedDataset === dataset.id
                    ? "text-blue-100"
                    : "text-gray-600"
                }`}
              >
                {dataset.samples} samples
              </p>
              <p
                className={`text-sm ${
                  selectedDataset === dataset.id
                    ? "text-blue-100"
                    : "text-gray-600"
                }`}
              >
                {dataset.features} features
              </p>
            </button>
          ))}
        </div>

        {/* Dataset Info */}
        <div className="p-6 mb-8 border-l-4 border-blue-600 rounded-lg bg-blue-50">
          <h3 className="mb-2 text-2xl font-bold text-blue-800">
            {currentDataset?.name}
          </h3>
          <p className="mb-2 text-gray-700">{currentDataset?.description}</p>
          <p className="text-gray-700">
            Samples:{" "}
            <span className="font-bold">{currentDataset?.samples}</span> |
            Features:{" "}
            <span className="font-bold">{currentDataset?.features}</span>
          </p>
        </div>

        {/* Run Button */}
        <div className="mb-8 text-center">
          <Link href={`/demo-results?dataset=${selectedDataset}`}>
            <button className="px-8 py-3 text-lg font-bold text-white transition-all bg-green-600 rounded-lg shadow-lg cursor-pointer hover:bg-green-700">
              ▶️ Run Demo & See Results
            </button>
          </Link>
        </div>

        {/* Info Box */}
        <div className="p-6 border-l-4 border-indigo-600 rounded-lg bg-indigo-50">
          <h4 className="mb-2 text-lg font-bold text-indigo-800">
            What Will You See?
          </h4>
          <ul className="space-y-2 text-indigo-900">
            <li>✅ Data split into training (80%) and testing (20%)</li>
            <li>✅ Single model training results</li>
            <li>✅ Bagging ensemble training results (10 models)</li>
            <li>✅ Predictions on test data</li>
            <li>
              ✅ Evaluation metrics comparison (Accuracy, Precision, Recall, F1)
            </li>
            <li>✅ Confusion matrices for both models</li>
            <li>✅ Visual charts and insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
