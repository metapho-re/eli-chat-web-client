import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const AuthenticateButton = ({
    disabled,
    isLoading,
    text,
    onClick,
}) => {
    if (isLoading) {
        return (
            <Button disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                />
            </Button>
        );
    }
    return (
        <Button
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};
AuthenticateButton.propTypes = {
    disabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default AuthenticateButton;
