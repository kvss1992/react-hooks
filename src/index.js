import React from "react";
import ReactDOM from "react-dom";
// import Usage from "./state";
// import RefactorState from "./refactorState";
// import Effect from "./effect";
// import BoardGame from "./boardGame";
import ApiHelper from "./effectWithApi";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<ApiHelper />, rootElement);
