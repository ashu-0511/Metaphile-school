import React, { useState } from 'react';
import StudentInfo from './StudentInfo';
import ParentInfo from './ParentInfo';

const StudentParentTabs = () => {
    const [activeTab, setActiveTab] = useState('student');

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
            <div className="flex border-b">
                <button
                    onClick={() => setActiveTab('student')}
                    className={`flex-1 p-4 text-center ${activeTab === 'student' ? 'border-b-2 border-blue-500' : 'border-b'}`}
                >
                    Student
                </button>
                <button
                    onClick={() => setActiveTab('parent')}
                    className={`flex-1 p-4 text-center ${activeTab === 'parent' ? 'border-b-2 border-blue-500' : 'border-b'}`}
                >
                    Parent
                </button>
            </div>
            <div className="p-4">
                {activeTab === 'student' && <StudentInfo />}
                {activeTab === 'parent' && <ParentInfo />}
            </div>
        </div>
    );
};

export default StudentParentTabs;
