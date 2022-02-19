import { useState } from "react"

export const ItemCount = ({max, min = 0}) => {

    const [counter, setCounter] = useState(min)

    const handleSumar = (e) => {
        // operador lógico AND
        counter < max && setCounter(counter + 1)
    }
    const handleRestar = (e) => {
        counter > min && setCounter(counter - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar} >-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
        </div>
    )
}