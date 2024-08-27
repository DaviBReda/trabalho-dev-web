import './componentStyles/NavBar.css'
import { getUser, logout } from "../helpers/Utils";
import IconW from './IconWhite'
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import ReorderIcon from '@mui/icons-material/Reorder';

export default function NavBar({onLogin}){

    const navigate = useNavigate();

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    const handleLogout = () =>{
        logout();
        onLogin(false);
        navigate('/');
    }

    const [openLinks, setOpenLinks] = useState(false);

    let userName = getUser()
    if (userName !== null) {
        return(
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <IconW/>
                    <div className='hiddenLinks'>
                    <Link to="/home"> Home </Link>
                    <Link to="/dashboard"> Dashboard </Link>
                    <Link to="/home"> Home </Link>
                    <Link to="/dashboard"> Dashboard </Link>
                    <p>Olá, {userName}</p>
                    <Link onClick={handleLogout}>Logout</Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to="/home"> Home </Link>
                    <Link to="/dashboard"> Dashboard </Link>
                    <p>Olá, {userName}</p>
                    <Link onClick={handleLogout}>Logout</Link>
                    <button onClick={toggleNavbar}>
                        toggleNavbar
                    </button>
                </div>
            </div>
        );
    } else {
        return(
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <IconW/>
                    <Link to="/home"> Home </Link>
                    <Link to="/dashboard"> Dashboard </Link>
                </div>
                <div className="rightSide">
                    <Link to="/register"> Registrar </Link>
                    <Link to="/login"> Login </Link>
                    <button onClick={toggleNavbar}>
                        <ReorderIcon/>
                    </button>
                </div>
            </div>
        );
    }
}