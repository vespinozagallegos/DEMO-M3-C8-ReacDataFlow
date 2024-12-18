import './App.css'
import CardList from './CardList';


function App() {
  let counter = 0;
  console.log(counter)

  return (
    <>
      <h1>Mi Primera App</h1>
      <CardList/>

      <p>Clicks: {counter}</p>
      <button onClick={() => counter++}>Contador de Clicks</button>
    </>
  );
};

export default App;
