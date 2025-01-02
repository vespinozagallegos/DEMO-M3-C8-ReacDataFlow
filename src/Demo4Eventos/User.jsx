import { useState } from "react";

const User = ({ handleUserButtonClick }) => {
    //Estado encargado de mostrar si el perfil
    //se está editando o ya se actualizó
    const [updateData, setUpdateData] = useState("Editando...");

    //funcionalidad del botón -> MANEJADOR DE EVENTOS
    const handleButtonClick = () => {
        //actualiza el estado
        setUpdateData("Actualizado!")
        //Se ejecuta la funcion que se esta desestructurando con un msje.
        handleUserButtonClick("Se actualizó el perfil")
    }
    
    return (
        <div>
            <button onClick={handleButtonClick}>Actualizar Perfil</button>
            <p>Estado del perfil: {updateData}</p>
        </div>
    )
}

export default User;