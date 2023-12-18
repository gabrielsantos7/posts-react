import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    // PostCard
    expect(screen.getByTestId('post-card')).toBeInTheDocument();

    // Post Image
    const imageElement = screen.getByAltText(props.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', props.image);

    // Post Title
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Post Body
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<PostCard {...props} />);
  });
});
