import React, { useState } from 'react';

type TProps = {
    children: React.ReactNode
};

type TUser = {
    user: string,
    setUser?: ()=>void,
}

const defaultState = {
    user: ''
};

export const LoginContext = React.createContext<TUser>(defaultState);

const LoginProvider: React.FC<TProps> = ({children}) => {
    const [user, setUser] = useState('');
    const value = {
        user,
        setUser
    };

    // @ts-ignore
    return <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>;
};

export default LoginProvider;
