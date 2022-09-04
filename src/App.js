import React from 'react'
import './styles/main.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Service from "./components/pages/Service";
import Section3 from "./components/Section3";

const App = () => {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path='/services/:serviceCategory' exact element={<Service />} />
                    <Route path='/' exact element={<Main />} />
                </Routes>
            <Footer />
        </Router>
    )
}

export default App