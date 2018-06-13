import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const App = () => (
    <div>
        <div className="main">
            <Nav/>   
            <div className="container">
                <br/>
                <Main/>
                <br/>
            </div>
        </div>
        <Footer/>
    </div>
);

export default App;
