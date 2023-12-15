import { Component } from 'react';

import './styles.scss';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import { Loader } from '../../components/Loader';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: '',
    isLoading: true,
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
      isLoading: false,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  componentDidUpdate() {
    console.log('The component has been updated');
  }

  render() {
    const { isLoading, posts, allPosts, searchValue } = this.state;
    const filteredPosts = searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : posts;

    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <>
            <div className='input-container'>
              <SearchInput
                searchValue={searchValue}
                handleInputChange={this.handleInputChange}
              />

              {!!searchValue && <p>Searching by: {searchValue}</p>}
            </div>

            {filteredPosts.length > 0 ? (
              <Posts posts={filteredPosts} />
            ) : (
              <h2 className='not-found'>No posts found</h2>
            )}

            <div className='button-container'>
              {!searchValue && (
                <Button
                  handleClick={this.loadMorePosts}
                  text='Load More Posts'
                  disabled={posts.length === allPosts.length}
                />
              )}
            </div>
          </>
        )}
      </section>
    );
  }
}
