import React from 'react';
import { LoginContext } from '../../context/LoginContext';
import NavBar from '../NavBar/NavBar';
import { StHeader, StUserMenu } from './styled';

const Header: React.FC = () => {
    // @ts-ignore
    const {user} = React.useContext(LoginContext);
    return (
        <StHeader>
            <NavBar/>
            <StUserMenu>Hi, {user}</StUserMenu>
        </StHeader>
    );
};

export default Header;
