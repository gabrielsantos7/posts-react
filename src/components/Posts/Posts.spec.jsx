import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import { postsMock } from './mock';

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts posts={postsMock} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);

    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);

    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });
});
