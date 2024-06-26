import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";


const Profile = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className='cards flex flex-col md:flex-row justify-between gap-3 mb-4 bg-white shadow-md rounded-lg'>
                <div className="flex items-center p-4  gap-2 flex-1">
                    <div>
                        <CgProfile className='h-32 w-32' />
                    </div>
                    <div className="content flex flex-col gap-2 ">
                        <h2 className="">Abhishek Kumar</h2>
                        <p className="text-gray-600">Class - VI 'A' | Roll No - 08</p>
                        <button className='bg-act p-2 rounded-lg w-24'>2024-25</button>
                    </div>
                </div>
                <div className='relative text-center flex items-center justify-center'>
                    <IoIosNotificationsOutline
                        className='md:h-24 w-24 mr-2 cursor-pointer sm:w-12 h-12'
                        onClick={toggleDropdown}
                    />
                    {dropdownOpen && (
                        <div className="absolute top-24 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-5">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Results </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fee Pending</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Admit Card</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;
