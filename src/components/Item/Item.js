import { Button, Card } from "react-bootstrap"


export const Item = ({titulo, desc, precio, img}) => {
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
                <Button variant="primary" style={{color: 'white',background: '#8a1534', border: 'none' }}>Comprar</Button>
            </Card.Body>
            </Card>
</>
    )
}