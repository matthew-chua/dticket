import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import Button from './components/button/Button';
import Card from './components/card/Card';
import adele from "./assets/adele.png"
function App() {
  return (
    <div className="App">
    <Router>
      <div />
      <div className="navbarheight">&nbsp;</div>
      <Switch>
        <Route path="/" element={<Card img={adele} 
        title="Adele @ SF"
        location="Berkeley, CA" time = "24 Mar, 18:00" price="$100"/>} />
        <Route path="/post/:postid" element={<div/>} />
        <Route path="/user/:username" element={<div />} />
        <Route path="/search/:type=:keyword" element={<div />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
