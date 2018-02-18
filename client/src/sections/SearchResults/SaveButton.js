import React from "react";

export const SaveButton = props =>
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-default">
        {props.children}
    </button>;