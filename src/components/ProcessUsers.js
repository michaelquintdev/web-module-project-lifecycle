import React from 'react';
import axios from 'axios';

class ProcessUsers extends React.Component {
    state = {userData: []}
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
            <div>
                
            </div>
        );
    }
}
export default ProcessUsers