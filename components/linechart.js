"use client";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

const data = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Tingkat Inflasi',
      data: [3.2, 2.9, 3.0, 3.8, 4.1, 3.5],
      borderColor: '#B91C1C',
      backgroundColor: '#B91C1C',
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#B91C1C',
    },
    {
      label: 'Pertumbuhan Ekonomi',
      data: [5.0, 5.2, 5.4, 5.5, 5.6, 5.8],
      borderColor: '#2563EB',
      backgroundColor: '#2563EB',
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#2563EB',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
        display: true,
        position: 'top',
        labels: {
            usePointStyle: true,
            pointStyle: 'circle',
        },
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

const LineChart = ({ chartData }) => {
    const [activeTab, setActiveTab] = useState('current');

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

        <Line data={data} options={options} className='max-h-[288px] max-w-[717px]'/>
      </div>
    );
}

export default LineChart;