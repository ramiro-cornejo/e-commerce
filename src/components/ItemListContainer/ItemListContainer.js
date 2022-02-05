import { Boton } from '../../ejemplos/boton/Boton'
import { Contenedor } from '../../ejemplos/Contenedor/Contenedor'
import { Nav, Producto } from '../../ejemplos/Producto'
import './ItemListContainer.scss'


export const ItemListContainer = ( {greeting} ) => {

    const obj = {
        titulo: 'Vino 1',
        desc: 'Caracteristicas del vino',
        precio:  1550 
    }
    
    const clickear = () => {
        console.log('Enviar al carrito')
    }

    return (
        <Contenedor>
            <h2>{greeting}</h2>
            <hr/>

            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title={obj.titulo} content={obj.desc}/>
            
            <Boton click={clickear}>Ver más</Boton>
        </Contenedor>
            
        
    )
}