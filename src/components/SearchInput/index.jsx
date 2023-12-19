import PropTypes from 'prop-types';

import './styles.scss';

export const SearchInput = ({ searchValue, handleInputChange }) => {
  return (
    <input
      type='search'
      placeholder='Search for the title of a post...'
      value={searchValue}
      onChange={(e) => handleInputChange(e)}
    />
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
