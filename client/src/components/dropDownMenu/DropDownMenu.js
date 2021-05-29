import React, { useEffect, useState, useRef } from 'react'

import Button from '../button/Button'

export default function DropDownMenu(props) {
  const {selectItem, itemsList} = props;
  const [expand, setExpand] = useState(false);
  const wrapperRef = useRef();
  const handleClick = (e) => {
    setExpand(false);
    selectItem(e.target.id);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setExpand(false);
      };
    };
    document.addEventListener('mousedown',handleClickOutside);
    return () => {
      document.removeEventListener('mousedown',handleClickOutside);
    }
  },[]);
  
  return (
    <div className="DropdownMenu-box" ref={wrapperRef}>
      <div className='DropdownMenu'>
        <Button handleClick={() => setExpand(!expand)} name="Items">
          <span className={`caret ${expand? 'open-caret':''}`}></span>
        </Button>
        {expand && <ul onClick={handleClick}>
          {itemsList.map( item => (
            <li key={item} id={item}>{item}</li>
          ))}
        </ul>}
      </div>
    </div>
  );
};
