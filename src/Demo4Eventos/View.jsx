import User from "./User";

const View = () => {
    //funcion para ver como funciona el Evento de Padre a Hijo
    //info es un parametro por estar en una función normal, NO ES PROPS. Sería props si estuviera arriba en el comp. View = ()
    const handleUserButtonClick = (info) => {
        console.log(info);
    }
    //Para ver si llega la info debo pasarle handleUserButtonClick como PROP al hijo User
    //La prop lleva el mismo nombre de la funcion handleUserButtonClick
    //*Con esto le pasamos una Prop al Hijo User que irá autom. en el paréntesis -> const User = () y se puede desestructurar en el modulo User
    return (
        <User handleUserButtonClick={handleUserButtonClick}/>
    )
}

export default View;