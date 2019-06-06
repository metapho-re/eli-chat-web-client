import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import AuthenticateButton from './AuthenticateButton';
import './Authenticate.scss';

const Authenticate = ({
    socketId,
    usernameValue,
    passwordValue,
    isLoadingLogIn,
    isLoadingSignUp,
    errorMessage,
    logIn,
    signUp,
    handleUsernameChange,
    handlePasswordChange,
}) => (
    <div id="authPage">
        <div id="authBlock">
            <h1>Eli Chat</h1>
            <Form>
                <Form.Group controlId="usernameValue">
                    <Form.Control
                        type="text"
                        placeholder="username"
                        value={usernameValue}
                        onChange={e => handleUsernameChange(e.currentTarget.value)}
                    />
                </Form.Group>
                <Form.Group controlId="passwordValue">
                    <Form.Control
                        type="password"
                        placeholder="password"
                        value={passwordValue}
                        onChange={e => handlePasswordChange(e.currentTarget.value)}
                    />
                </Form.Group>
                <AuthenticateButton
                    disabled={
                        (usernameValue.length === 0)
                        || (passwordValue.length === 0)
                        || isLoadingSignUp
                    }
                    isLoading={isLoadingLogIn}
                    text="Log In"
                    onClick={() => logIn(
                        { username: usernameValue, password: passwordValue, socketId },
                    )}
                />
                <AuthenticateButton
                    disabled={
                        (usernameValue.length === 0)
                        || (passwordValue.length === 0)
                        || isLoadingLogIn
                    }
                    isLoading={isLoadingSignUp}
                    text="Sign Up"
                    onClick={() => signUp(
                        { username: usernameValue, password: passwordValue, socketId },
                    )}
                />
            </Form>
            <p className="errorMessage">{errorMessage}</p>
        </div>
    </div>
);
Authenticate.propTypes = {
    socketId: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    isLoadingLogIn: PropTypes.bool.isRequired,
    isLoadingSignUp: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    logIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
};

export default Authenticate;
