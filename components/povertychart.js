"use client";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const data = {
  labels: ["2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Tingkat Kemiskinan",
      data: [6, 12, 8, 4],
      backgroundColor: ["#C084FC", "#2563EB", "#FB923C", "#22C55E"],
      borderRadius: 8,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      barPercentage: 1.0, 
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 5,
        callback: (value) => `${value}%`,
      },
      beginAtZero: true,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const PovertyChart = () => {
  const [activeTab, setActiveTab] = useState("current");

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


        <div className="mb-2 flex gap-4 text-sm mt-4">
            <button
            onClick={() => setActiveTab('current')}
            className={`border-b-2 pb-1 ${activeTab === 'current' ? 'border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
            >
            Saat ini
            </button>
            <button
            onClick={() => setActiveTab('quarter')}
            className={`pb-1 ${activeTab === 'quarter' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
            >
            Kuartal
            </button>
        </div>

        <p className="text-sm font-medium mb-2">Tingkat Kemiskinan (%) per tahun</p>
        <Bar data={data} options={options} className='max-h-[288px] max-w-[717px]' />
    </div>
  );
}

export default PovertyChart;