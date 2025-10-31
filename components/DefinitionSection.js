export default function DefinitionSection() {
  return (
    <section className="flex flex-col items-center px-4 py-12 text-center bg-blue-100">
      <h1 className="mb-4 text-5xl font-bold text-blue-800 drop-shadow-md">
        Bagging in Machine Learning
      </h1>
      <p className="max-w-2xl mb-6 text-xl text-gray-700">
        Bagging (Bootstrap Aggregating) is a simple and powerful way to improve
        the accuracy and stability of machine learning models. It works by
        training several models on different random samples of your data, then
        averaging or voting among their predictions for a better final result.
      </p>
    </section>
  );
}
