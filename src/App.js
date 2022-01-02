import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Character from './routes/Character';
import Episode from './routes/Episode';
import Main from './routes/Main';
import './styles/global-styles';
import { GlobalStyle } from './styles/global-styles';
import ScrollButton from "./components/ScrollButton";

function App() {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route exact path="/main" component={Main}></Route>
        <Route exact path="/episode/:id" component={Episode}></Route>
        <Route exact path="/character/:name" component={Character}></Route>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="*" component={Main}></Route>
      </Switch>
    </Router>
     <ScrollButton showScrollButton={showScrollButton}/> 
    </>
  );
}

export default App;
