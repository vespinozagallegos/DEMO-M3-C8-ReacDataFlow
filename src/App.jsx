import './App.css'
import CardList from './CardList';
import styles from './App.module.css' //Se importa el modulo completo


function App() {
  const counter = 0;

  return (
    <>
      <h1 className={styles.title}>Mi Primera App</h1>
      <h2 className={styles.subtitle}>Contador: {counter}</h2>
      <button>Contador de clicks</button>
      <CardList/>
    </>
  );
};

export default App;
