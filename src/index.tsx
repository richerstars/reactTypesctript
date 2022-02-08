import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MatchesContextProvider } from 'src/context/MatchesContext';

ReactDOM.render(
    <MatchesContextProvider>
        <App />
    </MatchesContextProvider>,
    document.getElementById('root')
);

