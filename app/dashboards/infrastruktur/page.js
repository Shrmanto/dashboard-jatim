import ProyekChart from "../../../components/progresproyekchart";
import KetersediaanChart from "../../../components/KetersediaanChart";
import KondisiJalanChart from "../../../components/KondisiJalanChart";

const Infrastruktur = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <p className="text-gray-600">Manage user accounts and permissions.</p>
      <div className="flex flex-col gap-2">
        <ProyekChart/>
        <KetersediaanChart/>
        <KondisiJalanChart/>
      </div>
    </div>
  );
}

export default Infrastruktur;