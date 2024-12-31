const CardProps = (props) => {
    // console.log(props);
    const { name, house } = props.character;
    // console.log(name, house);
    
    
    return (
        <div>
            <h2>Nombre: {name}</h2>
            <h3>Casa: {house}</h3>
        </div>
    )
}

export default CardProps;