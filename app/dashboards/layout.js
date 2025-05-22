import "../globals.css";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="h-screen flex">
          <div className="l w-[8%] md:w-[8%] lg:w-[18%] xl:w-[18%] ">
            <Sidebar />
          </div>
          <div className="r w-full bg-light-blue  flex flex-col overflow-hidden shadow-[inset_8px_0_6px_-6px_rgba(0,0,0,0.3)]">
            <Navbar/>
            <div className="h-full w-full overflow-auto">
              {children}
            </div>
          </div>
        </div>
    );
}