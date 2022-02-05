

export const Contenedor = ({children}) => {
    const style = {
        margin: '0 auto',
        maxWidth: '1200px'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}