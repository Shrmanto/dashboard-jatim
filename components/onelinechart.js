"use client";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

const data = {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    datasets: [
      {
        label: "AQI",
        data: [68, 74, 98, 76, 92, 91],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.1)", // #3b82f6 w/ opacity
        borderColor: "#3b82f6",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#3b82f6",
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280", font: { size: 12 } },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#3b82f6",
        borderWidth: 1,
      },
    },
  };

const OnelineChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex-1 max-h-[470px]">
        <div className="flex items-center justify-between pb-4 border-b-2 border-main-blue/10">
            <div className="flex items-center gap-2">
            <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
                </svg>
            </span>
            <h2 className="text-lg font-semibold text-gray-500">Lingkungan</h2>
            </div>
            <button className="bg-main-blue/10 text-main-blue rounded-md py-2 px-4 text-sm font-bold">Detail</button>
        </div>


        
        <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium text-gray-800">
            Indeks Kualitas Udara (AQI)
            </h3>
            <button className="text-sm  flex items-center gap-1">
             Tampilkan : <span className="text-blue-600">Harian</span>
            </button>
        </div>
        <div className="flex gap-3">
          {/* Cards */}
          <div className="flex flex-col gap-2 mt-4 text-sm w-max">
              <div className="bg-green-50 rounded-lg p-3">
              <p className="text-green-600 font-semibold">Kemarin</p>
              <p className="text-gray-800">AQI: 87 <span className="text-gray-500">(Sedang)</span></p>
              <p className="text-gray-600">Polutan Dominan: PM2.5</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-blue-600 font-semibold">Hari Ini</p>
              <p className="text-gray-800">AQI: 92 <span className="text-gray-500">(Sedang)</span></p>
              <p className="text-gray-600">Polutan Dominan: PM10</p>
              </div>
          </div>
        <Line data={data} options={options} className="max-w-[320px] max-h-[188px]"/>
        </div>
        {/* Chart */}

        
    </div>
  );
}

export default OnelineChart;