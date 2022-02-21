import React, { useContext } from 'react';
import { NewsContext, TNews } from '../context/NewsContext';
import NewsPage from './NewsPage/NewsPage';
import { StHeadOne, StLoading, StNews } from './styled';
import withCheckUser from '../../HOC/withCheckUser';

const MainPage: React.FC = () => {

    const {news} = useContext(NewsContext);
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

export default withCheckUser(MainPage);
