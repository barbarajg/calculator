import '../styles/ClearButton.css';

const ClearButton = (props) => (
    <div className="clear-button" onClick={props.handleClear}>
        Clear
    </div>
);

export default ClearButton;