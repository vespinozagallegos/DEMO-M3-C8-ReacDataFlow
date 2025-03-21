import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   //dom virtual que crea react
//import './index.css'                      //hoja de estilos
// import App from './App.jsx'                     //renderiza el archivo app jsx
// import DemoEstadoVariable from './DemoEstadoVariable.jsx' //renderiza el archivo DemoEstadoVariable jsx
// import Demo2EstadoConKey from './Demo2EstadoConKey.jsx'
// import AppProps from './Demo3Props/AppProps.jsx'
import AppEventos from './Demo4Eventos/AppEventos'

//createroot - crea una raiz y trae el elemento de id=root, del dom (un div en html)
//se renderiza el componente App
createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        {/* <DemoEstadoVariable /> */}
        {/* <Demo2EstadoConKey /> */}
        {/* <AppProps/> */}
        <AppEventos/>
    </StrictMode>
)
