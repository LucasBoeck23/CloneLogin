
import styles from "./styles.module.css"

export const Input = ({...rest}) => {
    return <input style={styles.Input}{...rest} >
    </input>
};

export default Input;