import React from 'react';
import Header from './Header';
import axios from 'axios';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

export default HeaderContainer;