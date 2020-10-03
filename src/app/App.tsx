import * as React from 'react';
import './globalStyle/_reset.scss';
import Store from './store';

import Home from './containers/home';

const App = () => {
    
    return (
        <Store>
            <Home/>
        </Store>
    );
}

export default App;
