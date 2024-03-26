import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import UserContext from './Components/Shared/UserContext';
import Header from './Components/Shared/Header';
import Navigation from './Components/Shared/Navigation';
import Homepage from './Components/Homepage/Homepage';
import Articles from './Components/Article/Articles';
import ArticleDetail from './Components/Article/ArticleDetail';
import './App.css'

function App() {

  const [loggedInUser, setLoggedInUser] = useState({username: "tickle122", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})
  const [headerText, setHeaderText] = useState("");
  const location = useLocation();
  const currentPath = location.pathname + location.search;

  useEffect(() => {
      if (currentPath === '/') {
        setHeaderText('Welcome to the Northcoders News Board');
      } else if (currentPath === '/articles') {
        setHeaderText('All Articles');
      } else if (/^\/articles\/\d+$/.test(currentPath)) {
        setHeaderText('You are reading...')
      } else if (currentPath.startsWith('/articles?topic=')) {
        const searchParams = new URLSearchParams(location.search);
        const topic = searchParams.get('topic');
        setHeaderText(`Articles about ${topic.charAt(0).toUpperCase()}${topic.slice(1)}`)
      }
  }, [currentPath]);

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
