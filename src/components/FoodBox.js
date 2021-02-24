import React, {useState} from 'react'


function FoodBox(props) {
    const [quantity, updateQuantity] = useState(1)

    const handleQuantity = (event) => {
        updateQuantity(event.target.value)
    }

    const {food, onAdd} = props
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input onChange={handleQuantity} className="input" type="number" value={quantity} />
                    </div>
                    <div className="control">
                    <button onClick={() => onAdd(food, quantity)} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}
export default FoodBox
