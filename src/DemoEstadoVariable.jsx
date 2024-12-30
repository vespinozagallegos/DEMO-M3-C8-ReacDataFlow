import './App.css'
import styles from './App.module.css' //Se importa el modulo completo
import { useState } from 'react';   // HOOK de React. Desectructurado porque esta dentro de la dependencia de React que contiene muchas cosas
console.log(styles);    //para evitar el error cuando no he citado styles

function DemoEstadoVariable() {
    //name es el valor del estado que varía
    //setName. Es la función que permite modificar el estado. set+(param anterior) por convención
    //HOOK useState con el valor inicial entre ()
    const [name, setName] = useState('Víctor');

    //console log para ver como cambiaba solo en consola al NO utilizar estado sino una funcion para cambiar la variable
    console.log(name);

    //solo hace un cambio
    //const changeName = () => {
    //  setName("Victorito")
    //}

    //con esto va y viene entre las 2 variables
    const changeName = () => {
        if(name === "Víctor") setName("Victorito");
        else setName("Víctor")
    }
    
    return (
        <>
            <h1>Hola, soy {name} !</h1>
            <button onClick={changeName}>Cambiar</button>
        </>
    )
}

export default DemoEstadoVariable;