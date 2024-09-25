
import Styles from './Buttonele.module.css'
function Buttonele({ value,onButtonclick}) {
    return (
        <button className={Styles.button} onClick={()=>onButtonclick(value)}>
            {value}
        </button>
    );
}

export default Buttonele;
