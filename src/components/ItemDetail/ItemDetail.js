
import { useContext, useState } from "react"
import {  Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ({id, titulo, desc, precio,stock, img, categoria}) => {
    

    const [cantidad, setCantidad] = useState(0)

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, titulo, precio ,categoria, stock , cantidad
            }
            agregarAlCarrito(addItem)
        }
    }

    return (
        <div>
            <Card style={{ width: '16rem', margin: '25px' }}>
            <Card.Img style={{ width: '8rem', margin: '50px' }} variant="top" src="https://iberpark.com/web/image/product.template/44374/image?unique=5284c0d" />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: $ {precio}
                </Card.Text>
            
                {
                    isInCart(id)
                    ?   <Link to="/cart" className="btn btn-success my-3">
                            Terminar compra
                        </Link>                  
                    :
                        <>
                            <ItemCount 
                                max={ stock } 
                                counter={ cantidad } 
                                setCounter={setCantidad} 
                            />

                            <button 
                                className="btn btn-success my-4"
                                onClick={handleAgregar}>

                                Agregar al carrito
                            </button>
                        </>
                }
            </Card.Body>
            </Card>    
            
            

            
        </div>
    )
}