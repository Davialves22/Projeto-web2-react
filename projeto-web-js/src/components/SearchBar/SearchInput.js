import React from "react";

export const SearchInput = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <input type="search"
            value={value}
            onChange={handleChange}
        />
    );

}