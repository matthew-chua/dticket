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
import TicketPage from './pages/TicketPage';
import UserContext from './Contexts/usercontext';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null)
  // console.log(user)
  return (
    <div className="App">
    <Router>
    <NavBar setUser={(e) => setUser(e)}/>
    <UserContext.Provider value={user}>
      <Switch>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/events/" element={<EventsPage/>} />
        <Route path="/events/:eventID" element={<EventPage/>} />
        <Route path="/profile/ticket" element={<TicketPage/>} />
      </Switch>
    </UserContext.Provider>
    </Router>
    </div>
  );
}

export default App;
