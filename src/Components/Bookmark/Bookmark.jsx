import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark,handlePass}) => {

    let {title}= bookmark
    return (
        <div>


            <section  className='bg-green-200 m-4 p-4 rounded-xl'>


            <h2 className='text-2xl'>{title}</h2>

            <button onClick={()=>handlePass(bookmark.id)} className='btn'>Delete and Pass</button>


            </section>
            
            
        </div>

       

        

    );
};

Bookmark.propTypes = {

bookmark:PropTypes.object
    
};

export default Bookmark;