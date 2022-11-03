import React, { Component } from 'react'
import AddTodos from './AddTodos'

class TodosList extends Component {
constructor(props) {
  super(props)  
  this.state = {
    items:[
      {
        title: "Go to the market",
        desc: "You need to go the market to get job done."
      },
      {
        title: "Go to the Shopping",
        desc: "You need to go the Shopping mall to get job done."
      },
      {
        title: "Go to the Gym",
        desc: "You need to go the Gym for fitness."
      }
    ],
    flag:true
  }
}

onDelete(itm){
  let preItems=this.state.items
  let index=preItems.indexOf(itm)
  preItems.splice(index,1)
  
  if(this.state.items.length===0)
    this.setState({flag:false})
  else
    this.setState({items:preItems})

}

addTodosItem(titleA, descA){
  let nextItemx = this.state.items
  nextItemx.splice(0, 0, {title:titleA, desc:descA})
  this.setState({items:nextItemx})
  console.log("**************", titleA, "+++++++++++++++++", descA )
}

  render() {

    const mapItems = this.state.items.map((itm,index) => (
    <>
    <h4 className=''>{index+1}</h4>
         <h4 className=''>{itm.title}</h4>
         <p className=''>{itm.desc}</p>
         <button type="button" class="btn btn-primary" onClick={() => this.onDelete(itm)}>Delete {index+1}</button>
    </>))

    return (
      <div className='m-3'> 
        <h3 className='text-center'>My Todos List</h3> 
        <hr />
        <AddTodos addTodosItm={this.addTodosItem.bind(this)}></AddTodos>
        <hr />
        {mapItems}
        {this.state.flag?"No item left in todos.":""}
        <hr />
        
        <br />
        {/* <button type="button" class="btn btn-success" onClick={() => this.onAdd(itm)}>Add Todo</button> */}
      </div>
    )
  }
}

export default TodosList
