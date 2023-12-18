import { render, screen } from '@testing-library/react';
import { Loader } from '.';

describe('<Loader />', () => {
  it('renders loader component properly', () => {
    render(<Loader />);

    const loaderDiv = screen.getByTestId('loader');
    const loadingText = screen.getByText('Loading...');

    expect(loaderDiv).toBeInTheDocument();
    expect(loadingText).toBeInTheDocument();
  });
});
