import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/LoadPosts'
import Button from "./components/Button/index"
import { Posts } from './components/Posts';
import { TextInput } from './components/TextInput'

class App extends Component {

//estado da página
state = {
  posts: [],
  allPosts: [],
  page: 0,
  postsPerPage: 2,
  searchValue: ''
}

componentDidMount() {
  this.loadPosts()
}

loadPosts = async () => {
  const postsAndPhotos = await loadPosts();
  const { page, postsPerPage } = this.state;

  this.setState({ 
    posts: postsAndPhotos.slice(page, postsPerPage),
    allPosts: postsAndPhotos,
  })
}

loadMorePosts = () => {
  const {
    page, postsPerPage, allPosts, posts
  } = this.state;
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage });
}

handleChange = (e) => {
  const { value } = e.target;
  this.setState({ searchValue: value });
}

  render() {
    const {posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase()
      );
    }) : posts;

  return (
    <section className="container">

     <TextInput className="searchFor" searchValue={searchValue} handleChange={this.handleChange}/>  

     <input 
      className="searchFor"
      onChange={this.handleChange}
      value={searchValue}
      type="search" 
    />  

      {!!searchValue && (

        <h3>Pesquisar por: <span className='searchValue'>{searchValue}</span></h3>

      )}

     <br/><br/> 

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <h1>Não existem posts com a palavra {searchValue}</h1>
        )}

      {!searchValue && (
        <Button text="load more posts" onClick={this.loadMorePosts}></Button>
      )}
  
    </section>

    );
  }
}


export default App;
