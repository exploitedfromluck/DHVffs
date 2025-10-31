import React from "react";
import { Pie, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface DatasetVisualizationProps {
  dataset: string;
}

export default function DatasetVisualization({ dataset }: DatasetVisualizationProps) {
  if (dataset === "iris") {
    // Pie chart for class distribution
    const data = {
      labels: ["Setosa", "Versicolor", "Virginica"],
      datasets: [
        {
          data: [50, 50, 50],
          backgroundColor: ["#a78bfa", "#c4b5fd", "#6d28d9"]
        }
      ]
    };
    return (
      <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-purple-700 mb-3">Iris Class Distribution</h3>
        <Pie data={data} />
      </div>
    );
  }
  if (dataset === "titanic") {
    // Pie chart for survival rate
    const data = {
      labels: ["Survived", "Not Survived"],
      datasets: [
        {
          data: [340, 551], // use your real dataset numbers if different
          backgroundColor: ["#2563eb", "#d1d5db"]
        }
      ]
    };
    return (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Titanic Survival Ratio</h3>
        <Pie data={data} />
      </div>
    );
  }
  if (dataset === "housing") {
    // Histogram for house price ranges (dummy bins here, ideally from your real data)
    const data = {
      labels: ["<15k", "15-20k", "20-25k", "25-30k", "30-35k", "35-50k+"],
      datasets: [
        {
          label: "House Count",
          data: [60, 100, 170, 90, 60, 26],
          backgroundColor: "#34d399"
        }
      ]
    };
    return (
      <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-green-700 mb-3">House Price Distribution</h3>
        <Bar data={data} options={{ plugins: { legend: { display: false }}}}/>
      </div>
    );
  }
  if (dataset === "wine") {
    // Doughnut for wine class
    const data = {
      labels: ["Class 0", "Class 1", "Class 2"],
      datasets: [
        {
          data: [59, 71, 48],
          backgroundColor: ["#ef4444", "#f59e42", "#a6e3e9"]
        }
      ]
    };
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-red-700 mb-3">Wine Class Distribution</h3>
        <Doughnut data={data} />
      </div>
    );
  }
  return null;
}
