import React, { useState, useEffect } from 'react'

import 'DropDownMenu.scss'
export default function DropDownMenu(props) {
  const {selectItem, itemsList} = props;
  const [expand, setExpand] = useState(false)
  const handleClick = (e) => {
    setExpand(false)
    selectItem(e.target.id)
  }
  
  return (
    <div className="DropdownMenu-box">
      <div className='DropdownMenu'>
        <div >
          <button onClick={()=> setExpand(!expand)}> Item </button>
        </div>

        {expand && <ul onClick={handleClick}>
          {itemsList.map( item => (
            <li key={item} id={item}>{item}</li>
          ))}
        </ul>}
      </div>
    </div>
  )
}
