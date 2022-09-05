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
import About from "./components/pages/About";

const App = () => {
    return (
        <Router>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/services/:serviceCategory' exact element={<Service/>}/>
                    <Route path='/' exact element={<Main/>}/>
                    <Route path='/about' exact element={<About/>}/>
                    <Route path='/contacts' exact element={<Contacts/>}/>
                    <Route path='/services' exact element={<Section3/>}/>
                    <Route path='*' exact element={ <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', fontSize: '50px'}}>This page does not exist</h1> } />
                </Routes>
            </div>
            <Footer/>
        </Router>
    )
}

export default App