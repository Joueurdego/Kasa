import Logo from '../assets/.LOGO.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <ul>
                <li><Link to="/Home">Accueil</Link></li>
                <li><Link to="/Apropos">À propos</Link></li>
            </ul>

        </header>);
};

export default Header
