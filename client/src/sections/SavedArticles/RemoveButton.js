import React from "react";

export const RemoveButton = props =>
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-primary">
        {props.children}
    </button>;
