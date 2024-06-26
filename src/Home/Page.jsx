import React from 'react';
import Profile from './Profile';
import DailyNotice from './DailyNotice';
import StudentParentTabs from './StudentParentTabs';

const Page = () => {
    return (
        <div className="flex flex-col md:flex-row w-full p-4 gap-4">
            <div className="first flex flex-col w-full md:w-4/5">
                <Profile />
                <div className="bg-gray-100 mt-4 md:mt-0">
                    <div className="mx-auto">
                        <StudentParentTabs />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 mt-4 md:mt-0">
                <DailyNotice />
            </div>
        </div>
    );
};

export default Page;
