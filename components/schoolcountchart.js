"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const SchoolCountChartCard = ({
  title,
  description,
  percentageChange,
  changeLabel,
  dataItems,
  total,
  dataChart,
  chartColors,
  legend,
}) => {
  const data = {
    datasets: [
      {
        data: dataChart,
        backgroundColor: chartColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-md flex-1 max-h-[470px]">
      {/* Header */}
      <div className="flex items-center pb-4 border-b-2 border-main-blue/10">
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
          <h2 className="text-md font-semibold text-gray-500">{title}</h2>
        </div>
      </div>

      <div className="flex">
        {/* Sub Header Left Layout */}
        <div className="mt-10">
          {/* Description */}
          <p className="text-sm text-gray-500 mb-5 mr-2">{description}</p>

          {/* Trend */}
          <div className="text-left w-full mb-3">
            <p className="text-3xl font-bold text-black flex items-center">
              {percentageChange}{" "}
              <span className="text-xs ml-1 text-green-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                {changeLabel}
              </span>
            </p>
          </div>
        </div>
        {/* Chart Right Layout */}
        <div className="mt-4">
          <div className="flex justify-center mb-4">
            <Doughnut
              data={data}
              options={options}
              className="max-w-40 max-h-40"
            />
          </div>
        </div>
      </div>

      {/* Data List */}
      <div className="flex items-start text-sm mb-4">
        {/* Bagian kiri: list data */}
        <div className="space-y-1">
          {dataItems.map((item, idx) => (
            <div key={idx} className="flex justify-between w-40">
              <p className="text-gray-600">{item.label}</p>
              <p className="font-semibold">{item.value.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Bagian kanan: total */}
        <div className="flex flex-col items-start ml-8">
          <p className="text-gray-600">Total</p>
          <p className="text-3xl font-bold">{total.toLocaleString()}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-start gap-4 text-sm">
        {legend.map((item, idx) => (
          <div className="flex items-center gap-1" key={idx}>
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.label} {item.percentage}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolCountChartCard;

// Cara Konsum Props :
  // <SchoolCountChartCard
  //   title="Jumlah Sekolah"
  //   description="Proporsi Sekolah SMA/MA dan Swasta Jawa Timur"
  //   percentageChange="+2%"
  //   changeLabel="Naik"
  //   dataItems={[
  //     { label: "SMA Negeri", value: 390 },
  //     { label: "SMA Swasta", value: 540 },
  //     { label: "Madrasah Aliyah", value: 460 },
  //   ]}
  //   total="1.390"
  //   dataChart={[390, 540, 460]}
  //   chartColors={["#2563eb", "#22c55e", "#f97316"]}
  //   legend={[
  //     { label: "Negeri", color: "#2563eb", percentage: "33%" },
  //     { label: "Swasta", color: "#22c55e", percentage: "39%" },
  //     { label: "MA", color: "#f97316", percentage: "28%" },
  //   ]}
  // />