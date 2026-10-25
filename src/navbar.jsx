import React, {useState} from "react";

{/*
    // Navbar Component for the web.
*/}

function Navbar({activePage, setActivePage}){
    // for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // list navbar options
    const navigationItems = [
        {id: 'dashboard', name: 'Dashboard'},
        {id: 'notes', name: 'My Notes'},
        {id: 'todo', name: 'To Do'},
        {id: 'movies', name: 'Movies/Series'},
    ];

    const handleItemClick = (pageId) => {
        setActivePage(pageId);
        setIsMobileMenuOpen(false);
    };

    const handleExitClick = () => {
        const shouldExit = window.confirm('Are you sure want to exit the app?');

        if(shouldExit) {
            setActivePage('exit');
            setIsMobileMenuOpen(false);
        }
    };


    return(
        <nav className="bg-white border-b border-gray-200 shadow-xs sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Web Logo &/ title */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">📝</span>
                        <span className="font-semibold text-lg text-gray-800 tracking-tight">
                            My Notes
                        </span>
                    </div>

                    {/**  Desktop navbar options */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigationItems.map((item) => {
                            const isActive = activePage === item.id;

                            return (
                                <button
                                key= {item.id}
                                type="button"
                                onClick={()=> handleItemClick(item.id)}
                                className={`px-3 py-2 rounded-md text-sm font-medium tracking-colors cursor-pointer ${
                                    isActive 
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                                >
                                    {item.name}

                                </button>
                            );
                        })}

                        {/** for exit opt */}
                        <button
                        type="button"
                        onClick={handleExitClick}
                        className={`ml-4 px-3 py-2 rounded-md text-sm font-medium transition-colors
                            cursor-pointer ${
                                activePage === 'exit'
                                ? 'bg-red-50 text-red-700 border border-red-300'
                                : 'text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-200'
                            }`}
                            >
                                Exit
                            </button>
                    </div>

                    {/**Mobile menu opt */}
                    <div className="md:hidden flex items-center ">
                        <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100
                        focus:outline-hidden"
                        aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d = "M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d = "M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/**Dropdown for mobile nav opt */}
            {isMobileMenuOpen && (
                <div className="mid:hidden border-t border-gray-200 px-4 pt-2 pb-3
                space-y-1 bg-white">
                    {navigationItems.map((item) => {
                        const isActive = activePage === item.id;

                        return (
                            <button 
                            key={item.id}
                            type="button"
                            onClick={() => handleItemClick(item.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-base 
                                font-medium transition-colors cursor-pointer ${
                                    isActive
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                                >
                                    {item.name}
                                </button>
                
                        );
                    })}



                    {/**Mobile Exit button */}
                    <button
                    type="button"
                    onClick={handleExitClick}
                    className={`w-full text-left px-3 py-2 rounded-md text-base
                        font-medium transition-colors cursor-pointer mt-2 ${
                            activePage === 'exit'
                            ? 'bg-red-50 text-red-700 border border-red-300'
                            : 'text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-200'
                        }`}
                        >
                            Exit
                        </button>

                </div>
            )}
        </nav>
    );
}


export const NavbarComp = Navbar;

export default Navbar;