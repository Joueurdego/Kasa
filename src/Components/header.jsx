import Logo from '../assets/.LOGO.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <ul>
                <li>
                    <NavLink 
                        to="/Home" 
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Apropos" 
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        À propos
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;