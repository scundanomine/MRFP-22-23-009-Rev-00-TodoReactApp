import React, { Component } from 'react'

class AddTodos extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         titleVaule:"",
         descValue:""
      }
    }

    updateValue = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    summitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.titleVaule, "  aaaaaaaaaaaaaaaaa   " , this.state.descValue)
        this.props.addTodosItm(this.state.titleVaule, this.state.descValue)
        e.target.value="";
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.summitHandler}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input name="titleVaule" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" onChange={this.updateValue}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Desc</label>
                        <input name='descValue' type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" onChange={this.updateValue}/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodos