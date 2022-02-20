import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import About from './components/About/About';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import SinglePage from './components/MainPage/NewsPage/SinglePage/SinglePage';
import { ABOUT_PAGE, DEFAULT_PAGE, NEWS_PAGE, SINGLE_PAGE } from './constants/url';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => (
    <ErrorBoundary>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={NEWS_PAGE} element={<MainPage/>}/>
                <Route path={SINGLE_PAGE} element={<SinglePage/>}/>
                <Route path={ABOUT_PAGE} element={<About/>}/>
            </Route>
            <Route path={DEFAULT_PAGE} element={<Login/>}/>
        </Routes>
    </ErrorBoundary>
);

export default App;
