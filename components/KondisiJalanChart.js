'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Baik', 'Sedang', 'Rusak Ringan', 'Rusak Berat'],
  datasets: [
    {
      data: [65, 22, 8, 5],
      backgroundColor: ['#22C55E', '#F59E0B', '#F97316', '#EF4444'],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.label || '';
          const value = context.raw;
          return `${label}: ${value}%`;
        },
      },
    },
  },
  maintainAspectRatio: false,
};

const KondisiJalanChart = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Kabupaten / Kota');

  const optionsList = ['Kabupaten Bandung', 'Kota Bandung', 'Kota Cimahi', 'Kabupaten Garut'];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md max-w-full">
      <div className="flex items-center justify-between pb-4 border-b-2 border-main-blue/10">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
          </span>
          <h2 className="text-xl font-semibold text-gray-700">Kondisi Jalan Provinsi</h2>
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

      <div className="flex mt-6 gap-6">
        {/* Pie Chart */}
        <div className="w-1/2 h-[288px]">
          <Pie data={data} options={options} />
        </div>

        {/* Keterangan */}
        <div className="w-1/2 space-y-4">
          <div className="bg-green-100 p-4 rounded-md text-sm">
            <span className="text-green-600 font-semibold">Kondisi Baik (65%)</span>
            <p className="text-gray-600 mt-1">
              Mayoritas kondisi jalan provinsi berada dalam kondisi Baik (65%), mencerminkan keberhasilan program pemeliharaan rutin.
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded-md text-sm">
            <span className="text-red-600 font-semibold">Kondisi Rusak Berat (5%)</span>
            <p className="text-gray-600 mt-1">
              Sebagian kecil jalan masih dalam kondisi Rusak Berat (5%), menjadi prioritas untuk perbaikan di tahun berjalan.
            </p>
          </div>
        </div>
      </div>

      {/* Static Legend */}
      <div className="mt-6 space-y-2 text-sm text-gray-700">
        <div className="flex">
          <div className="flex items-center space-x-2 w-1/4">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22C55E' }}></span>
            <span>Baik</span>
            <span className="ml-auto font-medium">65%</span>
          </div>
          <div className="flex items-center space-x-2 w-1/4 pl-4">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }}></span>
            <span>Sedang</span>
            <span className="ml-auto font-medium">22%</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center space-x-2 w-1/4">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F97316' }}></span>
            <span>Rusak Ringan</span>
            <span className="ml-auto font-medium">8%</span>
          </div>
          <div className="flex items-center space-x-2 w-1/4 pl-4">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }}></span>
            <span>Rusak Berat</span>
            <span className="ml-auto font-medium">5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KondisiJalanChart;
