import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import LoginProvider from './components/context/LoginContext';
import { NewsContextProvider } from './components/context/NewsContext';

ReactDOM.render(
    <BrowserRouter>
        <LoginProvider>
            <NewsContextProvider>
                <GlobalStyles/>
                <App/>
            </NewsContextProvider>
        </LoginProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
