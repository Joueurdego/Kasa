import { Link } from 'react-router-dom';
import Home from './home';
function Error404 (){


    return(

    <div className="erreur">
    <h2 >404</h2>
    <p>oups! La page que vous demandes n'existe pas.</p>
    <Link className='linkHome' to="/Home">Retourner sur la page d'accueil</Link>
    </div>
)

}

export default Error404