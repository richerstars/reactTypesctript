import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StForm, StLabel, StLogin } from './styled';
import { LoginContext } from '../context/LoginContext';
import { NEWS_PAGE } from '../../constants/url';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('')
    const {setUser} = useContext(LoginContext);

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (setUser) {
            setUser(login)
        }
        navigate(NEWS_PAGE);
    }

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {setLogin(e.target.value);}

    return (
        <StLogin>
            <StForm onSubmit={submitForm}>
                <StLabel>Log In</StLabel>
                <TextField
                    label="Login"
                    onChange={handleChangeLogin}
                    title="Any login that you wish"
                />
                <Button
                    type="submit"
                    variant="outlined"
                    disabled={login.length === 0}
                    size="large"
                >Submit</Button>
            </StForm>
        </StLogin>
    );
};

export default Login;
