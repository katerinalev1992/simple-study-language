import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from "react-router-dom";
import App from './components/app/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
