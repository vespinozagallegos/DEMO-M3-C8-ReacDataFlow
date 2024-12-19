import './App.css'
import Login from './Login';
import Register from './Register';

function App() {
  const isRegistered = true;

    return (

      <>

        <h1>Bienvenidos a mi Primera App</h1>
        
        {isRegistered && <> <h2>Ingresa tus datos para entrar.</h2><Login/> </>}
        {!isRegistered && <> <h2>Completa los siguientes datos.</h2><Register/> </>}

      </>


    );
};

export default App;
