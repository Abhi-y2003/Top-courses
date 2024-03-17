import React from 'react'
import Navbar from './componensts/Navbar.js'
import Filter from './componensts/Filter.js'
import Cards from './componensts/Cards.js'
import {apiUrl, filterData } from './data.js'
const App = () => {
  return (
    <div>
      App
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards data={apiUrl}/>
    </div>
  )
}

export default App;