"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const KategoriPendapatanChart = () => {
  const data = {
    labels: [
      "Pajak Kendaraan Bermotor",
      "Pajak Bumi & Bangunan",
      "Pajak Hotel & Restoran",
      "Pajak Hiburan",
    ],
    datasets: [
      {
        data: [1100, 950, 750, 670],
        backgroundColor: (ctx) => {
          const index = ctx.dataIndex;
          return index === 0 ? "#22c55e" : "#3b82f6"; // Tahun 2022 = hijau
        },
        borderRadius: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#6b7280",
          callback: (val) => Intl.NumberFormat("id-ID").format(val),
        },
        grid: {
          display: true,
          color: "#e5e7eb",
        },
      },
      y: {
        ticks: {
          color: "#6b7280",
          font: { weight: "bold" },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `Rp ${Intl.NumberFormat("id-ID").format(ctx.raw)}`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#005fff"
                d="M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z"
              />
            </svg>
            <h2 className="text-lg font-semibold">
              Kategori Pendapatan Tertinggi Dari Pajak Daerah
            </h2>
          </div>
          <p className="text-lg font-bold text-gray-700 mt-5">
            Total 2024 (Miliar Rupiah)
          </p>
        </div>
        <select
          className="border rounded px-2 py-1 border-blue-600 text-blue-600"
          defaultValue="2025"
        >
          <option>Tahun</option>
        </select>
      </div>

      <div className="flex gap-4 items-end">
        {/* <div className="min-w-[120px] ">
          <p className="text-sm text-gray-500 font-semibold">Persentase</p>
          <p className="text-sm text-gray-500 font-medium mt-1">Sumbangsih</p>
          <p className="text-3xl font-bold text-black">46,85%</p>
        </div> */}

        <div className="flex-1 min-w-0 h-full relative aspect-[4/2]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default KategoriPendapatanChart;
