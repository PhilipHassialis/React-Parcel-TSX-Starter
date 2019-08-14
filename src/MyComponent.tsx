import * as React from "react";
import "./MyComponent.css";

const MyComponent = props => {
    return <div className="MyComponent">Hello {props.name}</div>;
};

export default MyComponent;
