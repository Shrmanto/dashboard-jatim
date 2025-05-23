'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const KetersediaanChart = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Lokasi');

  const optionsList = ['Kabupaten Bandung', 'Kota Bandung', 'Kota Cimahi', 'Kabupaten Garut'];

  const data = {
    labels: ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Makassar'],
    datasets: [
      {
        label: 'Akses Listrik (%)',
        data: [98, 95, 97, 90, 88],
        backgroundColor: '#005FFF',
        borderRadius: 8,
        barThickness: 20,
        barPercentage: 0.2,
        categoryPercentage: 0.4,
      },
      {
        label: 'Akses Air Bersih (%)',
        data: [85, 80, 82, 75, 70],
        backgroundColor: '#C084FC',
        borderRadius: 8,
        barThickness: 20,
        barPercentage: 0.2,
        categoryPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: '#005FFF',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#005FFF',
          stepSize: 10,
        },
        title: {
          display: true,
          text: 'Persentase (%)',
          color: '#6B7280',
        },
      },
      x: {
        ticks: {
          color: '#005FFF',
        },
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex-1 max-h-[470px]">
      <div className="flex items-center justify-between pb-4 border-b-2 border-main-blue/10">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
          </span>
          <h2 className="text-lg font-semibold text-gray-500">Ketersediaan Jaringan Listrik & Air Bersih</h2>
        </div>

        {/* Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md flex items-center justify-between min-w-[150px]"
          >
            <span>{selected}</span>
            <svg
              className="w-4 h-4 ml-2 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          {open && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="text-sm text-gray-700">
                {optionsList.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="h-[288px] mt-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default KetersediaanChart;
