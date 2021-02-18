import React from 'react';
import './custom-button.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`
      ${inverted ? 'inverned' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
