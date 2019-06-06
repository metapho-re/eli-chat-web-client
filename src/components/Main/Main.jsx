import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Authenticate from '../Authenticate/AuthenticateContainer';
import DashBoard from '../DashBoard/DashBoard';
import './Main.scss';

const Main = ({
    isAuthenticated,
    username,
}) => {
    useEffect(() => {
        if (isAuthenticated) document.title += ` - ${username}`;
        else document.title = 'Eli Chat';
    });
    return (
        isAuthenticated ? <DashBoard /> : <Authenticate />
    );
};
Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
};

export default Main;
