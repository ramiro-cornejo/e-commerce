import { Nav, Producto } from '../../ejemplos/Producto'
import './ItemListContainer.scss'
export const ItemListContainer = ( {greeting} ) => {

    const obj = {
        titulo: 'Vino 1',
        desc: 'Caracteristicas del vino',
        precio:  1550 
    }
    

    return (
        <section className="item-list-container">
            <h2>{greeting}</h2>
            <hr/>

            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title={obj.titulo} content={obj.desc}/>
            
        </section>
    )
}