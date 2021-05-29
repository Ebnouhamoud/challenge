import React from 'react'

export default function Button(props) {
  const {handleClick, name, children} = props
  return (
    <div className="Button">
        <button onClick={()=> handleClick()}> 
          <span className='btn-name'>{name}</span>
          <span className='btn-children'>{children}</span>
        </button>
    </div>
  );
};
