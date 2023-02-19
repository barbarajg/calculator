import '../styles/Button.css';

const Button = (props) => {

    const isOperator = val => {
        return isNaN(val) && (val !== '=') && (val !== '.');
    }

  return (
    <button 
      className={`button-container ${isOperator(props.children) 
        ? 'operator' 
        : ''}`} 
        onClick={() => props.handleClick(props.children)}>
        {props.children}
    </button>
  );
}

export default Button;