import React from 'react'

import "./Table.scss"

export default function Table(props) {
  const {headerList, bodyData} = props
  console.log(bodyData)
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headerList && headerList.map(header => (
              <th key={header} >{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData && bodyData.map(row => (
            <tr >
              {Object.values(row).map(item =>(
                 <td key={item}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

