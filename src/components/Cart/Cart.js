import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsTrash } from 'react-icons/bs'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"



export const Cart = () => {

const {cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    //render si el cart esta vacio
    //opcion A (recomendada)
    if (cart.length === 0) {
        return <div className="container my-4" >
            <h2>Carrito sin productos</h2>
            <Link to="/" className="btn btn-primary" >Volver</Link>
        </div>
    }
    //opcion B
    /*if (cart.length === 0) {
        return <Navigate to={"/"}/>
    }*/

    return (
        <div className="container my-4">
            <h2>
                Tu compra
            </h2>
            <hr/>
                
                {
                    cart.map ((item) => (
                        <div key={item.id} style={{display: 'flex', flexDirection: 'row'} } >
                            <Card style={{ width: '80rem', margin: '25px', flexDirection: 'row'}}>
                            
                            <Card.Img style={{ width: '4rem', height: '8rem',  margin: '15px' }} variant="top" src="https://iberpark.com/web/image/product.template/44374/image?unique=5284c0d" />
                            
                            
                            <h4 className="mx-5 my-5">{item.titulo}</h4>
                            
                            
                            <p className="mx-4 my-5">Cantidad: {item.cantidad}</p>
                            <p className="mx-5 my-5">Precio: ${item.cantidad * item.precio}</p>
                            
                            
                            
                            
                            <button className="btn btn-danger my-3 mx-8" onClick={() => eliminarItem(item.id)}>
                                <BsTrash/>
                            </button>
                            
                            
                            </Card>
                        </div>
                    ))
                }

                <hr/>
                <h2>Total: $ {totalCart()}</h2>

                <div className="my-2">
                    <button className="btn btn-danger" onClick={vaciarCart} >Vaciar carrito</button>
                    <button className="btn btn-success mx-2">Terminar compra</button>
                </div>
            
        </div>
    )
}