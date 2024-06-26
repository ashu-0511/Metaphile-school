import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center bg-background">
            <h3 className="text-xl font-bold mb-4 w-full ml-4">Fee Status</h3>
            <div className="flex justify-around w-full bg-payable p-4 rounded-xl mb-6">
                <div className="text-center bg-white p-2 rounded-md">
                    <div className='px-4'>
                        <div className="text-4xl">&#128176;</div>
                        <div className="text-2xl font-bold">₹ 10000</div>
                        <div className="text-lg text-gray-600">Total Payable</div>
                    </div>
                </div>
                <div className="text-center bg-white p-2 rounded-md">
                    <div className='px-4'>
                        <div className="text-4xl">&#128179;</div>
                        <div className="text-2xl font-bold">₹ 5000</div>
                        <div className="text-lg text-gray-600">Total Paid</div>
                    </div>
                </div>
                <div className="text-center bg-white p-2 rounded-md">
                    <div className='px-4'>
                        <div className="text-4xl">&#9203;</div>
                        <div className="text-2xl font-bold">₹ 5000</div>
                        <div className="text-lg text-gray-600">Pending</div>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-bold mb-4 w-full ml-4">Subject's Progress</h3>
            <div className="flex w-full justify-between gap-4 ">
                <div className="w-full p-4 rounded-lg w-4/6 bg-payable gap-4 flex flex-col payable">
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Sanskrit</span>
                            <span className="w-24 text-center">Chapter 5.9</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Biology</span>
                            <span className="w-24 text-center">Chapter 8</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Physics</span>
                            <span className="w-24 text-center">Chapter 3</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressRed" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">English</span>
                            <span className="w-24 text-center">Chapter 8</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Hindi</span>
                            <span className="w-24 text-center">Chapter 8</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Arts</span>
                            <span className="w-24 text-center">Chapter 8</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Mathamatics</span>
                            <span className="w-24 text-center">Chapter 8</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '67%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <div className='bg-white flex justify-between items-center p-4 rounded-lg'>
                            <span className="w-24">Economics</span>
                            <span className="w-24 text-center">Chapter 8</span>
                            <div className="flex-grow h-4 bg-progressBg rounded-lg ml-4 overflow-hidden">
                                <div className="h-full bg-progressGreen" style={{ width: '44%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" bg-payable p-2 rounded-xl flex flex-col items-center w-4/12">
                    <h3 className="text-xl font-bold mb-4">Attendance Status</h3>
                    <div className="flex flex-col items-center">
                        <div className="relative w-32 h-32 rounded-full" style={{ background: 'conic-gradient(green 0.9turn, yellow 0.08turn, red 0.02turn)' }}></div>
                    </div>
                    <div className="p-5 flex justify-evenly gap-4 ">
                        <div className="flex flex-col mb-2 text-xl text-present">Present <p>45</p> </div>
                        <div className="flex flex-col mb-2 text-xl text-leave">Leave <p>4</p></div>
                        <div className="flex flex-col text-xl text-absent">Absent  <p>2</p></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
