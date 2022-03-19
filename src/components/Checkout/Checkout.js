import { collection, writeBatch, getDocs, addDoc, Timestamp, updateDoc, doc, getDoc, query, where, documentId } from "firebase/firestore"
import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { ThankYou } from "./ThankYou"
import { validar } from "./validar"



export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values, cart, totalCart, setOrderId, vaciarCart) => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
        } 

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(),'in', cart.map((el)=> el.id)))
        const productos = await getDocs(q)
        const outOfStock = []
        
        productos.docs.forEach((doc) => {
            const item = cart.find((el) => el.id === doc.id)
            
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef,orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    vaciarCart()
                })
        } else {
            alert("Items sin stock")
    }


        addDoc(ordersRef, orden)
            .then((resp) => {

                cart.forEach((item) => {
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                        })
                })

                setOrderId(resp.id)
                vaciarCart()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validar(values) && generarOrden(values, cart, totalCart, setOrderId, vaciarCart)
    }

    if (orderId) {
        return <ThankYou order={orderId}/>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu teléfono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    )
    }

