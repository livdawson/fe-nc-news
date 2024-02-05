import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Homepage from './Components/Homepage';
import Articles from './Components/Articles';
import './App.css'

function App() {

  const [headerText, setHeaderText] = useState("");
  const location = useLocation();

  useEffect(() => {
      const currentPath = location.pathname;
      if (currentPath === '/') {
        setHeaderText('Welcome to the Northcoders News Board');
      }
      else if (currentPath === '/articles') {
        setHeaderText('Articles');
      }
  }, [location]);

  return (
    <>
     <Header text={headerText} />
     <Navigation/>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/articles" element={<Articles/>}/>
     </Routes>
    </>
  )
}

export default App
