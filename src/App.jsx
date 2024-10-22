

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  

    let [bookmark,setBookmark]= useState([])

    let [readingTime,setReadingTime]=useState(0)

    let [pass,setPass]=useState([])




    let handlePass=(id)=>{

      let removeItem= bookmark.filter(item=>item.id!==id)

      setBookmark(removeItem)

      let takeRemoveItem= bookmark.find(item=>item.id== id)

        
      let newArrForPass= [...pass,takeRemoveItem]

      setPass(newArrForPass)

    }

    


    let handleBookmark=(blog)=>{

      let repeat= bookmark.find(item=>item.id===blog.id)
       
      if(!repeat){
        let newArr= [...bookmark,blog]
        setBookmark(newArr)

      }
      else{
        alert("Cant Add")
      }
      

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
        <Bookmarks bookmark={bookmark} readingTime={readingTime} handlePass={handlePass}pass={pass}></Bookmarks>
        
      </div>
      
     
    </div>
  )
}

export default App
