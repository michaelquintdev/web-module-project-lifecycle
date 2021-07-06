import React from 'react';
import axios from 'axios';

class BaseUsers extends React.Component{

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

    render(){
        return (
            <div>
                
            </div>
        );
    }
}
export default BaseUsers