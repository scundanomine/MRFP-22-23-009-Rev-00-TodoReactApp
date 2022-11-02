import React, { Component } from 'react'

class TodosList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const mapItems = this.props.item.map(itm => (
      <>
        <h4 className=''>{itm.sno}</h4>
        <h4 className=''>{itm.title}</h4>
        <h4 className=''>{itm.desc}</h4>
      </>
    ))
    return (
      <div>
        
        {mapItems}
      </div>
    )
  }
}

export default TodosList
