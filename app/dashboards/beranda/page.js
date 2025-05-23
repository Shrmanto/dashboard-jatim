import LineChart from "../../../components/linechart";
import DoughnutChart from "../../../components/doughnutchart";
import DoughnutchartV2 from "../../../components/doughnutchartV2";
import PovertyChart from "../../../components/povertychart";
import HorizontalBarChart from "../../../components/horizontalbarchart";
import PieChart from "../../../components/piechart";
import OneBar from "../../../components/onebar";
import OnelineChart from "../../../components/onelinechart";

import TingkatInflasiChart from "../../../components/tingkatinflasichart";

import TableChart from "../../../components/tablechart";


const Beranda = () => {
  return (
    <div className="p-8">
      <h1 className="text-navy-blue text-2xl font-bold mb-6">
        Main Dashboards
      </h1>
      <div className="flex gap-6 mb-6">

        <TingkatInflasiChart />

        <LineChart />

        <DoughnutChart />
      </div>
      <div className="flex gap-6 mb-6">
        <PovertyChart />
        <HorizontalBarChart />
        <PieChart />
      </div>
      <div className="flex gap-6">
        <OneBar />
        <OnelineChart />
      </div>
      <div className="flex gap-6">
        <TableChart/>
      </div>
    </div>
  );
};

export default Beranda;
