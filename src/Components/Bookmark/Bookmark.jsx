import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    let {title}= bookmark
    return (
        <div className='bg-green-200 m-4 p-4 rounded-xl'>

            <h2 className='text-2xl'>{title}</h2>
            
        </div>
    );
};

Bookmark.propTypes = {

bookmark:PropTypes.object
    
};

export default Bookmark;