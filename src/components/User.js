import React from 'react'

class User extends React.Component {
    componentDidMount(){
        console.log('HEYOOOO', this.props.userData.login)
    }
    render() {
        return (
            <div>
                <h1>{this.props.userData.login}</h1>
            </div>
        )
    }
}
export default User;