import React, { Fragment } from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Aside from './components/Aside';
import { useMobile } from "./hooks/UseMobile";

function App() {
    const mobile = useMobile();
    return (
        <Fragment>
            <GlobalStyles />
            <div>
                {!mobile && <Aside />}
                <Home />
                <About />
                <Portfolio />
            </div>
        </Fragment>
    );
}

export default App;
