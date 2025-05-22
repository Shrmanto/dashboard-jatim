"use client";
const total = 1060000;
const domestik = 850000;
const mancanegara = 210000;

const persenDomestik = ((domestik / total) * 100).toFixed(0);
const persenMancanegara = ((mancanegara / total) * 100).toFixed(0);

const OneBar = () => {
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

        {/* Judul */}
        <h3 className="text-lg font-medium text-gray-800 mb-1">
            Jumlah Wisatawan Domestik & Mancanegara
        </h3>
        <p className="text-gray-600 mb-2">Total Kunjungan Tahun 2024</p>

        {/* Total + Growth */}
        <div className="flex items-center justify-between mb-3">
            <span className="text-3xl font-bold text-black">
            {total.toLocaleString("id-ID")}
            </span>
            <div className="flex items-center text-green-600 font-semibold">
            
            3.4%
            </div>
        </div>

        {/* Bar */}
        <div className="w-full h-4 bg-gray-100 rounded-sm overflow-hidden mb-4 flex">
            <div
            className="bg-purple-400 h-full border-r-2 border-white"
            style={{ width: `${persenDomestik}%` }}
            />
            <div
            className="bg-blue-600 h-full"
            style={{ width: `${persenMancanegara}%` }}
            />
        </div>

        {/* Legend */}
        <div className="text-sm space-y-2">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400" />
                Domestik
            </div>
            <div className="text-gray-600">
                {domestik.toLocaleString("id-ID")} <span className="font-semibold">{persenDomestik}%</span>
            </div>
            </div>
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600" />
                Mancanegara
            </div>
            <div className="text-gray-600">
                {mancanegara.toLocaleString("id-ID")} <span className="font-semibold">{persenMancanegara}%</span>
            </div>
            </div>
        </div>
    </div>
  );
}

export default OneBar;