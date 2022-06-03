import React from 'react';

const LatestPart = () => {
    return (
       
    <div>
<h2 className='text-bold text-center text-6xl text-warning m-10'> Latest Technology Upcoming</h2>
    
       <div className="flex justify-center items-center m-10">
            <div>
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/rvHKGs7/download-4.jpg?w=160&h=160" alt=''/>
            <h3 className='text-bold text-center text-2xl'>Intels Rocket Lake Chip</h3>
        </div>
        <div>
            <img className="mask mask-hexagon-2" src="https://i.ibb.co/MZJFpBL/download-3.jpg?w=160&h=160" alt=''/>
            <h3 className='text-bold text-center text-2xl'>Nvidia and AMD Graphics Cards</h3>
        </div>
        </div>
        </div>
    );
};

export default LatestPart;