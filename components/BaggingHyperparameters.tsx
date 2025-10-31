import React from "react";

export default function BaggingHyperparameters() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">
        🛠️ Bagging Hyperparameters
      </h2>
      <ul className="space-y-4 text-yellow-900 text-lg">
        <li>
          <strong>n_estimators:</strong> Number of base models (trees) in the
          ensemble.
          <br />
          <span className="ml-4 text-yellow-700 text-base">
            More estimators = higher stability, but more computation.
          </span>
        </li>
        <li>
          <strong>max_samples:</strong> % of data used for each model.
          <br />
          <span className="ml-4 text-yellow-700 text-base">
            Small value = more diverse models; large value = each model sees
            most data.
          </span>
        </li>
        <li>
          <strong>max_features:</strong> % of features given to each model.
          <br />
          <span className="ml-4 text-yellow-700 text-base">
            Useful for reducing feature correlation.
          </span>
        </li>
        <li>
          <strong>bootstrap:</strong> Random sampling with replacement?
          <br />
          <span className="ml-4 text-yellow-700 text-base">
            True = enables bagging effect; False = all use same subsample.
          </span>
        </li>
        <li>
          <strong>base_estimator:</strong> Type of model inside each bag (e.g.,
          tree, logistic regression).
          <br />
          <span className="ml-4 text-yellow-700 text-base">
            Most common and effective: DecisionTree.
          </span>
        </li>
      </ul>
    </div>
  );
}
