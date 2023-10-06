import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const BreakingNews = () => {
    return (
        <div className='flex gap-5'>
            <button className='btn btn-secondary'> Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/' className='mr-12'>.......</Link>
                <Link to='/' className='mr-12'>.......</Link>
                <Link to='/' className='mr-12'>.......</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;