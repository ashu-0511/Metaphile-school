import React from 'react';
import { FaHandsPraying, FaRegClock } from "react-icons/fa6";

const DailyNotice = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="heading flex justify-between items-center">
                <h2 className="my-4 ml-1">Daily Notice</h2>
                <p className='text-xs mr-2 cursor-pointer'>See All</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
                <div className="rounded-lg p-2">
                    <div className="mb-4">
                        <h3 className="font-bold">Events</h3>
                        <p>Today all the students of class 1st to 8th come to Auditorium at 12:00.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold">Exam Schedule</h3>
                        <p>From 13 April to 20 April the Exam will start.</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Holiday</h3>
                        <p>Tomorrow will be a Holiday on the occasion of Holi.</p>
                    </div>
                </div>
            </div>
            <div className="heading flex justify-between items-center">
                <h2 className="my-3 ml-1">Activities</h2>
                <p className='text-xs mr-2 cursor-pointer'>See All</p>
            </div>

            <div className="activities">
                <div className="mb-4 bg-white rounded-lg p-2">
                    <h3>Rhyme Time: A Night of Poetry</h3>
                    <div className="content flex flex-col md:flex-row gap-5 items-center justify-center">
                        <FaHandsPraying className='w-16 h-16 md:w-40 md:h-40' />
                        <div className="data">
                            <p className='flex items-center gap-2'>
                                <FaRegClock /> 24 Jan 21, 09:00 AM
                            </p>
                            <p>April is also a National Poetry Month. Now there is a great theme for a fun family night.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-2'>
                    <h3>Sleepover Night</h3>
                    <div className="content flex flex-col md:flex-row gap-5 items-center justify-center">
                        <FaHandsPraying className='w-16 h-16 md:w-40 md:h-40' />
                        <div className="data">
                            <p className='flex items-center gap-2'>
                                <FaRegClock /> 16 Jan 21, 06:00 AM
                            </p>
                            <p>A sleepover is a great treat for kids, many school use such an event as the culminating activity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyNotice;
