import React from 'react';
import logo from '../assets/logo.png'
import { BsPersonRaisedHand, BsTable, BsEnvelopePaper, BsFileEarmarkMedicalFill, BsFileSpreadsheetFill } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { MdAddHomeWork, MdClass, MdAssignmentAdd, MdContentCopy, MdBroadcastOnHome, MdOutlineVideogameAsset, MdOutlineNotificationsNone, MdQuiz, MdEvent } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";

const Sidebar = ({ isOpen, }) => {
    return (
        <div className={`fixed h-full bg-white sidebar-content p-4 rounded-lg top-0 left-0 w-64 h-auto shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-between p-4 ">
                <img src={logo} alt="logo" className=' h-20 w-13 border-4 border-logo mr-2' />
                <span className="text-lg font-medium text-sidebar-text">Metaphile Public School</span>
            </div>
            <div className='list bg-sidebar rounded-lg'>
                <p className=' text-3xl p-4'>Dashboard</p>
                <div className="">
                    <ul className="flex flex-col p-4 text-sidebar-text">
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <BsPersonRaisedHand className=' w-5 h-5 mr-1' />
                            <span>Attandance</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <FaHandHoldingUsd className=' w-5 h-5 mr-1' />
                            <span>Fee Due</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdAddHomeWork className=' w-5 h-5 mr-1' />
                            <span>Home Work</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdClass className=' w-5 h-5 mr-1' />
                            <span>Class Work</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdAssignmentAdd className=' w-5 h-5 mr-1' />
                            <span>Assignment</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <BsTable className=' w-5 h-5 mr-1' />
                            <span>Time Table</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdContentCopy className=' w-5 h-5 mr-1' />
                            <span>Result</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <GrGallery className=' w-5 h-5 mr-1' />
                            <span>School Gallery</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <BsEnvelopePaper className=' w-5 h-5 mr-1' />
                            <span>Leave Application</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <FaPersonCircleQuestion className=' w-5 h-5 mr-1' />
                            <span>Ask doubt</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <BsFileSpreadsheetFill className=' w-5 h-5 mr-1' />
                            <span>Date Sheet</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdEvent className=' w-5 h-5 mr-1' />
                            <span>Events</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdQuiz className=' w-5 h-5 mr-1' />
                            <span>Play Quiz</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdOutlineNotificationsNone className=' w-5 h-5 mr-1' />
                            <span>Notifications</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <BsFileEarmarkMedicalFill className=' w-5 h-5 mr-1' />
                            <span>Medical Records</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdOutlineVideogameAsset className=' w-5 h-5 mr-1' />
                            <span>Activities</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <MdBroadcastOnHome className=' w-5 h-5 mr-1' />
                            <span>Broadcast Channels</span>
                        </li>
                        <li className="py-2 hover:bg-sidebar-hover flex items-center">
                            <RiLockPasswordLine className=' w-5 h-5 mr-1' />
                            <span>Change Password</span>
                        </li>
                    </ul>
                    <button className='pointer bg-btn m-auto w-auto flex rounded-lg'>
                        <p className='py-2 px-4 text-white'>
                            Log Out
                        </p>
                    </button>
                </div>

            </div>

        </div >

    );
};

export default Sidebar;
