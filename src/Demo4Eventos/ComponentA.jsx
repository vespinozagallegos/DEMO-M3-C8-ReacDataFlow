//recibe 2 props: counter(informacion de un estado) y una funcion(para modificar el estado)
const ComponentA = ({ counter, onIncrement }) => {
    return (
        <div>
            <p>Componente A - Counter: {counter}</p>
            <button onClick={onIncrement}>Incrementar counter A</button>
        </div>
    )
}

export default ComponentA;