import React from 'react';

import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className='flex justify-between items-center m-2 p-3 border-b-2'>
            <h1 className='text-6xl font-bold mt-5'>Knowledge Cafe</h1>
            <img src={profile}></img>
            
        </div>
    );
};

export default Header;