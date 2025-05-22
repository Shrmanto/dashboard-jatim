'use client';
import 'boxicons';

const Navbar = () => {
    return (
        <div className="navbar-content w-full fix shadow-[inset_8px_0_6px_-6px_rgba(0,0,0,0.8)]">
            <div className="w-full h-[70px] bg-dark-blue flex items-center justify-between px-8">
                <span className="text-white font-bold text-xl">Excecutive Dashboard</span>
                <box-icon type='solid' name='chevron-down'></box-icon>
            </div>
        </div>
    );
}

export default Navbar;