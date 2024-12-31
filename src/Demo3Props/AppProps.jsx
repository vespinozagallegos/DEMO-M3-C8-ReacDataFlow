import '../App.css'
import styles from '../App.module.css' //Se importa para tener el estilo seteado
import { useState } from 'react';   // HOOK de React.                                                                                               //Desectructurado porque esta dentro de la dependencia de React que contiene muchas cosas
console.log(styles);    //para evitar el error cuando no he citado styles
import CardProps from './CardProps';    //Para que cada personaje se renderice en una tarjeta

function AppProps() {
    //se crea un ESTADO que trabaje los personajes de HP
    //*CUALQUIER TIPO DE DATO PUEDE SER UN ESTADO, como un array de objetos
    const [characters, setCharacters] = useState([
        {id:1, name: "Hary Poter", house: "Gryffindor"},
        {id:2, name: "Draco Malfoy", house: "Slytherin"}
    ]);


    
    //* Función para el botón. ACTUALIZA EL ESTADO con el personaje que quiero agregar 
    // se agrega ...characters, para que copie el estado anterior y se agregue el tercer personaje sin reemplazarlos
    const addCharacter = () => {
        setCharacters([...characters, {id: 3, name: "Hermione Granger", house: "Gryffindor"}])
    }



    //Funcion para el segundo botón
    //*MODIFICAR NOMBRE (Hary Poter)
    const modifyName = () => {
        characters[0].name = "Harry Potter";
        //*se le indica que actualice EL ESTADO con los valores que ya tenia
        // hacieno una copia de characters
        setCharacters([...characters]);
    }


    //*MAP PARA RENDERIZAR
    //usamos método map para renderizar los elementos del array, uno por uno. Va con llaves {} para usar código JS
    //Al renderizar todo con map, los elementos son los mismos para react. Por lo tanto a react hay que indicarle que son distintos elementos a renderizar
    // mediante una KEY única (es una prop). que va a ir en la etiqueta principal div 
    return (
        <>
            {
                characters.map((character) => {
                    return (
                        <CardProps key={character.id} />
                    )
                } )
            }

            <button onClick={addCharacter}>Agregar Personaje</button>
            <button onClick={modifyName}>Corregir Nombre</button>
        </>
    )
}

export default AppProps;