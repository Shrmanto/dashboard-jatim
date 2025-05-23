"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Kreatif & Digital',
    'Manufaktur',
    'UMKM',
  ],
  datasets: [
    {
      label: 'Progress',
      data: [75, 90, 60,],
      backgroundColor: ['#C084FC','#2563EB','#22C55E'],
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

const DoughnutchartV2 = () => {
    const [activeTab, setActiveTab] = useState('current');
  
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
                <h2 className="text-lg font-semibold text-gray-500">Industri (Manufaktur, Kreatif & Digital, UMKM)</h2>
            </div>
            <button className="bg-main-blue/10 text-main-blue rounded-md py-2 px-4 text-sm font-bold">Detail</button>
        </div>

        <div className="flex gap-4 mt-4">
            <div>
                <Doughnut data={data} options={options} className='max-h-[188px] max-w-[288px]' />
                <ul className="space-y-2 text-sm text-gray-600 mt-5">
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
            </div>
            <div>
                <div className="mb-2 flex gap-4 text-sm mt-4">
                    <button
                      onClick={() => setActiveTab('current')}
                      className={`${activeTab === 'current' ? 'border-b-2 pb-1  border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
                    >
                      Semua
                    </button>
                    <button
                      onClick={() => setActiveTab('second')}
                      className={`pb-1 ${activeTab === 'second' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
                    >
                      Manufaktur
                    </button>
                    <button
                      onClick={() => setActiveTab('third')}
                      className={`pb-1 ${activeTab === 'third' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
                    >
                      Kreatif & Digital
                    </button>
                    <button
                      onClick={() => setActiveTab('fourth')}
                      className={`pb-1 ${activeTab === 'fourth' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
                    >
                      UMKM
                    </button>

                </div>
                <div className='flex gap-2 w-full'>
                    <div className='flex flex-col gap-2'>
                        <div className="bg-[#F3F8FF] w-full p-3 rounded-[6px]">
                            <p>Jumlah Industri</p>
                            <h1 className='text-[#005FFF] font-bold'>77.4</h1>
                        </div>
                        <div className="bg-[#F3F8FF] w-full p-3 rounded-[6px]">
                            <p>PDRB</p>
                            <h1 className='text-[#005FFF] font-bold'>76,5%</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className="bg-[#F3F8FF] w-full p-3 rounded-[6px]">
                            <p>Serapan Tenaga Kerja</p>
                            <h1 className='text-[#005FFF] font-bold'>12.293.876</h1>
                        </div>
                        <div className="bg-[#F3F8FF] w-full p-3 rounded-[6px]">
                            <p>Nilai Investasi</p>
                            <h1 className='text-[#005FFF] font-bold'>Rp 45,5 T</h1>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
      </div>
    );
}

export default DoughnutchartV2;