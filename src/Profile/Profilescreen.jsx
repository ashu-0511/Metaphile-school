import React from 'react';
import Profile from './Profile';
import DailyNotice from './DailyNotice';
// import StudentParentTabs from './StudentParentTabs';
import Dashboard from './Dashboard';

const Profilescreen = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row w-full p-4 gap-4">
                <div className='md:w-4/5'>
                    <div className="first flex flex-col w-full ">
                        <Profile />
                    </div>
                    <div className="mx-auto">
                        <Dashboard />
                    </div>
                </div>
                <div className="w-full md:w-1/4 mt-4 md:mt-0">
                    <DailyNotice />
                </div>
            </div>
        </>
    );
};

export default Profilescreen;
