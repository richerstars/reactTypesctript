import React from 'react';
import { StDataInfo, StInfo, StNewsHeader, StOneNews, StPar } from './styled';
import Button from '../../common/Button/Button';
import { NewsContext, TNews } from '../../context/NewsContext';
import { Link } from 'react-router-dom';

type TProps = {
    data: TNews
};

const NewsPage: React.FC<TProps> = ({data}) => {
    // @ts-ignore
    const {setSingleNews} = React.useContext(NewsContext);
    const onClickHandler = () => setSingleNews(data.publishedAt);

    return (
        <StOneNews>
            <StNewsHeader>{data.title}</StNewsHeader>
            <StPar>{data.description}</StPar>
            <StInfo>{data.author}</StInfo>
            <br/>
            <StDataInfo>{data.publishedAt}</StDataInfo>
            <StDataInfo>{data.source.name}</StDataInfo>
            <Link to={`/news/${data.publishedAt}`}>
                <Button onClick={onClickHandler}/>
            </Link>
        </StOneNews>
    );
};

export default NewsPage;
