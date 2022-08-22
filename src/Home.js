import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { loadPosts } from './utils/LoadPosts'
import Button from "./components/Button/index"
import { Posts } from './components/Posts';
import { TextInput } from './components/TextInput'

export const Home = () => {

const [posts, setPosts] = useState([])
const [allPosts, setAllPosts] = useState([])
const [page, setPage] = useState(0)
const [postsPerPage] = useState(1)
const [searchValue, setSearchValue] = useState('')


const handleLoadPosts = useCallback(async (page, postsPerPage) => {
  const postsAndPhotos = await loadPosts();

  setPosts(postsAndPhotos.slice(page, postsPerPage));
  setAllPosts(postsAndPhotos);
}, []);

useEffect(() => {
  handleLoadPosts(0, postsPerPage);
}, [handleLoadPosts, postsPerPage]);

const loadPost = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPage(nextPage)
}

const deleteFirstPost = () => {
  const nextPage = page + postsPerPage
  posts.splice([0],1)

  setPage(nextPage)
}

const deleteLastPost = () => {
  const nextPage = page + postsPerPage
  const arrayLength = posts.length
  console.log(arrayLength)
  posts.splice([arrayLength - 1],1)

  setPage(nextPage)
}

const handleChange = (e) => {
  const { value } = e.target;
  setSearchValue(value);
};

const noMorePosts = page + postsPerPage >= allPosts.length

const filteredPosts = searchValue
    ? posts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  
  return (

    <section className="container">

    <div className="search-container"> 
      <TextInput className="searchFor" value={searchValue} onChange={handleChange} />  
      {!!searchValue && (<h3>Pesquisar por: <span className='searchValue'>{searchValue}</span></h3>)}
     <br/>
    </div>

    <div className="button-container">
      {!searchValue && <Button text="Load Post" onClick={loadPost} disabled={noMorePosts} />}
      {!searchValue && <Button text="Delete First Post" onClick={deleteFirstPost} disabled={noMorePosts} />}
      {!searchValue && <Button text="Delete Last Post" onClick={deleteLastPost} disabled={noMorePosts} />}

      <br/> 
    </div>

    {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

    {filteredPosts.length === 0 && <p>Não existem posts</p>}

   
    </section>
  );
};

export default Home;
