import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyComponent from "./MyComponent";

export default function App() {
    return (
        <div className="App">
            <MyComponent name="Philip" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
