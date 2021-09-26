import { useEffect, useState } from "react";
import Cart from "../cart/cart";

import Place from "../place/place";
import './places.css'



const Places = () => {

    const [cart, setCart] = useState([]);

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('./places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    const clickHandel = (place) => {

        const newCart = [...cart, place];
        setCart(newCart);
    }
    return (
        <div>
            <div className="container">
                <div className="places-container">
                    {
                        places.map(place =>
                            <Place clickHandel={clickHandel} place={place} key={place.id}></Place>
                        )}
                </div>
                <div className="choosed-places">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Places;