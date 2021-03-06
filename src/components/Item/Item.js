import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ({id, titulo, desc, precio, oferta}) => {
    
    const precioFinal = oferta ? precio * 0.85 : precio

    return (
        <>  
            
            <Card style={{ width: '16rem', margin: '25px' }}>
            <Card.Img style={{ width: '8rem', margin: '50px' }} variant="top" src="https://iberpark.com/web/image/product.template/44374/image?unique=5284c0d" />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    { oferta &&
                        <Card.Title>15% OFF</Card.Title>
                    }
                </Card.Text>
                <Card.Text>
                    Precio: ${precioFinal}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary" style={{color: 'white',background: '#8a1534', border: 'none' }}>Ver màs</Button>
                </Link>
                
            </Card.Body>
            </Card>
</>
    )
}