"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import DatasetVisualization from "../../components/DatasetVisualization";
import BaggingHyperparameters from "../../components/BaggingHyperparameters";

// Metric Card and ConfusionMatrix (same as before)
function MetricCard({ title, singleValue, baggedValue, unit = "%" }) {
  const diff = (baggedValue - singleValue).toFixed(2);
  const diffPercent = ((diff / singleValue) * 100).toFixed(1);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
      <h4 className="text-lg font-bold text-gray-800 mb-4">{title}</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-sm text-gray-600 mb-1">Single Model</p>
          <p className="text-3xl font-bold text-red-600">
            {(singleValue * 100).toFixed(2)}
            {unit}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <p className="text-sm text-gray-600 mb-1">Bagging</p>
          <p className="text-3xl font-bold text-green-600">
            {(baggedValue * 100).toFixed(2)}
            {unit}
          </p>
        </div>
      </div>

      <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
        <p className="text-blue-900 font-semibold">
          ✅ Improvement:{" "}
          <span className="text-lg">
            {(diff * 100).toFixed(2)}
            {unit}
          </span>{" "}
          (+{diffPercent}%)
        </p>
      </div>
    </div>
  );
}

function ConfusionMatrix({ title, matrix }) {
  if (!matrix) return null;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-bold text-gray-800 mb-4">{title}</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border-2 border-gray-300 p-3 text-center font-semibold"
                    style={{
                      backgroundColor:
                        cell > Math.max(...row) * 0.6 ? "#d1fae5" : "#fecaca",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DemoResultsPage() {
  const searchParams = useSearchParams();
  const dataset = searchParams.get("dataset") || "iris";
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for different datasets
  const mockResultsData = {
    iris: {
      name: "Iris Flower Dataset",
      samples: 150,
      features: 4,
      classes: 3,
      trainSize: 120,
      testSize: 30,
      trainTestSplit: "80-20",
      singleModel: {
        name: "Single Decision Tree",
        trainingAccuracy: 0.95,
        testingAccuracy: 0.75,
        precision: 0.76,
        recall: 0.75,
        f1Score: 0.74,
        confusionMatrix: [
          [9, 1, 0],
          [0, 10, 2],
          [0, 3, 5],
        ],
      },
      baggedModel: {
        name: "Bagging Ensemble (10 Trees)",
        trainingAccuracy: 0.97,
        testingAccuracy: 0.88,
        precision: 0.89,
        recall: 0.88,
        f1Score: 0.87,
        confusionMatrix: [
          [10, 0, 0],
          [0, 11, 1],
          [0, 1, 7],
        ],
      },
    },
    titanic: {
      name: "Titanic Survival Prediction",
      samples: 891,
      features: 11,
      classes: 2,
      trainSize: 713,
      testSize: 178,
      trainTestSplit: "80-20",
      singleModel: {
        name: "Single Decision Tree",
        trainingAccuracy: 0.82,
        testingAccuracy: 0.72,
        precision: 0.71,
        recall: 0.7,
        f1Score: 0.7,
        confusionMatrix: [
          [85, 20],
          [30, 43],
        ],
      },
      baggedModel: {
        name: "Bagging Ensemble (10 Trees)",
        trainingAccuracy: 0.85,
        testingAccuracy: 0.81,
        precision: 0.82,
        recall: 0.8,
        f1Score: 0.81,
        confusionMatrix: [
          [92, 13],
          [20, 53],
        ],
      },
    },
    housing: {
      name: "Housing Price Prediction",
      samples: 506,
      features: 13,
      classes: "Regression",
      trainSize: 405,
      testSize: 101,
      trainTestSplit: "80-20",
      singleModel: {
        name: "Single Decision Tree",
        trainingAccuracy: 0.78,
        testingAccuracy: 0.71,
        precision: 0.7,
        recall: 0.72,
        f1Score: 0.71,
        confusionMatrix: null,
        rmse: 4.82,
        mae: 3.15,
      },
      baggedModel: {
        name: "Bagging Ensemble (10 Trees)",
        trainingAccuracy: 0.82,
        testingAccuracy: 0.79,
        precision: 0.78,
        recall: 0.8,
        f1Score: 0.79,
        confusionMatrix: null,
        rmse: 3.45,
        mae: 2.18,
      },
    },
    wine: {
      name: "Wine Quality Classification",
      samples: 178,
      features: 13,
      classes: 3,
      trainSize: 142,
      testSize: 36,
      trainTestSplit: "80-20",
      singleModel: {
        name: "Single Decision Tree",
        trainingAccuracy: 0.93,
        testingAccuracy: 0.78,
        precision: 0.78,
        recall: 0.77,
        f1Score: 0.77,
        confusionMatrix: [
          [10, 1, 0],
          [2, 11, 2],
          [0, 3, 7],
        ],
      },
      baggedModel: {
        name: "Bagging Ensemble (10 Trees)",
        trainingAccuracy: 0.96,
        testingAccuracy: 0.86,
        precision: 0.86,
        recall: 0.85,
        f1Score: 0.85,
        confusionMatrix: [
          [11, 0, 0],
          [1, 12, 2],
          [0, 1, 9],
        ],
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(mockResultsData[dataset]);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [dataset]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Running Bagging Demo...
          </h1>
          <div className="flex justify-center gap-3 mb-8">
            <div className="animate-bounce w-4 h-4 bg-blue-600 rounded-full"></div>
            <div
              className="animate-bounce w-4 h-4 bg-blue-600 rounded-full"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="animate-bounce w-4 h-4 bg-blue-600 rounded-full"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <p className="text-gray-600 text-lg">
            Training single model and bagging ensemble...
          </p>
        </div>
      </main>
    );
  }

  if (!results) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-lg">No results found</p>
          <Link href="/">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
              Back Home
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const improvement = (
    (results.baggedModel.testingAccuracy -
      results.singleModel.testingAccuracy) *
    100
  ).toFixed(2);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/#demo">
          <button className="mb-8 px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700">
            ← Back to Demo
          </button>
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">{results.name}</h1>
          <p className="text-xl">
            Bagging Demonstration & Performance Analysis
          </p>
        </div>
        {/*BaggingHyperparameters*/}
        <BaggingHyperparameters />
        {/* Dataset Visualization */}
        <DatasetVisualization dataset={dataset} />

        {/* Dataset Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm mb-1">Total Samples</p>
            <p className="text-3xl font-bold text-blue-600">
              {results.samples}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-600 text-sm mb-1">Features</p>
            <p className="text-3xl font-bold text-green-600">
              {results.features}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-600 text-sm mb-1">Train Set</p>
            <p className="text-3xl font-bold text-purple-600">
              {results.trainSize} (80%)
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-600 text-sm mb-1">Test Set</p>
            <p className="text-3xl font-bold text-orange-600">
              {results.testSize} (20%)
            </p>
          </div>
        </div>

        {/* Training vs Testing Accuracy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Single Model */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-600 mb-6">
              {results.singleModel.name}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    Training Accuracy
                  </span>
                  <span className="text-red-600 font-bold">
                    {(results.singleModel.trainingAccuracy * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{
                      width: `${results.singleModel.trainingAccuracy * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    Testing Accuracy
                  </span>
                  <span className="text-red-600 font-bold">
                    {(results.singleModel.testingAccuracy * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{
                      width: `${results.singleModel.testingAccuracy * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <p className="text-red-900">
                <span className="font-bold">Overfitting Gap:</span>{" "}
                {(
                  (results.singleModel.trainingAccuracy -
                    results.singleModel.testingAccuracy) *
                  100
                ).toFixed(2)}
                %
              </p>
              <p className="text-red-800 text-sm mt-1">
                Model performs better on training data, showing some overfitting
              </p>
            </div>
          </div>

          {/* Bagging Model */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-600 mb-6">
              {results.baggedModel.name}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    Training Accuracy
                  </span>
                  <span className="text-green-600 font-bold">
                    {(results.baggedModel.trainingAccuracy * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{
                      width: `${results.baggedModel.trainingAccuracy * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    Testing Accuracy
                  </span>
                  <span className="text-green-600 font-bold">
                    {(results.baggedModel.testingAccuracy * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{
                      width: `${results.baggedModel.testingAccuracy * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <p className="text-green-900">
                <span className="font-bold">Overfitting Gap:</span>{" "}
                {(
                  (results.baggedModel.trainingAccuracy -
                    results.baggedModel.testingAccuracy) *
                  100
                ).toFixed(2)}
                %
              </p>
              <p className="text-green-800 text-sm mt-1">
                Better generalization - smaller gap between training and testing
              </p>
            </div>
          </div>
        </div>

        {/* Overall Improvement */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-lg shadow-md border-l-4 border-blue-600 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            🎯 Overall Improvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Testing Accuracy Improvement:</span>
              </p>
              <p className="text-4xl font-bold text-green-600">
                {improvement}%
              </p>
              <p className="text-gray-600 mt-2">
                From {(results.singleModel.testingAccuracy * 100).toFixed(2)}%
                to {(results.baggedModel.testingAccuracy * 100).toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Correct Predictions:</span>
              </p>
              <p className="text-2xl font-bold text-green-600">
                {Math.round(
                  results.baggedModel.testingAccuracy * results.testSize
                )}{" "}
                / {results.testSize}
              </p>
              <p className="text-gray-600 mt-2">
                Vs{" "}
                {Math.round(
                  results.singleModel.testingAccuracy * results.testSize
                )}{" "}
                / {results.testSize} for single model
              </p>
            </div>
          </div>
        </div>

        {/* Evaluation Metrics */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          📊 Evaluation Metrics Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricCard
            title="Accuracy"
            singleValue={results.singleModel.testingAccuracy}
            baggedValue={results.baggedModel.testingAccuracy}
          />
          <MetricCard
            title="Precision"
            singleValue={results.singleModel.precision}
            baggedValue={results.baggedModel.precision}
          />
          <MetricCard
            title="Recall"
            singleValue={results.singleModel.recall}
            baggedValue={results.baggedModel.recall}
          />
          <MetricCard
            title="F1 Score"
            singleValue={results.singleModel.f1Score}
            baggedValue={results.baggedModel.f1Score}
          />
        </div>

        {/* Confusion Matrices */}
        {results.singleModel.confusionMatrix && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              🔢 Confusion Matrices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ConfusionMatrix
                title="Single Model"
                matrix={results.singleModel.confusionMatrix}
              />
              <ConfusionMatrix
                title="Bagging Ensemble"
                matrix={results.baggedModel.confusionMatrix}
              />
            </div>
            <p className="text-gray-600 text-sm mb-8">
              <span className="font-semibold">Green cells:</span> Correct
              predictions |
              <span className="font-semibold ml-2">Red cells:</span> Incorrect
              predictions
            </p>
          </div>
        )}

        {/* Key Insights */}
        <div className="bg-indigo-50 p-8 rounded-lg shadow-md border-l-4 border-indigo-600 mb-8">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">
            💡 Key Insights
          </h3>
          <ul className="space-y-3 text-indigo-900">
            <li>
              ✅ Bagging improved testing accuracy by{" "}
              <span className="font-bold">{improvement}%</span>
            </li>
            <li>✅ Bagging reduces overfitting: Training gap is smaller</li>
            <li>✅ Ensemble predictions are more stable and reliable</li>
            <li>✅ Multiple models catch errors that single model misses</li>
            <li>✅ Better generalization on unseen test data</li>
          </ul>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
