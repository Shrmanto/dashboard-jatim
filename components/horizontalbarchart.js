'use client'
"use client";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
    labels: [
      "Rata - Rata Jawa Timur",
      "Kab. Lamongan",
      "Kab. Jember",
      "Kab Pacitan",
      "Kab Pacitan",
    ],
    datasets: [
      {
        data: [22.3, 26.7, 21.9, 24.5, 24.5],
        backgroundColor: [
          "#22C55E",
          "#2563EB",
          "#2563EB",
          "#2563EB",
          "#2563EB",
        ],
        borderRadius: 6,
        barThickness: 20,
        barPercentage: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        ticks: {
          callback: (val) => `${val.toLocaleString()}%`,
        },
        beginAtZero: true,
        max: 50,
      },
      y: {
        ticks: {
          color: "#111827",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
    },
  };

const HorizontalBarChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex-1 max-h-[470px]">
            <div className="flex items-center justify-between pb-4 border-b-2 border-main-blue/10">
                <div className="flex items-center gap-2">
                <span className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
                    </svg>
                </span>
                <h2 className="text-lg font-semibold text-gray-500">Ekonomi</h2>
                </div>
                <button className="bg-main-blue/10 text-main-blue rounded-md py-2 px-4 text-sm font-bold">Detail</button>
            </div>

            <h3 className="text-md font-medium mb-4 mt-4">
                Angka Stunting pada Anak - Anak (%)
            </h3>
            <Bar data={data} options={options} className='max-h-[288px] max-w-[717px]'/>
        </div>
  );
};

export default HorizontalBarChart;