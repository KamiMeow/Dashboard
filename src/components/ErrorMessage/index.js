import React from 'react';
import './index.css';

const ErrorMessage = ({ error, border }) => (
  <div className={`error-message ${border && currentBorder(border)}`}>
    {error && 
    (
      <div className="error-message__content">
        {error}
      </div>
    )}
  </div>
);

function currentBorder(border) {
  return 'error-message--border-' + border
}

export default ErrorMessage;
