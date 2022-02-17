

export const ItemDetail = ({id, titulo, desc, precio, img, categoria}) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <img src={"https://iberpark.com/web/image/product.template/44374/image"} style={{ width: '8rem', margin: '50px' }} alt={categoria}/>
            <p>{desc}</p>
            <h5>Precio: $ {precio}</h5>

            {/*Hacer evento contador */}
        </div>
    )
}