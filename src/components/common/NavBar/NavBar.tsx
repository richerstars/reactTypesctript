import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PAGE, DEFAULT_PAGE, NEWS_PAGE } from '../../../constants/url';

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const handleClickLogout = () => {navigate(DEFAULT_PAGE);}
    const handleClickAbout = () => {navigate(ABOUT_PAGE);}
    const handleClickNews = () => {navigate(NEWS_PAGE);}

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={handleClickAbout}>About</Button>
            <Button onClick={handleClickNews}>News</Button>
            <Button onClick={handleClickLogout}>Log out</Button>
        </ButtonGroup>
    );
};

export default NavBar;
