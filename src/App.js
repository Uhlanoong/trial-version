import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Autocomplete from './Pages/Autocomplete/Autocomplete';
import Elevation from './Pages/Elevation/Elevation';
import Header from './Pages/Header/Header';
import Reactauto from './Pages/Reactauto/Reactauto';
import Search from './Pages/Search/Search';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = "/services" element = {<Services/>}></Route>
          <Route path = "/search" element = {<Search/>}></Route>
          <Route path = "/autocomplete" element = {<Autocomplete/>}/>
          <Route path = "/elevation" element = {<Elevation/>}></Route>
          <Route path = "/reactauto" element = {<Reactauto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
