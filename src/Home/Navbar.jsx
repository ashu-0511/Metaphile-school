import logo from '../assets/mlogo.webp';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isSecondSidebarOpen, setSecondSidebarOpen] = useState(false);

    const toggleSecondSidebar = () => {
        setSecondSidebarOpen(!isSecondSidebarOpen);

    };
    return (
        <>
            <nav className=" bg-nav shadow-md md:flex  items-center justify-between rounded-lg m-4 mb-0 sm:flex">
                <div className="flex items-center p-4">
                    <button className="ham bg-ham p-2 rounded-md" onClick={toggleSecondSidebar}>
                        <GiHamburgerMenu />
                    </button>
                    <img src={logo} alt="Logo" className=" w-12 mr-0" />
                    <span className="font-medium sm:text-xl text-sm -ml-3 text-logo">
                        etaphile Public School
                    </span>
                </div>
                <div className="list mr-6">
                    <ul className='flex md:gap-8 font-medium sm:flex justify-evenly '>
                        <Link to='/'><li className=' p-2 hover:bg-blue-600 hover:text-white rounded-lg'>Home</li></Link>
                        <li className=' p-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer'>Fee</li>
                        <li className=' p-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer'>Events</li>
                        <li className=' p-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer'>Examination</li>
                    </ul>
                </div>

            </nav>
            <div className=' fixed z-50 sm:none'>
                <Sidebar isOpen={isSecondSidebarOpen} toggleSidebar={toggleSecondSidebar} />
            </div>
        </>
    );
}

export default Navbar; 
