export default function BenefitsSection() {
  const benefits = [
    {
      icon: "📈",
      title: "More Accurate Predictions",
      description:
        "Combining multiple models usually beats using just one. Accuracy improves significantly!",
    },
    {
      icon: "🛡️",
      title: "Reduces Mistakes",
      description:
        "If one model is wrong, others can correct it. Errors cancel out when you average opinions.",
    },
    {
      icon: "⚙️",
      title: "More Stable Results",
      description:
        "Less affected by unusual data points or noise. Consistent performance across different data.",
    },
    {
      icon: "🔒",
      title: "Works as a Safety Net",
      description:
        "Even if some models fail, others keep the prediction reliable. Robust and dependable.",
    },
  ];

  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
          Why Should You Care? Key Benefits
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 transition-shadow border-l-4 border-indigo-500 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">{benefit.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-800">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="p-8 mt-12 text-center text-white bg-indigo-600 rounded-lg">
          <h3 className="mb-4 text-2xl font-bold">Bottom Line</h3>
          <p className="text-lg">
            Bagging is like having a backup team! If one model makes a mistake,
            the others catch it. Together, they&apos;re smarter than any single
            model alone.
          </p>
        </div>
      </div>
    </section>
  );
}
