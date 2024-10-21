
import React from 'react';

import PropTypes from 'prop-types'; 

const Blog = ({ blog }) => {

    let {cover,title,author,author_img,posted_date,reading_time,hashtag}= blog

    console.log(blog)
    return (
        <div>

            <img className='w-96 rounded-lg' src={cover} alt={`Cover Photo ${title}`}></img>

            <div className='flex justify-between'>
                <div className='flex gap-5'>

                    <div>

                        <img className='w-12 rounded-full' src={author_img}></img>

                    </div>

                    <div>

                    <h3 className='font-extrabold'>{author}</h3>
                    <p className='text-[#11111199]'>{posted_date}</p>

                    </div>

                </div>

                <div>
                    <p className='text-[#11111199]'>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>

            <div className='flex gap-3'>
                <p>{hashtag[0]}</p>
                 <p> {hashtag[1]}</p>
            </div>

           
            
        </div>
    );
};

Blog.propTypes={

    blog:PropTypes.object.isRequired
}

export default Blog;