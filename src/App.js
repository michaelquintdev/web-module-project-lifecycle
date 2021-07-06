import './App.css';
import React from 'react';
import axios from 'axios';
import BaseUsers from './components/BaseUsers';

class App extends React.Component{
  state = {
    users: [],
    input: '',
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/michaelquintdev')
    .then((res) => {
      this.setState({
        ...this.state,
        users: [...this.state.users, res.data]
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  // Event Handlers
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
        <BaseUsers users = {this.props.users}/>
      </div>
    );
  }
}

export default App;
