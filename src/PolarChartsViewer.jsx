import React from 'react'
import { useState } from "react";

const charts = {
  "Polar Scatter": "/polar_scatter_plot.html",
  "Polar Line": "/polar_line_plot.html",
  "Polar Bar": "/polar_bar_plot.html",
};



export const PolarChartsViewer = () => {
  const [selectedChart, setSelectedChart] = useState("/polar_scatter_plot.html");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">
        🌍 Climate Polar Visualizations
      </h1>

      <div className="flex flex-col items-center space-y-4 mb-6">
        <select
          className="px-4 py-2 border rounded-lg shadow bg-white"
          onChange={(e) => setSelectedChart(e.target.value)}
          value={selectedChart}
        >
          {Object.entries(charts).map(([label, path]) => (
            <option key={path} value={path}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <iframe
          title="Polar Chart"
          src={selectedChart}
          width="900"
          height="600"
          className="rounded-xl shadow-xl border"
        />
      </div>
    </div>
  );
}
