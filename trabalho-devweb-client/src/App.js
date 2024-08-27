import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {useState} from 'react'
import { getUser } from './helpers/Utils';
import Login from './pages/Login';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import NavBar from './components/NavBar';

function App() {

const [isLogged, setIsLogged] = useState(getUser() != null ? true : false)

function handleLogin(isAuth) {
  setIsLogged(isAuth);
}

  return (
    <div className='App'>
      <Router>
        <NavBar className='NavBar' onLogin={handleLogin}/>
        <Routes>
          <Route path='/' element={isLogged ? <Home/> : <Login onLogin={handleLogin}/>} />
          <Route path='/landing' element={<LandingPage/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login onLogin={handleLogin}/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
