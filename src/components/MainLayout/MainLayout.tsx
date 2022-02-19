import React from 'react';
import { Outlet } from "react-router";
import Header from '../common/Header/Header';

const MainLayout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
);

export default MainLayout;
