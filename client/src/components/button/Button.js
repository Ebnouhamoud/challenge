import React from 'react'

import './Button.scss'

export default function Button({handleClick,name, children}) {
  // console.log('hi llre')
  return (
    <div className="Button">
        <button onClick={()=> handleClick()}> 
          <span className='btn-name'>{name}</span>
          <span className='btn-children'>{children}</span>
        </button>
    </div>
  );
};
