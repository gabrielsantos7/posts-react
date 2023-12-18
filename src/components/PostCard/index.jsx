import './styles.scss';

export const PostCard = ({ id, image, title, body }) => {
  return (
    <div className='post' data-testid='post-card' key={id}>
      <img src={image} alt={title} />
      <div className='post-content'>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
