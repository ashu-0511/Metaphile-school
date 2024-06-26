import React from 'react';

const StudentInfo = () => {
    return (
        <div className="flex items-center justify-center ">
            <div>
                <h2 className="text-xl font-semibold mb-4">Student Information</h2>
                <div className="mb-2 flex justify-between"><strong>Birth Date:</strong> <p>12/08/2013 (13 years old)</p> </div>
                <div className="mb-2 flex justify-between"><strong>Admission Date:</strong> <p className='text-left'>04/04/2020</p> </div>
                <div className="mb-2 flex justify-between"><strong>Registration Number:</strong> 123498487</div>
                <div className="mb-2 flex justify-between"><strong>Permanent Address:</strong> O, Block Noida Sector 23</div>
                <div className="mb-2 flex justify-between"><strong>Academic Year:</strong> 2020 - 2025</div>
                <div className="mb-2 flex justify-between"><strong>Aadhar Number:</strong> 2345 - 5323 - 4234</div>
                <div className="mb-2 flex justify-between"><strong>Personal Email:</strong> smilingabhi203@gmail.com</div>
                <div className="mb-2 flex justify-between"><strong>Emergency Contact:</strong> (+91) 9847389348 (Mother)</div>
            </div>
        </div>
    );
};
export default StudentInfo;
