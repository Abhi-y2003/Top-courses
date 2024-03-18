import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'

const Card = ({course , likedCourses, setLikedCourses}) => {

  function clickHandler(){
    if(likedCourses.includes(course.id)){               //agar apni cousrse ke id likedCourses wale array me hai to mtlb vo liked hai 
        setLikedCourses ( (prev) => prev.filter((cid)=> (cid !== course.id) ) )              //previous state pr filter laga diya send every id except course id 
        toast.warning("Like Removed")
      }

    else{
      //pahle se liked nhi hai to mtlb yaha insert krna hai liked wale array me 
      if (likedCourses.length == 0) {
        setLikedCourses([course.id]);
      }else{
        //pahlse se khuch pada hai isme 
        setLikedCourses( (prev)=> [...prev , course.id]);
      }
      toast.success("Liked Successfully ")
    }


  }
  return (
    
    <div className='w-[300px] bg-[#1f2937] bg-opacity-80 rounded-md overflow-hidden '>
      
      <div className='relative'>
      <img src={course.image.url}></img>
      
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
        <button onClick={clickHandler}>
           {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)  }
        </button>
      </div>
      </div>

      <div className='p-4 text-white'>
        <p className='font-bold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 '>
          {
          course.description.length>100 ? 
          (course.description.substr(0,100) + " ...") 
          :(course.description)
        } 
          </p>
      </div>

    </div>
  )
}

export default Card;