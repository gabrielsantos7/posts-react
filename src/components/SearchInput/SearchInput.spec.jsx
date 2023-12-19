import { render, screen } from '@testing-library/react';
import { SearchInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<SearchInput />', () => {
  it('should have a value of SearchValue', () => {
    const fn = jest.fn();
    render(<SearchInput handleInputChange={fn} searchValue={'Testing...'} />);

    const input = screen.getByPlaceholderText(
      /search for the title of a post/i,
    );
    expect(input.value).toBe('Testing...');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleInputChange={fn} />);

    const input = screen.getByPlaceholderText(
      /search for the title of a post/i,
    );
    expect(input).toBeInTheDocument();

    const value = 'A dummy value';
    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
