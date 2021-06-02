import './App.css';
import React, {useEffect} from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    username: '',
    login: '',
    followers: '',
    repos: '',
    picture: '',
    error: '',
    url: '',
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      console.log(res);
      this.setState({
        login: res.data.login,
        followers: res.data.followers,
        picture: res.data.avatar_url,
        repos: res.data.public_repos,
        url: res.data.html_url,
      })
    })
    .catch(err => {
      this.setState({
        error: err,
      })
    })
  }
  
function headline(){
    if(this.state.username === ''){
      return null
    }else{
      return this.state.username + ':' + this.state.url
    }
  }

  render(){
    return (
      <div className="App">
        <h1>GitHub Search</h1>
        <form onSubmit = {this.handleSubmit}>
          <input value = {this.state.username} placeholder = 'Type in a username' onChange = {this.handleChange}/>
          <button>Search Github</button>
        </form>
        <div>
          <h2>{this.state.name}</h2>
          <h3>
            {headline()}
          </h3>
          <h4>Followers: {this.state.followers}</h4>
          <img src = {this.state.picture}/>
        </div>
      </div>
    );
  }
}
export default App;
