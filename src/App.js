import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Form from './Components/Form';
import About from './Components/About';
import Services from './Components/Services';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import ServiceCFO from './Components/ServiceCFO';
import ServiceERP from './Components/ServiceERP';
import ServiceTreasury from './Components/ServiceTreasury';
import ServiceTaxation from './Components/ServiceTaxation';
import ServicePayroll from './Components/ServicePayroll'
import ServiceProcess from './Components/ServiceProcess';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Form/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/CFO' element={<ServiceCFO/>}/>
            <Route path='/ERP' element={<ServiceERP/>}/>
            <Route path='/treasury' element={<ServiceTreasury/>}/>
            <Route path='/taxation' element={<ServiceTaxation/>}/>
            <Route path='/payroll' element={<ServicePayroll/>}/>
            <Route path='/process' element={<ServiceProcess/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
