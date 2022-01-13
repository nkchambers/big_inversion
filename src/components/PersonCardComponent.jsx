import React, {Component} from "react";

const PersonCardComponent = props => {
    /*constructor(firstName, lastName, age, hairColor) {
        super(firstName, lastName, age, hairColor)
        console.log(this);
    }*/

        return (
            <fieldset>
                <legend>PersonCardComponent.jsx</legend>
                <div>
                    <h1>{ props.lastName },  { props.firstName }</h1>
                    <h3>Age: { props.age }</h3>
                    <h3>Hair Color: { props.hairColor }</h3>
                </div>
            </fieldset>
        );
}

export default PersonCardComponent;
