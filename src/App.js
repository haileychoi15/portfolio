import React, { Fragment } from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <div>
                <Home />
                <About />
                <Portfolio />
            </div>
        </Fragment>
    );
}

export default App;
