import { Button, Card } from "react-bootstrap"
//import Button from 'react-bootstrap/Button'

export const Producto = ({title, content}) => {
    return (
        <>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
            <Button variant="secondary">Ver más</Button>{' '}
            
</>
    )
}