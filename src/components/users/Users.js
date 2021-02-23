import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component {

    state = {
        users: [
            {
                id: '1',
                login: 'evanphx',
                avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
                html_url: 'https://github.com/evanphx'
            },

            {
                id: '2',
                login: 'vanpelt',
                avatar_url: 'https://avatars.githubusercontent.com/u/17?v=4',
                html_url: 'https://github.com/vanpelt'
            },
            
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem'
}

export default Users;
