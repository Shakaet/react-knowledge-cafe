import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark,handleReadingTime}) => {

    let [blogs,setBlogs] = useState([])

    useEffect(()=>{

        fetch("Blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])




    return (
        <div className='md:w-2/3 shadow-lg p-5'>

            {
                blogs.map(item=><Blog key={item.id} blog={item} handleBookmark={handleBookmark}handleReadingTime={handleReadingTime}></Blog>)
            }

          

            
            
        </div>
    );
};

export default Blogs;