import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
//import { ItemList} from '../ItemList/ItemList'
import { Item } from '../Item/Item'
import { Contenedor } from '../../ejemplos/Contenedor/Contenedor'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(false)

    const {catId} = useParams()
    console.log(catId)
    

    //Promise
    useEffect(() => {
        //console.log(pedirDatos) //estado pendiente
        setLoading(true)
        // .then(res) .catch(err)
        pedirDatos()
            .then((res) => {
                if (catId) {
                    setProductos(res.filter((el) => el.categoria === catId))
                } else {
                    setProductos(res)
                }
                
                
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                //console.log("Fin de proceso")
                setLoading(false)
            })

    },[catId])
    
    /*useEffect (() => {
        const clickear = () => {
            console.log('clickear')
        }

        window.addEventListener('click', clickear)
        return () => {
            window.removeEventListener('click', clickear)
        }
    }, [])*/

    return (
        <>
        {
            loading
                ? <h3>Cargando galería</h3>
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
// VER CORRECCION 
/* {
    loading
                ? <h3>Cargando galería</h3>
                : <ItemList productos={productos}/>
    }*/

