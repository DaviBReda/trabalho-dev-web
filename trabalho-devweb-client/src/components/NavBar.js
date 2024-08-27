import { getUser } from "../helpers/Utils";
import Icon from '../components/Icon';

export default function NavBar(){
    
    let userName = getUser
    if (userName !== null) {
        return(
            <div className="navbar">
                <div className="leftSide">
                    <Icon/>
                </div>
                <div className="rightSide">
                    <link to="/home"> Home </link>
                    <link to="/dashboard"> Dashboard </link>
                    <p>Olá, {userName}</p>
                    <button onClick={toggleNavbar}>
                        toggleNavbar
                    </button>
                </div>
            </div>
        );
    } else {
        return(
            <div className="navbar">
                <div className="leftSide">
                    <Icon/>
                </div>
                <div className="rightSide">
                    <link to="/register"> Registrar </link>
                    <link to="/login"> Login </link>
                    <button onClick={toggleNavbar}>
                        toggleNavbar
                    </button>
                </div>
            </div>
        );
    }
}