import React, { useEffect, useState } from 'react';
import OrderModal from './OrderModal';
import Part from './Part';

const AvailableParts = () => {
    const [parts,setParts]=useState([]);
    const [order,setOrder]=useState([null]);

    useEffect(()=>{
        fetch('https://calm-taiga-49700.herokuapp.com/part')
            .then(res=>res.json())
            .then(data => setParts(data));
        
    },[])

    return (
        <div>
            <h1 className="text-warning text-6xl text- text-center m-10">Available parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part=><Part
                    key={part._id}
                    part={part}
                    setOrder={setOrder}
                    ></Part>)
                }
            </div>
            {
              order && <OrderModal order={order}
              setOrder={setOrder}
              ></OrderModal>  
            }
        </div>
    );
};

export default AvailableParts;