import { Link } from "react-router-dom";
import './NavBar.scss'


export const NavBar = () => {
    return (
        <>
        <header className="header">
            
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1>MALBA vinoteca</h1>
            </Link>

            <nav className="header-nav">
                <Link to='/' className='header-link'>Productos</Link>
                <Link to='/Nosotros' className='header-link'>Nosotros</Link>
                <Link to='/Contacto' className='header-link'>Contacto</Link>
                
            </nav>
        </header>
        </>
    )
}