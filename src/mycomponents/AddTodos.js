import React, { Component } from 'react'

class AddTodos extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Desc</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodos
