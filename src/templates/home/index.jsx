import { useEffect, useState, useCallback } from 'react';

import './styles.scss';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import { Loader } from '../../components/Loader';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredPosts = searchValue
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

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
              handleInputChange={handleInputChange}
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
                handleClick={loadMorePosts}
                text='Load More Posts'
                disabled={posts.length === allPosts.length}
              />
            )}
          </div>
        </>
      )}
    </section>
  );
};
