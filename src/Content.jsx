import React from 'react';
import {HomeStyled} from './homepage/Home.styled.jsx';
import { DataContext } from './App.jsx';
import { useContext } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import HomeContent from './homepage/HomeContent.jsx';
import SalesAndMarketingPage from './SalesAndMarketingPage/SalesAndMarketingPage.jsx';
import ProfessionalMarketingPage from './SalesAndMarketingPage/ProfessionalMarketingPage/ProfessionalMarketingPage.jsx';
import OvercomingObjectionsPage from './SalesAndMarketingPage/OvercomingObjectionsPage/OvercomingObjectionsPage.jsx';
import ProspectingPage from './SalesAndMarketingPage/ProspectingPage/ProspectingPage.jsx';
import AboutPage from './AboutPage/AboutPage.jsx';
import ContactPage from './ContactPage/ContactPage.jsx';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';


export default function Content() {
   

  return (
 <BrowserRouter >
    <HomeStyled>
      <NavigationBar/>
 
     
      <Routes>
      {/* <Route exact path="/"  element={<HomeContent/> } /> */}
      <Route exact path="/" element={<SalesAndMarketingPage/> }/>
     <Route path='/professional-telemarketing' element={<ProfessionalMarketingPage/>} />
     <Route path='/overcoming-objections' element={<OvercomingObjectionsPage/>} />
     <Route path='/prospecting-report-and-building-relationships' element={<ProspectingPage/>} />
     <Route path='/about-trenova' element={<AboutPage/>} />
     <Route path='/contact' element={<ContactPage/>} />
     </Routes> 
   
  <Footer/>
 </HomeStyled>   </BrowserRouter>
  );
}
