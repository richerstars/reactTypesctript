import React from 'react';

const MatchesContext = React.createContext(null);

type TProps = {
    children: React.ReactNode,
};

const MatchesContextProvider: React.FC<TProps> = ({ children }) => {
    const [ state, setState ] = React.useState({
        matches: [],
        match: null,
        isLoading: false,
    });
    const toggleLoader = () => setState((prevState) =>
        ({ ...prevState, isLoading: !prevState.isLoading }));
    const setMatches = (matches: Array<any>) => setState((prevState) =>
        ({ ...prevState, isLoading: false, matches: matches }));
    const setMatch = (matchId: string) => setState((prevState) =>
        ({ ...prevState, match: prevState.matches.find((match: { id: string; }) => match.id === matchId) }));

    const contextValue = { ...state, toggleLoader, setMatches, setMatch };
    return (
        <MatchesContext.Provider value={contextValue}>{children}</MatchesContext.Provider>
    );
};

export { MatchesContextProvider, MatchesContext };
