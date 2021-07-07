import React from 'react';
import axios from 'axios';

class ProcessUsers extends React.Component {
    state = {userData: {}}
    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user}`)
            .then((res) => {
                this.setState({
                    userData: res.data,
                })
                console.log('AYOOOOOO', this.state.userData)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render(){
        return (
            <div className = 'card'>
                <div className = 'left-side'>
                    <h2>{this.state.userData.name}</h2>
                    <img src = {this.state.userData.avatar_url} alt = {`Profile of ${this.state.userData.login}`}/>
                </div>
                <div className = 'right-side'>
                    <h3>{this.state.userData.login}</h3>
                    <p>{this.state.userData.bio}</p>
                    <p>Number of repos: {this.state.userData.public_repos}</p>
                    <p>Location: {this.state.userData.location}</p>
                    <p>Hireable: {(this.state.userData.hireable) ? 'Yes' : 'No'}</p>
                </div>                      
            </div>
        );
    }
}
export default ProcessUsers