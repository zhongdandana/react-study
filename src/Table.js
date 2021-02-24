import react, {Component} from 'react'
import './table.css'
const TableHeader=()=>{
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
const TableBody = (props) =>{
  const rows = props.tableData.map((row,index)=>{
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={()=>props.removeTableData(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}
const Table = (props) =>{
  const {tableData,removeTableData} = props
  console.log('removeTableData',removeTableData)
  return (
    <table className="table">
      <TableHeader/>
      <TableBody tableData={tableData} removeTableData={removeTableData}/>
    </table>)
}
export default Table