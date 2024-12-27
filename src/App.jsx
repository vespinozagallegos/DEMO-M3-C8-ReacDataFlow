import './App.css'
import CardList from './CardList';
import styles from './App.module.css' //Se importa el modulo completo
console.log(styles);


function App() {
  const counter = 0;

  return (
    <>
      <h1 className={styles.title}>Mi Primera App</h1>
      <h2 className={styles.subtitle}>Contador: {counter}</h2>
      <button>Contador de clicks</button>
      <CardList/>
{/* 
      <p>Clicks: {counter}</p>
      <button onClick={() => counter++}>Contador de Clicks</button> */}
    </>
  );
};

export default App;
