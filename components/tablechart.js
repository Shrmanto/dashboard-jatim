'use client';

import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TableChart = () => {
  const [jenisProyek, setJenisProyek] = useState('Jenis Proyek');
  const [lokasi, setLokasi] = useState('Lokasi');
  const [openJenis, setOpenJenis] = useState(false);
  const [openLokasi, setOpenLokasi] = useState(false);

  const jenisList = ['Drainase Jalan', 'Jalan Nasional', 'Jalan Provinsi', 'Jembatan'];
  const lokasiList = ['Surabaya', 'Sidoarjo', 'Malang', 'Banyuwangi', 'Gresik', 'Jember', 'Kediri'];

  const data = {
    labels: [
      '45% (Perbaikan Drainase Jalan)',
      '90% (Jalan Nasional)',
      '75% (Jalan Provinsi)',
      '60% (Jembatan)',
    ],
    datasets: [
      {
        data: [45, 90, 75, 60],
        backgroundColor: ['#C084FC', '#3B82F6', '#F97316', '#22C55E'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 15,
          color: '#374151',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}`;
          },
        },
      },
    },
  };

  const averageProgress = 67.5;

  const proyekList = [
    { Bulan: 'Januari', BOR: '87', Status: 'Cukup Tinggi'},
    { Bulan: 'Februari', BOR: '60', Status: 'Cukup Tersedia'},
    { Bulan: 'Maret', BOR: '50', Status: 'Cukup Tersedia'},
    { Bulan: 'April', BOR: '90', Status: 'Cukup Tinggi'},

  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-h-[470px] mx-auto mt-6 ">
      <div className="flex items-center justify-between pb-4 border-b-2 border-main-blue/10">
            <div className="flex items-center gap-2">
            <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
                </svg>
            </span>
            <h2 className="text-lg font-semibold text-gray-500">Kesehatan</h2>
            </div>
            <button className="bg-main-blue/10 text-main-blue rounded-md py-2 px-4 text-sm font-bold">Detail</button>
        </div>
      <h2 className='font-medium mt-4 mb-4'>Ketersediaan Tempat Tidur (BOR)</h2>

        {/* Tabel Proyek */}
        <div className="max-h-[150px] overflow-y-auto">
          <table className="table-auto w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">Bulan</th>
                <th className="px-4 py-2">BOR</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {proyekList.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{item.Bulan}</td>
                  <td className="px-4 py-2">{item.BOR}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.Status === 'Cukup Tinggi'
                        ? 'bg-orange-300 text-orange-600'
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      {item.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default TableChart;