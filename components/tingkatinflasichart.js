// File: components/TingkatInflasiChart.js
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataTahunan = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Tingkat Inflasi",
      data: [3.2, 2.9, 3.0, 3.8, 4.1, 3.5],
      borderColor: "#B91C1C",
      backgroundColor: "#B91C1C",
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: "#B91C1C",
    },
    {
      label: "Pertumbuhan Ekonomi",
      data: [5.0, 5.2, 5.4, 5.5, 5.6, 5.8],
      borderColor: "#2563EB",
      backgroundColor: "#2563EB",
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: "#2563EB",
    },
  ],
};

const kuartalData = [
  {
    title: "Q1 (Jan - Mar)",
    value: "2,9%",
    change: "-0,1%",
    color: "blue",
    data: [10, 7, 6, 7, 5, 5, 6, 1, 0],
  },
  {
    title: "Q2 (Apr - Jun)",
    value: "3,1%",
    change: "+0,2%",
    color: "green",
    data: [0, 2, 5, 4, 6, 6, 8, 9, 9],
  },
  {
    title: "Q3 (Jul - Sep)",
    value: "3,5%",
    change: "+0,4%",
    color: "red",
    data: [5, 6, 6, 7, 8, 9, 0, 1, 2],
  },
  {
    title: "Q4 (Okt - Des)",
    value: "2,7%",
    change: "-0,8%",
    color: "orange",
    data: [5, 4, 3, 2, 1, 0, 9, 8, 7],
  },
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

function KuartalCard({ title, value, change, color, data }) {
  const colors = {
    blue: "#2563EB",
    green: "#16A34A",
    red: "#DC2626",
    orange: "#EA580C",
  };
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p
        className={`text-xs ${
          change.includes("-") ? "text-red-600" : "text-green-600"
        }`}
      >
        {change}
      </p>
      <Line
        data={{
          labels: data.map((_, i) => i + 1),
          datasets: [
            {
              data,
              borderColor: colors[color],
              backgroundColor: colors[color],
              pointRadius: 0,
              tension: 0.4,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default function TingkatInflasiChart() {
  const [mode, setMode] = useState("tahunan");

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex-1">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="#005fff" d="M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z" />
          </svg>
          <h2 className="text-lg font-semibold">Tingkat Inflasi</h2>
        </div>
        <select
          className="border rounded px-2 py-1 border-blue-600 text-blue-600"
          defaultValue="2025"
        >
          <option>2025</option>
        </select>
      </div>
      <div className="flex justify-between">
        <p className="mb-2 text-sm">
          Isi Data Tingkat Inflasi per{" "}
          {mode === "tahunan" ? "Tahun" : "Kuartal 2024"} :
        </p>

        <div className="flex gap-4 text-sm mb-4">
          <button
            onClick={() => setMode("tahunan")}
            className={`${
              mode === "tahunan"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            Saat ini
          </button>
          <button
            onClick={() => setMode("kuartal")}
            className={`${
              mode === "kuartal"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            Kuartal
          </button>
        </div>
      </div>

      {mode === "tahunan" ? (
        <Line options={options} data={dataTahunan} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kuartalData.map((d, i) => (
            <KuartalCard key={i} {...d} />
          ))}
        </div>
      )}
    </div>
  );
}
