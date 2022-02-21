import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../constants/url';

type TProps = {
    children: React.ReactNode
};

type TSource = {
    id: number,
    name: string,
}

export type TNews ={
    source: TSource,
    title: string,
    description: string,
    publishedAt: string,
    url: string,
    urlToImage: string,
    author: string,
    content: string | null,
};

type TState = {
    news: Array<TNews>,
    oneNews?: TNews | null,
}

export const NewsContext = createContext(null);

export const NewsContextProvider: React.FC<TProps> = ({children}) => {
    const [data, setData] = useState<TState>({news:[], oneNews: null});

    const getNews = async() => {
        try {
            const {data:{articles}} = await axios.get(API_URL)
            setData((prevState) =>({...prevState,news: articles}));
        } catch (error) {
            return false;
        }
    }
    useEffect(() => {
        getNews();
    }, []);


    const setSingleNews = (marker: string) => setData((prevState) => ({...prevState,
        oneNews: prevState.news.find((oneNews: TNews) => oneNews.publishedAt === marker )}));

    const value={
        ...data,
        setSingleNews,
    }


    // @ts-ignore
    return <NewsContext.Provider value={value}>
        {children}
    </NewsContext.Provider>
};
