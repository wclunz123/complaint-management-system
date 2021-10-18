import React from 'react';

import './Button.css';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} `}
        href={props.href}
        download={props.file}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={`button button--${props.size || 'default'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
