import '../styles/ClearButton.css';

const ClearButton = (props) => (
    <button className="clear-button" onClick={props.handleClear}>
        Clear
    </button>
);

export default ClearButton;