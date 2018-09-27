import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ViewDefects from './ViewDefects';
import './index.css';
import LoginView from './LoginView';
import registerServiceWorker from './registerServiceWorker';
import AddDefects from './AddDefects';

export const defects = [
    {
        category : 'UI',
        priority : 1,
        description : 'AddDefects is defined but never used  no-unused-vars',
        status : 'open'
    },
    {
        category : 'Functional',
        priority : 2,
        description : 'AddDefects is defined but never used  no-unused-vars',
        status : 'closed'
    },
    {
        category : 'Change Request',
        priority : 3,
        description : 'AddDefects is defined but never used  no-unused-vars',
        status : 'open'
    },
    {
        category : 'UI',
        priority : 2,
        description : 'AddDefects is defined but never used  no-unused-vars',
        status : 'open'
    }
];

ReactDOM.render(<Router>
    <div>
    <Route exact path = "/" component = {LoginView} />
    <Route path = "/viewDefects" component = {ViewDefects} />
    <Route path = "/addDefects" component = {AddDefects} />
    </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
