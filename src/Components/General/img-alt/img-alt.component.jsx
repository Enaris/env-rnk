import React from 'react';

import './img-alt.styles.scss';

const ImgAlt = ({ containerClass, wordSpacing="1", label = 'NO IMAGE' }) => {

  return (
    <div className={`${containerClass ? containerClass : ''} img-alt`}>
      <div className='alt-label' style={{ wordSpacing: wordSpacing }}>
        { label }
      </div>
    </div>
  )

}

export default ImgAlt;