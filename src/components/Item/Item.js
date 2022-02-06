import { Button, Card } from "react-bootstrap"
//import Button from 'react-bootstrap/Button'

export const Producto = ({titulo, desc, precio, img}) => {
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
                    {precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
</>
    )
}