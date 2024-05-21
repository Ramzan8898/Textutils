import './App.css';
import Form from './components/Form';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
// } from "react-router-dom";

function App() {
    const handleDarkMode = () => {
        if (darkMode === 'dark') {
            setDarkMode('light');
            setModetText('Dark Mode');
            document.body.style.color = 'black';
            document.body.style.backgroundColor = 'white'
        }
        if (darkMode === 'light') {
            setDarkMode('dark');
            setModetText('Light Mode');
            document.body.style.color = '#FF204E';
            document.body.style.backgroundColor = '#240750'

        }
    }

    function handletoFullScreen() {
        setScreen({
            position: 'absolute',
            left: "0px",
            top: '0px',
            right: '0px',
            padding: '20px'
        });
        document.body.querySelector('#main-nav').style.display = 'none';

    }
    function handletoSmallScreen() {
        setScreen({
            width: "auto"
        });
        document.body.querySelector('#main-nav').style.display = 'block';

    }


    const [modetText, setModetText] = useState('Dark Mode');
    const [darkMode, setDarkMode] = useState('light');
    const [screen, setScreen] = useState({ width: 'auto' });
    return (
        // <Router>
            <div>
                <Navbar title="TextUtils" mode={darkMode} toggleMode={handleDarkMode} modeText={modetText} />
                <Form title="Enter Your Text Below" view={screen} smallScreen={handletoSmallScreen} fullScreen={handletoFullScreen} />
            </div>
        //     <Routes>
        //         <Route exact path='/' element={<Form title="Enter Your Text Below" view={screen} smallScreen={handletoSmallScreen} fullScreen={handletoFullScreen} />} />
        //         <Route exact path='/about' element={<About />} />
        //     </Routes>
        // </Router>
    );
}

export default App;
