import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import UserContext from './Components/UserContext';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Homepage from './Components/Homepage';
import Articles from './Components/Articles';
import ArticleDetail from './Components/ArticleDetail';
import './App.css'
import ChangeUser from './Components/ChangeUser';

function App() {

  const [loggedInUser, setLoggedInUser] = useState({username: "tickle122", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})
  const [headerText, setHeaderText] = useState("");
  const location = useLocation();

  useEffect(() => {
      const currentPath = location.pathname;
      if (currentPath === '/') {
        setHeaderText('Welcome to the Northcoders News Board');
      } else if (currentPath === '/articles') {
        setHeaderText('Articles');
      } else if (/^\/articles\/\d+$/.test(currentPath)) {
        setHeaderText('You are reading...')
      }
  }, [location]);

  return (
    <div>
     <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
     <Header text={headerText} />
     <Navigation/>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:article_id" element={<ArticleDetail/>}/>
     </Routes>
     </UserContext.Provider>
    </div>
  )
}

export default App
