import React, { Fragment } from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Header from './components/Header';
import Me from './components/Me';
import Aside from './components/Aside';
import Skills from './components/Skills';
import Portpolio from "./components/Portpolio";
import Contact from "./components/Contact";

function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <div>
                <Header />
                <Aside />
                <Me />
                <Skills />
                <Portpolio />
                <Contact />
            </div>
        </Fragment>
    );
}

export default App;
