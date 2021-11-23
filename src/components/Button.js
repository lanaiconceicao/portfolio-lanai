import React from 'react';

function Button({ icon, link, className, id }) {
  return (
    <label htmlFor={ id } className={`${ id }-label`}>
      <a href={ link } target="_blank" rel="noreferrer">
        <button
          id={ id }
          type="button"
          name={ id }
          className={ className }
        >
          { icon }
          { id }
        </button>
      </a>
    </label>
  );
}

export default Button;
