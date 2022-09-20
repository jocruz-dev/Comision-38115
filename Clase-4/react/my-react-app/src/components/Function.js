const Function = ({name, children}) => {
    return(
        <>
            <h1>Componente de funcion {name}</h1>
            <div style={{color: "red"}}>
                {children}
            </div>
        </>
    )
}

export default Function

