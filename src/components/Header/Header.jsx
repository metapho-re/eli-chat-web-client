import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './Header.scss';

const Header = ({
    username,
    token,
    isLoading,
    logOut,
}) => (
    <div id="header">
        <p>
            {'Welcome, '}
            {username}
            {'!'}
        </p>
        <Button
            type="button"
            disabled={isLoading}
            onClick={() => logOut(token)}
        >
            Log Out
        </Button>
    </div>
);
Header.propTypes = {
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
};

export default Header;
