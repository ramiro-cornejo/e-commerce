import { Button, Card } from "react-bootstrap"
//import Button from 'react-bootstrap/Button'

export const Producto = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Vino Tinto</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
            <Button variant="secondary">Ver más</Button>{' '}
            
</>
    )
}