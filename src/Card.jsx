import styles from './Card.module.css'

const Card = () => {
    return (
        //Aqui debe ir un div, tenia fragment pero se desordenaba el contenido de la tarjeta al duplicarla en CardList
        <div className={styles.container}>
            <h1>Tarjeta</h1>
            <h3>Nombre: Víctor</h3>
            <p>Email: victor@mail.cl</p>
        </div>
    );
}

export default Card;