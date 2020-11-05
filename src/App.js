import React, {Fragment, useContext, useState} from 'react';
import GlobalStyles from "./components/GlobalStyles";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Navigation from './components/Navigation';
import { useMobile } from "./hooks/UseMobile";
import {NavContext} from "./Context";

function App() {
    const mobile = useMobile();
    const mainColor = '#4fc08d';
    //const mainColor = '#ff922b';
    //const [navItems, setNavItems] = useState(useContext(NavContext));
    return (
        <Fragment>
            <GlobalStyles />
            {/*<NavContext.Provider value={[navItems, setNavItems]}>
                <>*/}
                    {!mobile && <Navigation mainColor={mainColor} />}
                    <div style={{overflow: 'hidden'}}>
                        <Home mainColor={mainColor} />
                        <About mainColor={mainColor} />
                        <Portfolio mainColor={mainColor} />
                    </div>
               {/* </>
            </NavContext.Provider>*/}
        </Fragment>

    );
}

export default App;
