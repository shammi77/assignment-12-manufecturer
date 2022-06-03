
import React from "react";

const Summary = () => {
  return (

    
    <div className="m-10">
        <h1 className=" m-10 text-6xl text-bold text-center text-warning">Business Summary</h1>
     <div className='flex items-center justify-center mx-10 '>
     <div>
     <img
        className="mask mask-squircle"
        src="https://i.ibb.co/yXWmwPq/download.png?w=160&h=160"
        alt=""
      />
      <h2 className='text-bold text-3xl'>100 + <br/> Happy Customer</h2>
     </div>
     <div className='mx-10'>
     <img
        className="mask mask-squircle"
        src="https://i.ibb.co/JqwRQfP/download-2.jpg?w=160&h=160"
        alt=""
      />
      <h2 className='text-bold text-3xl'>100M + <br/> Annual Revenue</h2>
     </div>
     <div className='mx-10'>
     <img
        className="mask mask-squircle"
        src="https://i.ibb.co/Zzm8hDF/download-1.png?w=160&h=160"
        alt=""
      />
      <h2 className='text-bold text-3xl '>10K + <br/>Positive Reviews</h2>
     </div>
     </div>
    </div>
  );
};

export default Summary;
