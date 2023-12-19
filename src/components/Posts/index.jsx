import PropTypes from 'prop-types';

import { PostCard } from '../PostCard';

import './styles.scss';

export const Posts = ({ posts = [] }) => {
  return (
    <div className='posts'>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};
