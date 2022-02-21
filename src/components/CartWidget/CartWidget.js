import { useContext } from 'react'
import {BsCartPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const {cantidadCart, cart} = useContext(CartContext)
    return (
        <Link to="/cart" className={ `cart-widget ${cart.length === 0 ?  'cart-hidden' : ''}`}>
            <BsCartPlus/>
            <span>{cantidadCart()}</span>
        </Link> 
    )
}