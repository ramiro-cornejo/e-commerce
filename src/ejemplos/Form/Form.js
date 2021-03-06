import { useState } from "react"


export const Form = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: ''
    })

    const handleImputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("submit")
        console.log(values)
    }

    return (
        <div className="my-5 container">
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={handleImputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Email"
                    value={values.email}
                    onChange={handleImputChange}
                    name='email'
                /> 
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    )
}

// form for dummies
//2hs 

// const [nombre, setNombre] = useState('')
// const [email, setEmail] = useState('')

// const handleNombre = (e) => {
//     setNombre(e.target.value)
// }
// const handleEmail = (e) => {
//     setEmail(e.target.value)
// }

// const handleSubmit = (e) => {
//     e.preventDefault()

//     console.log("Submit")
//     console.log({
//         nombre, email
//     })
// }