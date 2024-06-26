import React from 'react';

const ParentInfo = () => {
    return (
        <div className="flex items-center justify-center ">
            <div>
                <h2 className="text-xl font-semibold mb-4">Parents Information</h2>
                <div className="mb-2 flex justify-between"><strong>Father's Name:</strong> Rajesh Kumar</div>
                <div className="mb-2 flex justify-between"><strong>Mother's Name:</strong> Sunita Kumar</div>
                <div className="mb-2 flex justify-between"><strong>Father's Contact:</strong> (+91) 9847389348</div>
                <div className="mb-2 flex justify-between"><strong>Mother's Contact:</strong> (+91) 9847389349</div>
                <div className="mb-2 flex justify-between"><strong>Address:</strong> O, Block Noida Sector 23</div>
                <div className="mb-2 flex justify-between"><strong>Email:</strong> kumarparents@gmail.com</div>
            </div>
        </div>
    );
};

export default ParentInfo;
