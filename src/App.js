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
import Contacts from "./components/pages/Contacts";

const App = () => {
    return (
        <Router>
            <div className='wrap'>
                <Header />
                <Routes>
                    <Route path='/services/:serviceCategory' exact element={<Service />} />
                    <Route path='/' exact element={<Main />} />
                    <Route path='/contacts' exact element={<Contacts />} />
                    <Route path='/services' exact element={<Section3 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App