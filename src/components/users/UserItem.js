import React, { Component } from 'react';

class UserItem extends Component {

    state = {
        id: 'id',
        login: 'evanphx',
        avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
        html_url: 'https://github.com/evanphx'

    }

    render() {

        const {login,avatar_url,html_url} = this.state;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="img" className="round-img" style={{width: '80px'}} />
                <h3>{this.state.login}</h3>
                <a href={this.state.html_url} className="btn btn-primary2 btn-sm my-1">More</a>
            </div>
        )
    }
}

export default UserItem;
