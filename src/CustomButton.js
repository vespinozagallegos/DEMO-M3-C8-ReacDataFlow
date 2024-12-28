import styled from "styled-components"  //Importacion de la LIBRERÍA
// console.log(styled); //es una funcion

//objeto styled. Con styled.button selecciono/llamo la etiqueta button para editarla/agregar estilos. las backtick `` son para agregar estilos con JS
export const CustomButton = styled.button`
    color: white;
    // 1rem = 8px
    font-size: 1.5 rem;
    // separación externa del botón
    margin: 1rem;
    // separación interna del botón 1°Top 2°Left 3°Down 4°Rigth (Contrarreloj) // si hay solo dos sería 1°Top-Down 2°Left-Rigth // si hay 1 sería para todo
    padding: 0.5rem 1rem;
    //redondeo de vértices
    border-radius: 0.8rem;
    border: none;
    background-color: darkgreen;

    // Cuando me posicione sobre le elemento, se activa
    &:hover {
        background-color: darkkhaki;
    }

`