// Style
import './FloatButton.css';

const FloatButton = ({ className, state, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={'floatbutton ' + className}>{state}</button>
  );
};

export default FloatButton;