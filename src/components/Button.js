import '../styles/Button.css';

const Button = (props) => {

    const isOperator = val => {
        return isNaN(val) && (val !== '=') && (val !== '.');
    }

  return (
    <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
  );
}

export default Button;