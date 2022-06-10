import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.scss'


export const NavBar = () => {
    return (
        <>
        <header className="header">
            
            <Link to='/' style={{textDecoration: 'none'}}>
                <h1>MALBA</h1>
            </Link>

            <nav className="header-nav">
                <Link to='/Productos/Vino Tinto' className='header-link'>Vino Tinto</Link>
                <Link to='/Productos/Vino Blanco' className='header-link'>Vino Blanco</Link>
                <Link to='/Productos/Vino Espumante' className='header-link'>Vino Espumante</Link>
                <CartWidget/>
            </nav>
        </header>
        </>
    )
}