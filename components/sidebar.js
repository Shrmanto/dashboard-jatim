'use client';
import { sidebarItems } from "../libs/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname(); 
    
    return (
        <div className="sidebar-content bg-white w-full h-full ">
            <div className="w-full h-[70px] bg-main-blue flex justify-center items-center">
                <Image
                    src="/opendata-logo.png"
                    alt="Logo"
                    width={200}
                    height={42}
                    className="object-contain"/>
            </div>
            <div className="flex flex-col gap-3 w-full h-full p-4 h-custom-100-70">
            {sidebarItems.map((item, index) => {
                    const isActive = pathname === `/dashboards/${item.title}`;
                    return (
                        <Link
                            key={index}
                            href={`/dashboards/${item.title}`}
                            className={`flex items-center py-2 px-8 rounded-full ${
                                isActive ? "bg-main-blue/10 text-main-blue" : "hover:bg-gray-100 text-gray-500"
                            }`}
                        >
                            <Image
                                src={isActive ? item.icon_active : item.icon}
                                alt={item.title}
                                width={26}
                                height={26}
                                className="object-contain md:mr-4 lg:md-8"
                            />
                            <h3 className="text-lg font-bold hidden md:block">{item.title}</h3>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
