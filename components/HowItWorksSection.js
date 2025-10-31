export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Start with Your Data",
      description: "You have a dataset with information you want to learn from",
      example: "Like having a box of past exam questions and answers",
      icon: "📊",
    },
    {
      number: 2,
      title: "Create Multiple Random Samples",
      description:
        "Make several different versions by randomly picking data points (some can repeat)",
      example: "Like making different study guides, each with random questions",
      icon: "🎲",
    },
    {
      number: 3,
      title: "Train Different Models",
      description:
        "Each sample trains its own model - they all learn slightly differently",
      example:
        "Like different students studying different combinations of questions",
      icon: "🧠",
    },
    {
      number: 4,
      title: "Vote on the Final Answer",
      description:
        "When making a prediction, all models vote and the majority wins!",
      example: "Like all students voting on what they think the answer is",
      icon: "🗳️",
    },
  ];

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
          How Bagging Works: 4 Simple Steps
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 transition-shadow bg-white border-t-4 border-blue-500 rounded-lg shadow-lg hover:shadow-xl"
            >
              {/* Step Header */}
              <div className="flex items-center mb-4">
                <div className="mr-4 text-4xl">{step.icon}</div>
                <div>
                  <span className="inline-block px-3 py-1 mr-2 text-sm font-bold text-white bg-blue-500 rounded-full">
                    Step {step.number}
                  </span>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mb-4 text-gray-700">{step.description}</p>

              {/* Example */}
              <div className="p-3 border-l-4 border-blue-300 rounded bg-blue-50">
                <p className="text-sm italic text-gray-700">
                  <span className="font-semibold">Everyday Example:</span>{" "}
                  {step.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Flow Explanation */}
        <div className="p-8 mt-12 text-center bg-blue-100 rounded-lg">
          <h3 className="mb-4 text-2xl font-bold text-blue-800">
            The Complete Flow
          </h3>
          <div className="flex flex-wrap items-center justify-center space-x-4">
            <div className="px-4 py-2 font-semibold bg-white rounded">
              📊 Data
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="px-4 py-2 font-semibold bg-white rounded">
              🎲 Samples
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="px-4 py-2 font-semibold bg-white rounded">
              🧠 Models
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="px-4 py-2 font-semibold bg-white rounded">
              🗳️ Vote
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="px-4 py-2 font-semibold bg-green-200 rounded">
              ✅ Better Prediction!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
