import React, {useContext} from 'react';
import {Navigate } from "react-router";
import { LoginContext } from '../components/context/LoginContext';
import { DEFAULT_PAGE } from '../constants/url';

const checkUser = (Component: React.FC) => () => {
    // @ts-ignore
    const {user} = useContext(LoginContext);
    return user
        ? <Component/>
        : <Navigate  to={DEFAULT_PAGE}/>;
};

export default checkUser;
