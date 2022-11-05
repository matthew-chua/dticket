import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import Button from './components/button/Button';
import Card from './components/card/Card';
import adele from "./assets/adele.png"
import LandingPage from './pages/LandingPage';
import VerifyPage from './pages/VerifyPage';
import ProfilePage from './pages/ProfilePage';
import EventPage from './pages/EventPage';
import EventsPage from './pages/EventsPage';
import Modal from './components/modal/Modal';
import NavBar from './components/layout/NavBar';
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>

      <Switch>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/events/" element={<EventsPage/>} />
        <Route path="/events/:eventID" element={<EventPage/>} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
