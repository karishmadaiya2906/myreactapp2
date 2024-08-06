import React, { Component } from 'react'
import './../Styles/life.css'
import Layout from './../Components/Layout/Layout'
 class Appp extends Component {

  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }
 increment=()=>{
  this.setState((prevState)=>({
    count:prevState.count+1
  }))
 }

 decrement=()=>{
  this.setState((prevState)=>({
    count:prevState.count-1
  }))
 }
  render() {
    return (
      <>
      <div className='id'> 
      <p> Count{this.state.count}</p>
      <button onClick={this.increment}>incre</button>
      <button onClick={this.decrement}>dec</button>
      </div>
     

      <Layout/>

      </>
    )
  }
}

export default Appp