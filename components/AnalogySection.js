export default function AnalogySection() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Think of It Like a Group Project Decision
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Bad Approach */}
          <div className="p-6 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
            <h3 className="mb-4 text-2xl font-bold text-red-600">
              ❌ Asking Just ONE Person
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-red-500">•</span>
                <span>Might have personal bias</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-red-500">•</span>
                <span>Could make a mistake</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-red-500">•</span>
                <span>Limited perspective</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-red-600">
              Result: Risky Decision ⚠️
            </p>
          </div>

          {/* Good Approach */}
          <div className="p-6 border-l-4 border-green-500 rounded-lg shadow-md bg-green-50">
            <h3 className="mb-4 text-2xl font-bold text-green-600">
              ✅ Asking Your WHOLE TEAM
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-green-500">•</span>
                <span>Multiple perspectives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-green-500">•</span>
                <span>Errors cancel out</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-green-500">•</span>
                <span>More confident answer</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-green-600">
              Result: Better Decision ✓
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="p-6 mt-8 text-center border border-blue-300 rounded-lg bg-blue-50">
          <p className="text-lg text-gray-800">
            <span className="font-bold text-blue-600">
              That&apos;s exactly what Bagging does with predictions!
            </span>
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>🎯 Single Model = One person&apos;s opinion</p>
            <p>🎯 Bagging = Team of experts voting together</p>
            <p>🎯 Final Prediction = Majority decision</p>
          </div>
        </div>
      </div>
    </section>
  );
}
