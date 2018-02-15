import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SearchButton = props => (
    <div>
        <button className="btn btn-primary">Search</button>
    </div>
);

export default SearchButton;