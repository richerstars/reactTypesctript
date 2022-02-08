import React from 'react';
import { MatchesContext } from 'src/context/MatchesContext';
import MatchItem from 'src/component/MatchesList/MatchItem/MatchItem';
import { StyledMainWrapper, StyledParagraph } from './styled';

const MatchesList = () => {
    const { matches, isLoading } = React.useContext(MatchesContext);
    return (
        <>
            {isLoading ? <StyledParagraph>Data loading</StyledParagraph>
                : <StyledMainWrapper>
                    {matches.map((match: any, index: number) => <MatchItem
                        key={index} match={match}/>)}
                </StyledMainWrapper>
            }
        </>
    );
};

export default MatchesList;
