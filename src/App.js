import Navbar from './componensts/Navbar.js'
import Filter from './componensts/Filter.js'
import Cards from './componensts/Cards.js'
import {apiUrl, filterData} from './data.js'

function App() {


  return (
    <div>
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards/>
    </div>
  );
}

export default App;
