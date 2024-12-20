import './App.css'
import CardList from './CardList';

function App() {
  const counter = 0;

  return (
    <>
      <h1 className='title'>Mi Primera App</h1>
      <h2>Contador: {counter}</h2>
      <button>Contador de clicks</button>
      <CardList/>
{/* 
      <p>Clicks: {counter}</p>
      <button onClick={() => counter++}>Contador de Clicks</button> */}
    </>
  );
};

export default App;
