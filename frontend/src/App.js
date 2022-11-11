import React from "react";
// Libraries components
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Own Components
import AppForm from "./components/AppForm/AppForm";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Posts from "./components/Posts/Posts";

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<Posts/>} />
                <Route path="/create" element={<AppForm/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
