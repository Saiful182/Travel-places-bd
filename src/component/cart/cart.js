import React from 'react';
import { createElement } from 'react';
import Name from '../name/name';
import './cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;

    for (const place of cart) {
        totalPrice = totalPrice + place.budget
    }





    return (
        <div>
            <h3>Pakage Number: {cart.length}</h3>
            <h3>Total Cost: {totalPrice}</h3>

            {
                cart.map(place => <Name key={place.id} place={place}></Name>)
            }

        </div>
    );
};

export default Cart;