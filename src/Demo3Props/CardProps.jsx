const CardProps = ({ character: {name, house} }) => { //se desestructura el objeto props y se vuelve a desectructurar dentro, ahorrando lineCode    
    
    return (
        <div>
            <h2>Nombre: {name}</h2>
            <h3>Casa: {house}</h3>
        </div>
    )
}

export default CardProps;