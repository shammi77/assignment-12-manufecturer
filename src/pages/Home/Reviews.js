import React from 'react';
import Review from '../Dashboard/Review';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-6xl text-center text-bold text-warning m-10'>Review</h1>
            <div className='flex items-center justify-center m-10'>
            <Review></Review>
            </div>
        </div>
    );
};

export default Reviews;