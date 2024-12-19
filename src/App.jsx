import './App.css'
import Login from './Login';
import Register from './Register';

function App() {
  const isRegistered = true;

  if (isRegistered) {
    return (

      <div>

        <h1>Bienvenidos a mi Primera App</h1>
        <h2>Ingresa tus datos para entrar.</h2>
        
        <Login/>

      </div>

    )    
  }
    return (
      <div>
        <h1>Bienvenidos a mi Primera App</h1>
        <h2>Completa los siguientes datos.</h2>

        <Register/>

      </div>


    )
  

  // return (
  //   <>
  //   <Login/>
  //   <Register/>
  //   </>
  // );
};

export default App;
