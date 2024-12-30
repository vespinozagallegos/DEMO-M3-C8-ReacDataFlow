import './App.css'
import styles from './App.module.css' //Se importa el modulo completo
import { useState } from 'react';   // HOOK de React. Desectructurado porque esta dentro de la dependencia de React que contiene muchas cosas
console.log(styles);    //para evitar el error cuando no he citado styles

function Demo2EstadoConKey() {
    //se crea un ESTADO que trabaje los personajes de HP
    //*CUALQUIER TIPO DE DATO PUEDE SER UN ESTADO, como un array de objetos
    const [characters, setCharacters] = useState([
        {id:1, name: "Hary Poter", house: "Gryffindor"},
        {id:2, name: "Draco Malfoy", house: "Slytherin"}
    ]);
    
    //* Función para el botón. Actualiza el estado con el personaje que quiero agregar
    const addCharacter = () => {
        setCharacters([{id: 3, name: "Hermione Granger", house: "Gryffindor"}])
    }

    //usamos método map para renderizar los elementos del array, uno por uno
    //va con llaves {} para usar código JS

    //Al renderizar todo con map, los elementos son los mismos para react.
    // Por lo tanto a react hay que indicarle que son distintos elementos a renderizar
    // mediante una KEY única (es una prop).
    // que va a ir en la etiqueta principal div 
    return (
        <>
            {
                characters.map((character) => {
                    return (
                        <div    key={character.id}>
                            <h2>{character.name}</h2>
                            <h3>{character.house}</h3>
                        </div>
                    )
                } )
            }

            <button onClick={addCharacter}>Agregar Personaje</button>
        </>
    )
}

export default Demo2EstadoConKey;