import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationContext = React.createContext({
    isConfirmed: false,
    setIsConfirmed: () => { },
});

export const ConfirmationProvider = ({ children }) => {
    const [isConfirmed, setIsConfirmed] = React.useState(false);

    return (
        <ConfirmationContext.Provider value={{ isConfirmed, setIsConfirmed }}>
            {children}
        </ConfirmationContext.Provider>
    );
};

ConfirmationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ConfirmationContext;