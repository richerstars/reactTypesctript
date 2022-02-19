import React from 'react';
import { NewsContext } from '../../../context/NewsContext';
import { StAuth, StDescript, StImage, StTitle, StWrapper } from './styled';

const SinglePage = () => {
    // @ts-ignore
    const { oneNews } = React.useContext(NewsContext);
    return (
        <StWrapper>
            <StTitle>{oneNews.title}</StTitle>
            <StDescript>{oneNews.description}</StDescript>
            <StAuth>{oneNews.author}</StAuth>
            <StDescript>{oneNews.content}</StDescript>
            <StAuth>{oneNews.publishedAt}</StAuth>
            <StImage src={oneNews.urlToImage} alt="photo"/>
        </StWrapper>
    );
};

export default SinglePage;
