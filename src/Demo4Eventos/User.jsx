import { useState } from "react";

const User = () => {
    //Estado encargado de mostrar si el perfil
    //se está editando o ya se actualizó
    const [updateData, setUpdateData] = useState("Editando...");

    //funcionalidad del botón -> MANEJADOR DE EVENTOS
    const handleButtonClick = () => {
        //actualiza el estado
        setUpdateData("Actualizado!")
    }
    
    return (
        <div>
            <button onClick={handleButtonClick}>Actualizar Perfil</button>
            <p>Estado del perfil: {updateData}</p>
        </div>
    )
}

export default User;