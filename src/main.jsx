import React from "react";
import ReactDOM from "react-dom/client";

import App from './App'
import './styles/globals.css'; // this starts the problem

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
