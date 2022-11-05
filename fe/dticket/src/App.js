import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import Button from './components/button/Button';
import Card from './components/card/Card';
import adele from "./assets/adele.png"
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <div className="App">
    <Router>
      <div />
      <Switch>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/post/:postid" element={<div/>} />
        <Route path="/user/:username" element={<div />} />
        <Route path="/search/:type=:keyword" element={<div />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
