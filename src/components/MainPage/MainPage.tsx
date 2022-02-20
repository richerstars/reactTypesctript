import React, { useContext } from 'react';
import { NewsContext, TNews } from '../context/NewsContext';
import NewsPage from './NewsPage/NewsPage';
import { StHeadOne, StLoading, StNews } from './styled';
import checkUser from '../../HOC/LoginHoc';

const MainPage: React.FC = () => {
    // @ts-ignore
    const {news} = useContext(NewsContext);
    console.log(news);
    return (
        <div>
            <StHeadOne>News App 👋</StHeadOne>
            <StNews>
                {news
                    ? news.map((news: TNews) => (
                        <NewsPage data={news} key={news.url}/>
                    ))
                    : <StLoading>"Loading"</StLoading>}
            </StNews>
        </div>
    );
};

export default checkUser(MainPage);
