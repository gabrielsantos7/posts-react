import './styles.scss';

export const Button = ({ handleClick, text, disabled }) => {
  return (
    <button className='button' onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};
