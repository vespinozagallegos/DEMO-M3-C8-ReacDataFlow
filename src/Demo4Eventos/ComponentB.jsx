//recibe 2 props: counter(informacion de un estado) y una funcion(para modificar el estado)
const ComponentB = ({ counter, onIncrement }) => {
    return (
        <div>
            <p>Componente B - Counter: {counter}</p>
            <button onClick={onIncrement}>Incrementar counter B</button>
        </div>
    )
}

export default ComponentB;