import React, { Fragment } from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Home';
import Aside from './components/Aside';
import About from './components/About';
import Portpolio from "./components/Portpolio";
import Contact from "./components/Contact";

function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <div>
                {/*<Aside />*/}
                <Home />
                <About />
                <Portpolio />
                <Contact />
            </div>
        </Fragment>
    );
}

export default App;
