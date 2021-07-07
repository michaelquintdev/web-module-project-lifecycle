import './App.css';
import React from 'react';
import axios from 'axios';
import ProcessUsers from './components/ProcessUsers';

class App extends React.Component{
  state = {
    users: [],
    input: '',
  }

  // Recieving my and followers data.
  componentDidMount() {
    axios.all([
        axios.get('https://api.github.com/users/michaelquintdev'),
        axios.get('https://api.github.com/users/michaelquintdev/followers'),
    ])
    .then(axios.spread((myRes, followersRes) => {
        this.setState({
            users: [myRes.data.login, 
              ...followersRes.data.map((follower) => {
              return follower.login
            })],
            
        })
        console.log('Mine', this.state.users)
    }))
    .catch(error => {
      console.log(error);
    })
  }

  // -----------------------------
  // Event Handlers Below
  // ----------------------------

  changeHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  submit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then(res => {
      this.setState({
        ...this.state,
        users: [...this.state.users, res.data]
      })
      console.log(this.state.users)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Github List of Users</h1>
        <form onSubmit = {this.submit}>
          <input onChange = {this.changeHandler} type = 'text' placeholder = 'Type in a username here'/>
          <button>Add User</button>
        </form>
        <ProcessUsers users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
