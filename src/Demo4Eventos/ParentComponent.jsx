//Acá estará el estado y la funcion que se encargue de ejectuar el CAMBIO DE ESTADO
//Y asi poder pasarle la info a los componentes HIJOS
//*Dividiendo la Logica de la VISTA. Por un lado estará el componente SMART que tiene la logica y por otro lado un componente VISUAL (DUMB)
//Componente visual sólo recibe la info necesaria por Props y las renderiza en patalla

import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ParentComponent = () => {
    //*CREAR EL ESTADO
    const [counter, setCounter] = useState(0);
    //función para incrementar el valor de counter
    const handleOnIncrement = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <ComponentA/>
            <ComponentB/>
        </div>
    )

}

export default ParentComponent;