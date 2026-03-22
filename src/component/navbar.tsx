import { useState } from 'react';
import { Menu, X, Bell, User as UserIcon, Home, CalendarDays, Trophy } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const menu_list = [
        { name: 'หน้าแรก', href: '#', icon: Home },
        { name: 'อีเวนต์', href: '#', icon: CalendarDays },
        { name: 'จัดอันดับ', href: '#', icon: Trophy }
    ];

    return (
        <nav className="relative bg-gray-800/50 backdrop-blur-md after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 rounded-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button*/}
                    <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        <div className="flex shrink-0 items-center">
                            <div className="text-xl font-bold text-indigo-500 cursor-pointer ">BA2L-SHOP</div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {menu_list.map((row) => {
                                    const Icon = row.icon;
                                    return (
                                        <a
                                            key={row.name}
                                            href={row.href}
                                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 cursor-pointer"
                                        >
                                            <Icon className="size-5 text-gray-400" />
                                            <span className="font-medium">{row.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Notification Bell */}
                        <button className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none">
                            <Bell className="size-6" />
                        </button>

                        {/* Profile dropdown */}
                        <div className="relative ml-3">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <img
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="User profile"
                                />
                            </button>

                            {/* Dropdown Menu (Toggle with State) */}
                            {isProfileOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none border border-white/10">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-white/5">Sign out</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Toggle with State) */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-gray-800`}>
                <div className="space-y-1 px-2 pt-2 pb-3">

                    {menu_list.map((row) => {
                        const Icon = row.icon;
                        return (
                            <a
                                key={row.name}
                                href={row.href}
                                className="flex rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5"
                            >
                                <Icon className="size-5 text-gray-400" />
                                <span className="font-medium ml-1">{row.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;