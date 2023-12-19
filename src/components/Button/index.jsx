import PropTypes from 'prop-types';
import './styles.scss';

export const Button = ({ handleClick, text, disabled = false }) => {
  return (
    <button className='button' onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
