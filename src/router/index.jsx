import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Gallery from "../components/Gallery.jsx"
import FlowerPage from "../components/FlowerPage.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <Gallery />,
    },
    {
        path: "/flowers/:id",
        element: <FlowerPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);

// function App() {
//     return <RouterProvider router={router} />;
// }

// ReactDOM.render(<App />, document.getElementById("root"));