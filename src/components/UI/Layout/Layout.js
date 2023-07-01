import React from "react";
export default function Layout(props) {
  return (
    <div className="App">
      <div className="App-header">
        <div className="main">{props.children}</div>
      </div>
    </div>
  );
}
