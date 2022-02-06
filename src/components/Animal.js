import React from "react";

export function Animal({animal}) {
    if (animal != null){
        return (
            <div className="animal_info">
                <h2>Name: {animal[0].name}</h2>
                <p >Type: {animal[0].type}</p>
                <p>Age: {animal[0].age}</p>
                <p>Gender: {animal[0].gender}</p>
            </div>
        )
    }
    return (
        <p className="chose_text">Chose an animal</p>
    )
}