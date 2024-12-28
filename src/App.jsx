import './App.css'
import CardList from './CardList';
import styles from './App.module.css' //Se importa el modulo completo
import { CustomButton } from './CustomButton';  // Se importa el Componente estilizado (Styled-Component)
// console.log(CustomButton); //es un objeto
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className={styles.title}>Mi Primera App</h1>
      <h2 className={styles.subtitle}>Contador de Clicks: {count}</h2>
      {/* El componente estilizado CustomButton --> reemplaza la etiqueta <button></button>    CustomButton es un elem.HTML */}
      <CustomButton onClick={() => setCount((count) => count + 1)}>¡ Clickea AQUÍ !</CustomButton>
      <CardList/>
    </>
  );
};

export default App;
