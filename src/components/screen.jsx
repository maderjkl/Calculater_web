import Styles from './screen.module.css'
function Screen({text}) {
    return (
        <div className={Styles.Screen}>
            <input type="text" className={Styles.input} value={text} readOnly/>
        </div>
    );
}
export default Screen