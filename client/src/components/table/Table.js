import React from 'react'

export default function Table(props) {
  const {headerList, bodyData} = props
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {headerList && headerList.map(header => (
              <th key={header} >{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData && bodyData.map((row,i) => (
            <tr key={i}>
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

