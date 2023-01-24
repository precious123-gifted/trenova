import "./App.css";
import Home from "./homepage/Home.jsx";
import { createContext, useContext, useEffect, useState , useRef } from "react";
export const DataContext = createContext(null);

function App() {
const homePage = useRef(null)
const aboutPage = useRef(null)
const contactPage = useRef(null)
const navBar = useRef(null)
const schoolGrowthAndStrategyPage = useRef(null)
const salesAndMarketingPage = useRef(null)
const careerDevelopmentPage = useRef(null)
const graduateAndEmployabilityPage = useRef(null)
const footer = useRef(null)


  return (

  <DataContext.Provider value = {{}}>
       <div className="App" role="main">
     <Home/>
    </div>
   </DataContext.Provider>
   
  );
}

export default App;
