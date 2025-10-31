"use client";

import { useState } from "react";

export default function EngineeringExamplesSection() {
  const [activeTab, setActiveTab] = useState("cs");

  const examples = {
    cs: {
      title: "Computer Science & IT",
      icon: "💻",
      color: "blue",
      items: [
        "🔒 Spam Detection - Identify unwanted emails more accurately",
        "👤 Face Recognition - Improve accuracy by combining multiple recognition models",
        "📱 Recommendation Systems - Better product suggestions by voting among models",
      ],
    },
    mechanical: {
      title: "Mechanical Engineering",
      icon: "🔧",
      color: "orange",
      items: [
        "⚙️ Predictive Maintenance - Predict when machines need servicing (more reliable)",
        "✅ Quality Control - Detect defective products in manufacturing",
        "⚡ Energy Optimization - Forecast equipment energy consumption accurately",
      ],
    },
    civil: {
      title: "Civil Engineering",
      icon: "🏗️",
      color: "yellow",
      items: [
        "🏢 Structural Health - Monitor when buildings need inspection",
        "🚦 Traffic Prediction - Forecast traffic flow patterns accurately",
        "🔨 Material Testing - Predict concrete strength and durability",
      ],
    },
    electrical: {
      title: "Electrical Engineering",
      icon: "⚡",
      color: "pink",
      items: [
        "⚙️ Power Grid Stability - Predict and prevent blackouts",
        "📊 Load Forecasting - Estimate future electricity demand",
        "🔌 Equipment Failure - Identify failing components early",
      ],
    },
    chemical: {
      title: "Chemical Engineering",
      icon: "⚗️",
      color: "purple",
      items: [
        "🧪 Process Optimization - Improve chemical reaction efficiency",
        "📈 Quality Prediction - Forecast product quality in batch processes",
        "⚠️ Safety Monitoring - Predict hazardous conditions before they occur",
      ],
    },
    biomedical: {
      title: "Biomedical Engineering",
      icon: "🏥",
      color: "red",
      items: [
        "🩺 Disease Diagnosis - Improve medical diagnosis accuracy by 10-20%",
        "🖼️ Medical Imaging - Detect abnormalities in X-rays and MRI scans",
        "💊 Drug Efficacy - Forecast treatment outcomes more reliably",
      ],
    },
    industrial: {
      title: "Industrial Engineering",
      icon: "🏭",
      color: "gray",
      items: [
        "📦 Supply Chain - Predict demand and optimize inventory",
        "🔍 Defect Detection - Find quality issues in production faster",
        "⚙️ Efficiency - Optimize manufacturing workflows and reduce waste",
      ],
    },
    electronics: {
      title: "Electronics Engineering",
      icon: "🔌",
      color: "indigo",
      items: [
        "🔧 Fault Detection - Identify electronic component failures early",
        "📡 Signal Processing - Clean noisy sensor data effectively",
        "🔋 Reliability - Predict component lifespan and failure rates",
      ],
    },
  };

  const tabs = [
    { key: "cs", label: "CS/IT", icon: "💻" },
    { key: "mechanical", label: "Mechanical", icon: "🔧" },
    { key: "civil", label: "Civil", icon: "🏗️" },
    { key: "electrical", label: "Electrical", icon: "⚡" },
    { key: "chemical", label: "Chemical", icon: "⚗️" },
    { key: "biomedical", label: "Biomedical", icon: "🏥" },
    { key: "industrial", label: "Industrial", icon: "🏭" },
    { key: "electronics", label: "Electronics", icon: "🔌" },
  ];

  const currentExample = examples[activeTab];

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">
          Real Examples from Engineering Field
        </h2>
        <p className="mb-8 text-lg text-center text-gray-600">
          Bagging is used in every engineering discipline. Click your field to
          see how!
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-600"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <span className="mr-4 text-5xl">{currentExample.icon}</span>
            <h3 className="text-3xl font-bold text-gray-800">
              {currentExample.title}
            </h3>
          </div>

          <div className="space-y-4">
            {currentExample.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 border-l-4 border-blue-500 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50"
              >
                <span className="mr-4 text-2xl">{item.split(" ")[0]}</span>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-4 mt-6 bg-blue-100 border-l-4 border-blue-600 rounded-lg">
            <p className="text-gray-800">
              <span className="font-bold">💡 Key Point:</span> No matter your
              engineering field, bagging improves predictions by combining
              multiple models. It&apos;s a universal technique used across all
              industries!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
