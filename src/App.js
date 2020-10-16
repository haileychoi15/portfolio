import React, { Fragment } from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Navigation from './components/Navigation';
import { useMobile } from "./hooks/UseMobile";

function App() {
    const mobile = useMobile();

    return (
        <Fragment>
            <GlobalStyles />
            {!mobile && <Navigation />}
            <Home />
            <About />
            <Portfolio />
        </Fragment>
    );
}

export default App;
