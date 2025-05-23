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

const ProyekChart = () => {
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
    { nama: 'Perbaikan Drainase Utama', jenis: 'Drainase Jalan', lokasi: 'Surabaya', selesai: 'Des 2025', progres: 45, status: 'Dalam Proses' },
    { nama: 'Pelebaran Jalan Nasional Porong', jenis: 'Jalan Nasional', lokasi: 'Sidoarjo', selesai: 'Sep 2025', progres: 90, status: 'Hampir Selesai' },
    { nama: 'Revitalisasi Jalan Provinsi A', jenis: 'Jalan Provinsi', lokasi: 'Malang', selesai: 'Agu 2025', progres: 75, status: 'Dalam Proses' },
    { nama: 'Pembangunan Jembatan Kalibaru', jenis: 'Jembatan', lokasi: 'Banyuwangi', selesai: 'Okt 2025', progres: 60, status: 'Dalam Proses' },
    { nama: 'Perbaikan Drainase Kawasan Industri', jenis: 'Drainase Jalan', lokasi: 'Gresik', selesai: 'Nov 2025', progres: 40, status: 'Dalam Proses' },
    { nama: 'Pelebaran Jalan Provinsi Selatan', jenis: 'Jalan Provinsi', lokasi: 'Jember', selesai: 'Des 2025', progres: 65, status: 'Dalam Proses' },
    { nama: 'Pembangunan Jembatan Layang C', jenis: 'Jembatan', lokasi: 'Kediri', selesai: 'Sep 2025', progres: 70, status: 'Dalam Proses' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-7xl mx-auto mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Progres Proyek Strategis Daerah</h2>
      <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
        {/* Kiri: Chart dan Dropdown */}
        <div className="w-full lg:w-2/5 flex flex-col h-full justify-between">
          {/* Dropdown */}
          <div className="flex gap-4 mb-4 ml-54">
            {/* Jenis Proyek */}
            <div className="relative">
              <button
                onClick={() => {
                  setOpenJenis(!openJenis);
                  setOpenLokasi(false);
                }}
                className="text-blue-600 border border-blue-600 px-3 py-1.5 rounded-md flex items-center justify-between min-w-[120px] text-sm"
              >
                <span>{jenisProyek}</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {openJenis && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 shadow-md max-h-28 w-36 overflow-auto text-sm">
                  {jenisList.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 hover:bg-blue-50 cursor-pointer text-gray-700"
                      onClick={() => {
                        setJenisProyek(item);
                        setOpenJenis(false);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Lokasi */}
            <div className="relative">
              <button
                onClick={() => {
                  setOpenLokasi(!openLokasi);
                  setOpenJenis(false);
                }}
                className="text-blue-600 border border-blue-600 px-3 py-1.5 rounded-md flex items-center justify-between min-w-[120px] text-sm"
              >
                <span>{lokasi}</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {openLokasi && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 shadow-md max-h-28 w-36 overflow-auto text-sm">
                  {lokasiList.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 hover:bg-blue-50 cursor-pointer text-gray-700"
                      onClick={() => {
                        setLokasi(item);
                        setOpenLokasi(false);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Chart + Text */}
          <div className="flex flex-1 items-center gap-6">
            <div className="relative w-60 h-[360px] flex items-center justify-center">
              <Doughnut data={data} options={options} />
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">Persentase rata-rata progres proyek</p>
              <p className="text-4xl font-bold text-black">{averageProgress}%</p>
            </div>
          </div>
        </div>

        {/* Tabel Proyek */}
        <div className="w-full lg:w-3/5 overflow-x-auto">
          <table className="table-auto w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">Nama Proyek</th>
                <th className="px-4 py-2">Jenis Proyek</th>
                <th className="px-4 py-2">Lokasi</th>
                <th className="px-4 py-2">Target Selesai</th>
                <th className="px-4 py-2">Progres (%)</th>
                <th className="px-4 py-2 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {proyekList.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{item.nama}</td>
                  <td className="px-4 py-2">{item.jenis}</td>
                  <td className="px-4 py-2">{item.lokasi}</td>
                  <td className="px-4 py-2">{item.selesai}</td>
                  <td className="px-4 py-2">{item.progres}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.status === 'Hampir Selesai'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProyekChart;
