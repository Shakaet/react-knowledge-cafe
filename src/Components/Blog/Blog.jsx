
import React from 'react';

import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";
import './blog.css'



const Blog = ({ blog,handleBookmark,handleReadingTime,handleActiveBtn,activebtn}) => {
  

    let {id,cover,title,author,author_img,posted_date,reading_time,hashtag}= blog

    console.log(blog)
    return (
        <div className='mb-20'>

            <img className='w-full rounded-lg' src={cover} alt={`Cover Photo ${title}`}></img>

            <div className='flex justify-between mb-2'>
                <div className='flex gap-5 mt-5'>

                    <div>

                        <img className='w-12 rounded-full' src={author_img}></img>

                    </div>

                    <div>

                    <h3 className='font-extrabold'>{author}</h3>
                    <p className='text-[#11111199]'>{posted_date}</p>

                    </div>

                </div>

                <div  className='mt-5 flex justify-center items-center'>
                    <p className='text-[#11111199]'>{reading_time} min read</p>
                    <button onClick={()=>handleBookmark(blog)} className='ms-2 text-2xl text-red-600'><CiBookmark /></button>
                  
                    
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>

            <div className='flex gap-3 text-[#11111199] mt-3'>
                <p>{hashtag[0]}</p>
                 <p> {hashtag[1]}</p>
            </div>

            <button onClick={()=>handleReadingTime(blog.reading_time,id)} className='btn btn-warning mt-5'>Marks As read</button>

            <button
        onClick={() => handleActiveBtn("true")}
        className={`${activebtn ? "bg-blue-500 text-white" : "bg-gray-300 text-black"} px-4 py-2 rounded`}
      >
        True
      </button>

      <button
        onClick={() => handleActiveBtn("false")}
        className={`${!activebtn ? "bg-blue-500 text-white" : "bg-gray-300 text-black"} px-4 py-2 rounded`}
      >
        False
      </button>

           
            
        </div>
    );
};

Blog.propTypes={

    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func
}

export default Blog;