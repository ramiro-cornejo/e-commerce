
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const {itemId} = useParams()
    console.log(itemId)
    console.log(item)
    
    useEffect (() => {
        
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((el) => el.id === Number (itemId)))
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    return (
        <div className='container my-5'>
            {
                loading
                ? <h2>Cargando..</h2>
                : <ItemDetail/>
            }

        </div>
)
};