
export const ItemDetail = ({id, titulo, desc, precio, img, categoria}) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <img src={img} alt={titulo}/>
            <p>{desc}</p>
            <h5>Precio: ${}precio</h5>

            {/*Hacer evento contador */}
        </div>
    )
}