import './App.css';
import React, { 
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import SelectionMenu from './pages/SelectionMenu';
import ConfigMenu from './pages/ConfigMenu';
import Game from './pages/Game';  
import Header from './components/Header';

const App = () => {
  const screens = [{MainMenu}]

  const [currentScreen, setCurrentScreen] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleUnload = (event) => {
      event.preventDefault();
    };
  
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <div className="bg-neutral-200 h-screen flex flex-col items-center re">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={ <MainMenu /> } />
          <Route path="2" element={ <SelectionMenu /> } />
          <Route path="3" element={ <ConfigMenu /> } />
          <Route path="4" element={ <Game /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
