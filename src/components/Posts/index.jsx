import { PostCard } from '../PostCard';

import './styles.scss';

export const Posts = ({ posts }) => {
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