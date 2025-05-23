import LineChart from "../../../components/linechart";
import TingkatInflasiChart from "../../../components/tingkatinflasichart";
import PertumbuhanPDRBChart from "../../../components/pertumbuhanPDRB";
import UsahaMicroChart from "../../../components/usahamicrochart";
import UsahaKecilChart from "../../../components/usahakecilchart";
import UsahaMenengahChart from "../../../components/usahamenengahchart";
import UsahaBesarChart from "../../../components/usahabesarchart";

const Ekonomi = () => {
  return (
    <div className="p-8">
      <h1 className="text-navy-blue text-2xl font-bold mb-6">
        Main Dashboards
      </h1>
      <div className="flex gap-6 mb-6">
        {/* <LineChart /> */}
        <TingkatInflasiChart />
        <PertumbuhanPDRBChart />
      </div>
      <div className="flex gap-6 mb-6">
        <UsahaMicroChart />
        <UsahaKecilChart />
      </div>
      <div className="flex gap-6 mb-6">
        <UsahaMenengahChart />
        <UsahaBesarChart />
      </div>
      <div className="flex gap-6"></div>
    </div>
  );
};

export default Ekonomi;
