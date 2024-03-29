import React, { useState } from 'react'
import Card from './Card.js'

const Cards = ({courses , category}) => {
  
  const[likedCourses, setLikedCourses]=useState([]);
  
  //sara courses ka data bikhra hua hai i mean development ka alag data hai similarly sabka aise he hai
  // but we want k sara data ek sath ho  
  const getCourses =() =>{
    if(category === "All"){
      let allCourses=[]; 

      Object.values(courses).forEach(array => {    //object.value karke hame first array ko phad skte devlopment lifestyle etc now foreach laga k we are the inside content of each array.  
        array.forEach(course=>{                    //another foreach loop jo ham devlopment lifestyle har ek array k under aa gye the ham one step deep or aa gye  data-->development --> objects  1st for each loop se devlopment me 2nd wale se apne object me 
          allCourses.push(course)                             //aab ham har ek object ko push krdenge ek naye array me jaha sare courses honge bina kisi dikkat k
        })

      });
      return allCourses;
    }

    else{
      //yeh sirf specific category ka data pass karega 
      console.log(category);
      return courses[category];

    }
    
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>

    {getCourses().map((course)=>{
      return <Card key={course.id} course={course}
      likedCourses={likedCourses}
      setLikedCourses={setLikedCourses}/>
    })}

    </div>
  )
}

export default Cards