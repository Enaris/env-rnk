import React from 'react';
import './form-errors.styles.scss';

const FormErrors = ({ errors, containerClass }) => {

  return (
    <div className={ `${containerClass ? containerClass : ''} form-errors` }>
      { errors &&
        <ul className='errors'>
          {
            errors.map(er => 
              <li key={ er }>
                { er }
              </li>
            )
          }
        </ul>
      }
    </div>
  ) 
}

export default FormErrors;