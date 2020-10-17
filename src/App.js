import React, { Fragment } from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Navigation from './components/Navigation';
import { useMobile } from "./hooks/UseMobile";

function App() {
    const mobile = useMobile();
    const mainColor = '#4fc08d';
    //const mainColor = '#ff922b';
    return (
        <Fragment>
            <GlobalStyles />
            {!mobile && <Navigation mainColor={mainColor} />}
            <div style={{overflow: 'hidden'}}>
                <Home mainColor={mainColor} />
                <About mainColor={mainColor} />
                <Portfolio mainColor={mainColor} />
            </div>
        </Fragment>

    );
}

export default App;
