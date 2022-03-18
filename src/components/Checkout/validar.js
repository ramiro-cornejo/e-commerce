

export const validar = (values) => {
    // mala practica, investigar YUP para form
    if (values.nombre.length < 4) {
        alert("Nombre es demasiado corto")
        return false
    }
    if (values.email.length < 5) {
        alert("Email incorrecto")
        return false
    }
    if (values.tel.length < 8) {
        alert("Teléfono incorrecto")
        return false
    }

    return true
}