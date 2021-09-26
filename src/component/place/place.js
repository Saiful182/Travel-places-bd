import React from 'react';
import './place.css';


const Place = (props) => {

    const { budget, name, days, city, image, rating } = props.place;
    return (
        <div>
            <div className="place-card">
                <img class="place-img" src={image} alt="" />
                <h4>Place Name: {name}</h4>
                <h4>City Name: {city}</h4>
                <h4>Stay: {days} days</h4>
                <h4>rating: {rating} </h4>
                <h3>Pakage Price: {budget} Taka</h3>
                <button onClick={() => props.clickHandel(props.place)} className="place-button">Select this pakage</button>

            </div>
        </div>
    );
};

export default Place;