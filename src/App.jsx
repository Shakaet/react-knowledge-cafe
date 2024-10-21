

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  

    let [bookmark,setBookmark]= useState([])


    let handleBookmark=(blog)=>{

      let newArr= [...bookmark,blog]
      setBookmark(newArr)

    }

  return (
    <div className='mx-auto'>
      
      <Header></Header>
      <div className='md:flex gap-7'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>
     
    </div>
  )
}

export default App
