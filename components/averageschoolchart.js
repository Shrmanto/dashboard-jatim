"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AverageSchoolChartCard = () => {
  const labels = [
    "Kota Surabaya",
    "Kota Malang",
    "Kab. Sidoarjo",
    "Kab. Gresik",
    "Kab. Kediri",
    "Kab. Sumenep",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Tahun",
        data: [11.5, 11.1, 9.3, 7.8, 6.9, 6.4],
        backgroundColor: [
          "#2563eb",
          "#2563eb",
          "#2563eb", // Biru (di atas rata-rata)
          "#dc2626",
          "#dc2626",
          "#dc2626", // Merah (di bawah rata-rata)
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        min: 6,
        max: 12,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-md flex-1 max-h-[470px]">
      <div className="flex justify-between items-center pb-4 border-b-2 border-main-blue/10">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
              />
            </svg>
          </span>
          <h2 className="text-md font-semibold text-gray-500">
            Rata - Rata Lama Sekolah
          </h2>
        </div>
        <select className="border-2 border-blue-600 text-blue-600 rounded px-2 py-1 text-sm ">
          <option className="text-blue-600" value="2024">
            2024
          </option>
        </select>
      </div>
      <p className="text-md font-bold text-slate-700 mb-4 mt-4">
        Rata-Rata Lama Sekolah per Kabupaten/Kota di Jawa Timur
      </p>
      <div className="px-6">
        <Bar
          data={data}
          options={options}
          className="max-w-[717px] max-h-[288px]"
        />
        <div className="flex justify-end gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            Diatas Rata - Rata
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600"></span>
            Dibawah Rata - Rata
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageSchoolChartCard;
