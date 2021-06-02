import './App.css';
import React, {useEffect} from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    username: '',
    login: '',
    name: '',
    followers: '',
    picture: '',
    error: '',
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
        name: res.data.name,
        followers: res.data.followers,
        picture: res.data.avatar_url,
      })
    })
    .catch(err => {
      this.setState({
        error: err,
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>GitHub Search</h1>
        <form onSubmit = {this.handleSubmit}>
          <input value = {this.state.username} onChange = {this.handleChange}/>
          <button>Search Github</button>
        </form>
        <div>
          <h2>{this.name}</h2>
          <h3>{this.login}</h3>
          <h4>Followers: {this.followers}</h4>
          <img src = {this.picture}/>
        </div>
      </div>
    );
  }
}
export default App;
