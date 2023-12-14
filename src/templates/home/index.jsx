import { Component } from 'react';

import './styles.scss';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  componentDidUpdate() {
    console.log('The component has been updated');
  }

  render() {
    const { posts, allPosts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Button
            handleClick={this.loadMorePosts}
            text='Load More Posts'
            disabled={posts.length === allPosts.length}
          />
        </div>
      </section>
    );
  }
}
