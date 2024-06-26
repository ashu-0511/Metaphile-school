import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const skills = [
    { name: 'Reading skill', grade: 'B', color: 'bg-blue-500', width: 'w-4/12' },
    { name: 'Writing skill', grade: 'A', color: 'bg-pink-500', width: 'w-6/12' },
    { name: 'Speaking skill', grade: 'C', color: 'bg-green-500', width: 'w-2/12' },
];

const Profile = () => {
    return (
        <>
            <div className="heading flex justify-between items-center">
                <h2 className="my-4 text-3xl ml-1">Profile</h2>
            </div>
            <div className='cards flex flex-col md:flex-row justify-between gap-3 mb-4'>

                <div className="flex items-center p-4 bg-white shadow-md rounded-lg gap-2 flex-1">
                    <div>
                        <CgProfile className='h-24 w-24 md:h-60 md:w-60' />
                    </div>
                    <div className="content w-full flex flex-col gap-5">
                        <Link to="Profile-page">
                            <h2 className="sm:text-3xl md:text-2xl font-semibold cursor-pointer hover:text-blue-500">Abhishek Kumar</h2>
                        </Link>
                        <p className="text-gray-600">Class - VI 'A'</p>
                        <p className="text-gray-600">Roll No - 08</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg w-full md:w-64">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.grade}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className={`${skill.color} h-4 rounded-full ${skill.width}`}></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span>D</span>
                                <span>C</span>
                                <span>B</span>
                                <span>A</span>
                                <span>A+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Profile;
