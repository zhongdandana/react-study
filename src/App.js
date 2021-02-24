/* eslint-disable */
import React,{Component} from 'react'
import Table from './Table'
import Form from './Form'
import './App.css'



class App extends Component{
  state = {
    tableData:[
      // {
      //   name:'Charlie',
      //   job:'Janitor'
      // },
      // {
      //   name:'MAc',
      //   job:'Bouncer'
      // },
      // {
      //   name:'Dee',
      //   job:'Aspring actress'
      // },
      // {
      //   name:'DEnnis',
      //   job:'Bartender'
      // }
    ]
  }
  removeTableData = (index) =>{
    const {tableData} = this.state
    this.setState({
      tableData:tableData.filter((item,i)=>{
        return i !==index
      })
    })
  }
  handleSubmit = (formData)=>{
    this.setState({tableData:[...this.state.tableData,formData]})
  }
  render(){
    const {tableData} =  this.state     
    return <div className="App">
       <h1>hello,React!</h1>
       <div className="container">
        <Table tableData={tableData} removeTableData={this.removeTableData}/>
        <Form handleSubmit={this.handleSubmit}/>
       </div>
    </div>
  }
}

export default App