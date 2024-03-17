import React from 'react'

const Cards = ({courses}) => {
  return (

    //sara courses ka data bikhra hua hai i mean development ka alag data hai similarly sabka aise he hai
    // but we want k sara data ek sath ho  
    
    
    <div>
    {courses.map(course)}

    </div>
  )
}

export default Cards