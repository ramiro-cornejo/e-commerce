
import {  Card } from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({id, titulo, desc, precio,stock, img, categoria}) => {
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
                <ItemCount max={ stock }/>
            </Card.Body>
            </Card>

            
        </div>
    )
}