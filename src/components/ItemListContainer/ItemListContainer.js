import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { Item } from '../Item/Item'
import { Contenedor } from '../../ejemplos/Contenedor/Contenedor'
import { useParams } from 'react-router-dom'
import {Loader} from '../Loader/Loader.js'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(false)

    console.log(productos)

    const {catId} = useParams()

    //Promise
    useEffect(() => {
        //console.log(pedirDatos) //estado pendiente
        setLoading(true)
        
        //1- armar referencia
        const productosRef = collection(db, 'productos')
        const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
        //2- pedir esa referencia         
        getDocs(q)
            .then((resp) => {
                setProductos( resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })
        

    },[catId])

    return (
        <>
        {
            loading
                ? <Loader/>
                :   <Contenedor>
                    <h2>Productos</h2>
                    <hr/>
                    <div className="row">
                        { productos.map ( (el) => <Item key={el.id} {...el}/>)}
                    </div>
                    </Contenedor>
        }
            
            
        </>
    )
}
// simplificación 
/* {
    loading
                ? <h3>Cargando galería</h3>
                : <ItemList productos={productos}/>
    }*/

