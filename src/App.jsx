import './App.css'
import CardList from './CardList';
import styles from './App.module.css' //Se importa el modulo completo
import { CustomButton } from './CustomButton';  // Se importa el Componente estilizado (Styled-Component)
// console.log(CustomButton); //es un objeto
import { useState } from 'react';   // HOOK de React. Desectructurado porque esta dentro de la dependencia de React que contiene muchas cosas

function App() {
  //esta es la logica
  //CREACIÓN DE ESTADO.
  // Se desectructura el array. count es el valor del estado que va a variar.
  // set+estado(por convención)=setCount. //*Es la función que permite modificar el estado "count"
  // Luego se llama al hook useState. //*Y se le da un valor inicial (0) que será el valor inicial del estado "count".
  const [count, setCount] = useState(0)
  //el return es un componente, mezcla js con html (etiquetas, que pueden tener o no lógica)
  return (
    <>
      <h1 className={styles.title}>Mi Primera Demo con React</h1>
      <h2 className={styles.subtitle}>Contador de Clicks: {count}</h2>
      {/* El componente estilizado CustomButton --> reemplaza la etiqueta <button></button>    CustomButton es un elem.HTML */}
      <CustomButton onClick={() => setCount((count) => count + 1)}>¡ Clickea AQUÍ !</CustomButton>
      <CardList/>
    </>
  );
};

export default App;
