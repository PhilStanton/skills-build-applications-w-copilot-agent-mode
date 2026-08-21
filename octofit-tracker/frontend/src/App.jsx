import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import { apiHost } from './api.js';
import './App.css';

function App() {
  const links = [['/users', 'Athletes'], ['/teams', 'Teams'], ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'], ['/workouts', 'Workouts']];
  return <BrowserRouter><div className="app-shell">
    <header className="app-header"><NavLink to="/" className="brand">OCTOFIT <span>TRACKER</span></NavLink><nav aria-label="Primary navigation">
      {links.map(([path, label]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}
    </nav></header>
    <main><Routes><Route path="/" element={<Home />} /><Route path="/users" element={<Users />} /><Route path="/teams" element={<Teams />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
    <footer>Connected to <a href={apiHost}>{apiHost}</a></footer>
  </div></BrowserRouter>;
}

function Home() {
  return <section className="home-section"><p className="eyebrow">Performance, together</p><h1>Make every session count.</h1><p className="home-copy">Log movement, find your people, and turn steady effort into shared momentum.</p><NavLink to="/activities" className="btn btn-dark">View activity</NavLink></section>;
}

export default App
