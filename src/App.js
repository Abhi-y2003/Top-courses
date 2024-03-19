import React, { useState } from 'react'
import Navbar from './componensts/Navbar.js'
import Filter from './componensts/Filter.js'
import Cards from './componensts/Cards.js'
import {apiUrl ,filterData} from './data.js'
import {useEffect } from 'react'
import { toast } from 'react-toastify'
import Spinner from './componensts/Spinner.js'


const App = () => {


  const[courses, setCourses] = useState(null);

  const[loading, setLoading] = useState(true);

  const[category, setCategory]  =useState(filterData[0].title);
    
 
    async function FetchData(){
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable 
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
      setLoading(false);
    };

    useEffect( ()=>{
      FetchData();
    },[])
  
  return (
    <div className='flex flex-col min-h-screen '> 
      <div>
      <Navbar/>
      </div>
      
      <div className='bg-[#4d4757]'>
      <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      


      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap item-center min-h-[50vh]'>
        {loading? <Spinner/>  : <Cards courses={courses} category={category}/>}
      
      </div>
      </div>

      
      
    </div>
  )
}

export default App;