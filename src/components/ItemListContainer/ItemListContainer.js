import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Item } from '../Item/Item'
import { Contenedor } from '../../ejemplos/Contenedor/Contenedor'




export const ItemListContainer = ( ) => {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(false)

    //Promise
    useEffect(() => {
        //console.log(pedirDatos) //estado pendiente
        setLoading(true)
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
                //console.log("Fin de proceso")
                setLoading(false)
            })

    },[])
    

    //Boton
    const clickear = () => {
        console.log('Ver más productos')
    }

    return (
        <>
        {
            loading
                ? <h3>Cargando galería</h3>
                : <Contenedor>
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
// VER CORRECCION 
/* {
    loading
                ? <h3>Cargando galería</h3>
                : <ItemList productos={productos}/>
    }*/

