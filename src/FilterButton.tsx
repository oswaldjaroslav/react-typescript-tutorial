import React from "react";

const FilterButton = ({ name, isPressed, setFilter }: any) => {
  return (
    <button
      type="button"
      style={{
        margin: 7,
        padding: 5,
        borderRadius: 5,
        background: isPressed ? "lightgrey" : "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
};

export default FilterButton;
