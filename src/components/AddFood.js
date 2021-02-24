import React, { Component } from 'react'

class AddFood extends Component {
    render() {
        const {onAdd} = this.props
        return (
            <form onSubmit={onAdd}>
                <input name="name" type="text" placeholder="Enter Name"/>
                <input name="calories" type="Number" placeholder="Enter calories"/>
                <button type="submit">Add food</button>
            </form>
        )
    }
}

export default AddFood
