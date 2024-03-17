import React, { useState } from 'react'
import Navbar from './componensts/Navbar.js'
import Filter from './componensts/Filter.js'
import Cards from './componensts/Cards.js'
import {apiUrl ,filterData} from './data.js'
import {useEffect } from 'react'
import { toast } from 'react-toastify'
const App = () => {


  const[courses, setCourses] = useState(null);
    
  useEffect( ()=>{
    const FetchData = async() =>{
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable 
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    }
    FetchData();
  },[])
  
  return (
    <div>
      App
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards courses={cources}/>
    </div>
  )
}

export default App;