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
import { HashRouter } from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';


export default function Content() {
   

  return (
 <HashRouter >
    <HomeStyled>
      <NavigationBar/>
 
     
      <Routes>
      {/* <Route exact path="/"  element={<HomeContent/> } /> */}
      <Route exact path="/sales-and-marketing" element={<SalesAndMarketingPage/> }/>
     <Route path='/sales-and-marketing/professional-telemarketing' element={<ProfessionalMarketingPage/>} />
     <Route path='/sales-and-marketing/overcoming-objections' element={<OvercomingObjectionsPage/>} />
     <Route path='/sales-and-marketing/prospecting-report-and-building-relationships' element={<ProspectingPage/>} />
     <Route path='/about-trenova' element={<AboutPage/>} />
     <Route path='/contact' element={<ContactPage/>} />
     </Routes> 
   
  <Footer/>
 </HomeStyled>   </HashRouter>
  );
}
