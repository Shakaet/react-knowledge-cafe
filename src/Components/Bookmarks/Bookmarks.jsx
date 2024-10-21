import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark}) => {
    return (
        <div>
            <div className='bg-gray-300 rounded-lg p-2'>
            <h2 className='text-3xl font-bold text-center'>BookMarks Blogs:{bookmark.length}</h2>
            {
               bookmark.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

            
        </div>
            
        </div>
    );
};

Bookmarks.propTypes = {

    bookmark:PropTypes.array
    
};

export default Bookmarks;