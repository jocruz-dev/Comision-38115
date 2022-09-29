const Function = ({items, name}) => {
    return(
        <div>
            <h1>Componente de funcion </h1>
            {items.map((item)=>{
                return (
                    <>
                        <p key={item.id}>{item.name}</p>
                        <p key={item.id}>{item.location.name}</p>
                        <img src={item.image} key={item.id}></img>
                    </>
                )
            })}
        </div>
    )
}

export default Function

