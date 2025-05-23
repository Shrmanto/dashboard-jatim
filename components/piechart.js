"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
      "SD", "SMP", "SMA/SMK", "D1-D3", "D4/S1", "S2", "S3"
    ],
    datasets: [
      {
        data: [3.2, 2.5, 1.8, 1.8, 1.8, 1.8, 1.8],
        backgroundColor: [
          "#EF4444", // SD - Merah
          "#3B82F6", // SMP - Biru
          "#10B981", // SMA/SMK - Hijau
          "#A855F7", // D1-D3 - Ungu
          "#6366F1", // D4/S1 - Indigo
          "#FACC15", // S2 - Kuning
          "#9CA3AF", // S3 - Abu
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  const legends = [
    { label: "SD", color: "#EF4444", value: "3.2%" },
    { label: "SMP", color: "#3B82F6", value: "2.5%" },
    { label: "SMA/SMK", color: "#10B981", value: "1.8%" },
    { label: "D1-D3", color: "#A855F7", value: "1.8%" },
    { label: "D4/S1", color: "#6366F1", value: "1.8%" },
    { label: "S2", color: "#FACC15", value: "1.8%" },
    { label: "S3", color: "#9CA3AF", value: "1.8%" },
  ];

  const PieChart = () => {
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

        <h3 className="font-bold mb-6 text-xl text-slate-700 mt-4">Jenjang pendidikan</h3>

        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <Pie data={data} options={options} />
          </div>
          <div className="w-1/2 text-sm">
            {legends.map((item) => (
              <div key={item.label} className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 inline-block rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.label}
                </div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

    </div>
    );
  }

  export default PieChart;