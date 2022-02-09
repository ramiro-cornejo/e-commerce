import { stock } from "../data/stock"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(stock)
            //if (res === true) {
            //    resolve('Promesa resuelta')
            //} else {
            //    reject('Promesa rechazada')
            //}    
        }, 2000) //2 seg se resuelve
    })
}  