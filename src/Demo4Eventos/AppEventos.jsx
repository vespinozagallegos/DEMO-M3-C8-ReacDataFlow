import '../App.css'
import styles from '../App.module.css'
// import View from './View';
import ParentComponent from './ParentComponent';
console.log(styles);

function AppEventos () {
    return (
        <>
            {/* <View/> */}
            <ParentComponent/>
        </>
    )
}

export default AppEventos;
