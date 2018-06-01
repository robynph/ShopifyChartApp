import React from 'react';

export default function Table(props){
  return(
    <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>
            Price
          </th>
          <th>%/hour</th>
          <th>%/day</th>
          <th>%/week</th>
        </tr>
      </thead>

      <tbody>
        {
          props.data.map((row ,index)=> (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>{row.name}</td>
              <td>{row.symbol}</td>
              <td>{row.price_usd}</td>
              <td>{row.percent_change_1h}</td>
              <td>{row.percent_change_24h}</td>
              <td>{row.percent_change_7d}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

    </div>
  )
}
