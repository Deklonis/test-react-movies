import React from "react";
import { Movies } from "./components/Movies";
import { Preloader } from "./components/Preloader";
import { Search } from "./components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
  state = {
    movies: [],
    loading: true,
  }
  
  searchMovies = (str, type) => {
    this.setState({loading: true})
    if (type === 'all') {
      fetch(`https://www.omdbapi.com/?&s=${str}&apikey=${API_KEY}&type=`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}, () => {console.log(this.state.movies)}))
    } else {
      fetch(`https://www.omdbapi.com/?&s=${str}&apikey=${API_KEY}&type=${type}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}, () => {console.log(this.state.movies)}))
    }
    
  }
  componentDidMount() {
    fetch(`https://www.omdbapi.com/?&s=matrix&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}, () => {console.log(this.state.movies)}))
  }
  
  render() {
    return <main className="content">
      <Search searchMovies={this.searchMovies}/>
      {
        this.state.loading ? (<Preloader  />) : (<Movies movies={this.state.movies}/>)
      }
      
    </main>
  }
}

