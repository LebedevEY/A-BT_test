import './App.css';
import {Select} from "./components/Select";
import React, {useState} from "react";
import {Animal} from "./components/Animal";
import animals from "./data.json";


function App() {
    const [animal, setAnimal] = useState(null);
    const names = [];
    const text_value = React.createRef()
    animals.map((animal) => {names.push(animal.name)})

    function getAnimal() {
        if (text_value.current.value !== "") {
            setAnimal(animals.filter(item => item.name === text_value.current.value));
        }
    }

    return (
        <>
        <Select
            options={names}
            callback={getAnimal}
            ref={text_value}
        />
        <Animal
        animal={animal}
        />
        </>
    )
}

export default App;
