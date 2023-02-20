import "./App.css";
import Content from "./Content.jsx";
import { createContext, useContext, useEffect, useState , useRef } from "react";
export const DataContext = createContext(null);

function App() {
const homePage = useRef(null)
const aboutPage = useRef(null)
const contactPage = useRef(null)
const navBar = useRef(null)
const header = useRef(null)
const schoolGrowthAndStrategyPage = useRef(null)
const salesAndMarketingPage = useRef(null)
const careerDevelopmentPage = useRef(null)
const graduateAndEmployabilityPage = useRef(null)
const contentCreationPage = useRef(null)
const footer = useRef(null)
const courseOutline = useRef(null)
const courseWeOffer = useRef(null)
const professionalTeleSection = useRef(null)
const objectionSection = useRef(null)
const prospectSection = useRef(null)
const day2 = useRef(null)
const day3 = useRef(null)
const day4 = useRef(null)
const day5 = useRef(null)
const about = useRef(null)
const paymentcontainer = useRef(null)
const contentCreationSection = useRef(null)



useEffect(() => {
  document.title = "Sales and Marketing";
}, []);


  return (

  <DataContext.Provider value = {{navBar,header,courseOutline,courseWeOffer,professionalTeleSection
  ,objectionSection,prospectSection,day2,day3,day4,day5,about,contactPage,paymentcontainer,contentCreationSection,contentCreationPage}}>
       <div className="App" role="main">
     <Content/>
    </div>
   </DataContext.Provider>
   
  );
}

export default App;
