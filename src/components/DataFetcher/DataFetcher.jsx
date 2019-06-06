import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFetcher extends Component {
    componentDidMount() {
        const {
            token,
            username,
            chats,
            fetchUsers,
            fetchMessages,
        } = this.props;
        fetchUsers(token, username);
        if (chats.length !== 0) fetchMessages(token, chats);
    }

    render() {
        return <></>;
    }
}
DataFetcher.propTypes = {
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    chats: PropTypes.arrayOf(PropTypes.string).isRequired,
    fetchUsers: PropTypes.func.isRequired,
    fetchMessages: PropTypes.func.isRequired,
};

export default DataFetcher;
