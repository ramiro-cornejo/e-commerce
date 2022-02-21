
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {Loader} from '../Loader/Loader';
import {db} from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const {itemId} = useParams()
    

    
    useEffect (() => {
        
        setLoading(true)
        //1- ref al documento
        const docRef = doc(db, "productos", itemId )
        //2- peticion del documento
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> {
                setLoading(false)
            })
        
    }, [itemId])

    

    return (
        <div className='container my-5'>
            {
                loading
                ? <Loader/>
                : <ItemDetail {...item}/>
            }

        </div>
)
};