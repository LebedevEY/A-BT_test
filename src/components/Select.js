import React from "react";

export const Select = React.forwardRef(({options, callback}, text_value) => {

    return (
        <div className="select">
            <input className="select_input" list="animals" ref={text_value} type="text"/>
            <datalist id="animals">
                {options.map((item) => (
                    <option key={options.indexOf(item)} value={item}>{item}</option>
                ))}
            </datalist>
            <button className="select_button" onClick={callback}>Submit</button>
        </div>
    );
})