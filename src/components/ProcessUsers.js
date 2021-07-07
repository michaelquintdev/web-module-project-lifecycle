import React from 'react';
import axios from 'axios';
import User from './User'

class ProcessUsers extends React.Component {
    state = {
        userData: []
    }
    componentDidMount() {
        this.props.users.forEach((user) => {
            axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
                this.setState({
                    userData: res.data,
                })
                console.log('AYOOOOOO', this.state.userData)
            })
            .catch((error) => {
                console.log(error);
            })
        })
    }
    render(){
        return (
            <div>
                {this.state.userData.map((user) => {
                    return <User userData = {user}/>
                })}
            </div>
        );
    }
}
export default ProcessUsers