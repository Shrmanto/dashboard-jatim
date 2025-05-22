"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Perbaikan Drainase Jalan',
    'Jalan Nasional',
    'Jalan Provinsi',
    'Jembatan',
  ],
  datasets: [
    {
      label: 'Progress',
      data: [45, 90, 75, 60],
      backgroundColor: ['#C084FC', '#2563EB', '#FB923C', '#22C55E'],
      borderWidth: 2,
      cutout: '60%',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const DoughnutChart = () => {
    const average = ((45 + 90 + 75 + 60) / 4).toFixed(1);
    return (
      <div className="bg-white p-5 rounded-xl shadow-md flex-1 max-h-[470px]">
        
        <div className="flex items-center justify-between pb-4 border-b-2 border-main-blue/10">
            <div className="flex items-center gap-2">
                <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
                </svg>
                </span>
                <h2 className="text-lg font-semibold text-gray-500">Infrastruktur</h2>
            </div>
            <button className="bg-main-blue/10 text-main-blue rounded-md py-2 px-4 text-sm font-bold">Detail</button>
        </div>

        <div className="flex gap-4 mt-4">
            <Doughnut data={data} options={options} className='max-h-[288px] max-w-[288px]' />

            <div className="">
                <h3 className="font-bold mb-6 text-2xl text-slate-900">Progres Proyek Strategis Daerah</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C084FC' }}></span>
                        Perbaikan Drainase Jalan
                    </span>
                    <span>45%</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }}></span>
                        Jalan Nasional
                    </span>
                    <span>90%</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FB923C' }}></span>
                        Jalan Provinsi
                    </span>
                    <span>75%</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22C55E' }}></span>
                        Jembatan
                    </span>
                    <span>60%</span>
                    </li>
                </ul>

                <div className="mt-6 font-semibold flex justify-between items-center">
                    <div className='text-sm'>Rata - rata progres</div>
                    <div className="text-2xl mt-1">{average}%</div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default DoughnutChart;