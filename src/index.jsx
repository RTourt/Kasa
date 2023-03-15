import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// affichage du composant App dans l'élément DOM ayant l'ID "root".
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
