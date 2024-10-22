/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import Pass from '../Passes/Pass';

const Bookmarks = ({bookmark,readingTime,handlePass,pass}) => {
    return (
        <div>
            <div className='bg-gray-300 rounded-lg p-2'>

            <h2 className='text-5xl font-bold text-center'>Reading Time:{readingTime}</h2>

            <h2 className='text-3xl font-bold text-center'>BookMarks Blogs:{bookmark.length}</h2>
            {
               bookmark.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark} handlePass={handlePass}></Bookmark>)
            }




            
        </div>

        
        <div className=' bg-gray-200 rounded-lg p-2 mt-3'>

                        {
                    pass.map((item, index) => (
                        <div className='flex gap-4 items-center' key={index}>
                            <h1 className='text-2xl'>{index+1}.</h1>
                            <Pass pass={item} />
                        </div>
                      ))
                 }
       
        </div>
            
        </div>
    );
};

Bookmarks.propTypes = {

    bookmark:PropTypes.array
    
};

export default Bookmarks;