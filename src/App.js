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
    <div>
      <div>
      <Navbar/>
      </div>
      

      <div>
      <Filter filterData={filterData}/>
      </div>
      


      <div>
        {loading? <Spinner/>  : <Cards courses={courses}/>}
      
      </div>
      
    </div>
  )
}

export default App;