
import styles from "./styles.module.css"
import PropTypes from 'prop-types';

export const Button = ({titulo , onClick}) => {
    return ( <button style={styles.button}
     onClick={onClick}>
        {titulo}
    </button>
    );
};

Button.propTypes = {
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  export default Button;

