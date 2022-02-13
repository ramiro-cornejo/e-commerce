import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item = ({id, titulo, desc, precio, img, categoria}) => {
    return (
        <>
            <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary" style={{color: 'white',background: '#8a1534', border: 'none' }}>Ver màs</Button>
                </Link>
                
            </Card.Body>
            </Card>
</>
    )
}