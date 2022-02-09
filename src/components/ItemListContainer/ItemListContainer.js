import { useEffect, useState } from 'react'
import { Boton } from '../../ejemplos/boton/Boton'
import { Contenedor } from '../../ejemplos/Contenedor/Contenedor'
//import { Nav, Producto } from '../../ejemplos/Producto'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { stock } from '../../data/stock'


export const ItemListContainer = ( {greeting} ) => {
    
    const [productos, setProductos] = useState ([])

    //Promise
    useEffect(() => {
        //console.log(pedirDatos) //estado pendiente

        // .then(res) .catch(err)
        pedirDatos()
            .then((res) => {
                setProductos(res)
                //console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log("Fin de proceso")
            })

    },[])
    

    //Boton
    const clickear = () => {
        console.log('Enviar al carrito')
    }

    return (
        <Contenedor>
            <h2>{greeting}</h2>
            <hr/>
            
            {JSON.stringify(productos)}
            <Boton click={clickear}>Ver más</Boton>
        </Contenedor>
            
        
    )
}