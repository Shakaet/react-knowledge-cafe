

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  

    let [bookmark,setBookmark]= useState([])

    let [readingTime,setReadingTime]=useState(0)


    let handleBookmark=(blog)=>{

      let newArr= [...bookmark,blog]
      setBookmark(newArr)

    }

    let handleReadingTime=(Time,id)=>{

    
      setReadingTime(readingTime+Time)

      let remove= bookmark.filter(reading=>reading.id !== id)

      setBookmark(remove)
    }

  return (
    <div className='mx-auto'>
      
      <Header></Header>
      <div className='md:flex gap-7'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
      </div>
     
    </div>
  )
}

export default App
