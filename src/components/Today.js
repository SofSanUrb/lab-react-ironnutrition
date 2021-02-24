import React, { Component } from 'react'

class Today extends Component {
    render() {
        const {items, onDelete} = this.props

        let total = items.reduce((acc, elem) => {
            return elem.calories + acc
        }, 0)
        
        return (
            <div>
                <h1>Today's foods</h1>
                <ul>
                    {
                        items.map((item, index) => {
                            return <div>
                                        <li key={index}>{item.quantity} {item.name} = {item.calories}</li>
                                        <button onClick={() => {onDelete(index)}}>Delete</button>
                                    </div>

                        })
                    }
                </ul>
                <h2>Total: {total} cal</h2>
            </div>
        )
    }
}

export default Today
