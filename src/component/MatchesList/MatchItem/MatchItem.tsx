import React from 'react';
import { StyledDescriptionDiv, StyledMatchDiv, StyledTitleDiv } from './styled';

type TMatchItem = {
    match: any
};

const MatchItem = ({ match }: TMatchItem) => {
    return (
        <StyledMatchDiv>
            <StyledTitleDiv>
                <div>{match.away_team.name}</div>
                <div>{match.home_team.name}</div>
            </StyledTitleDiv>
            <StyledDescriptionDiv>
                <img src={match.away_team.logo}/>
                {match.stats.away_score}
                :
                {match.stats.home_score}
                <img src={match.home_team.logo}/>
            </StyledDescriptionDiv>
        </StyledMatchDiv>
    );
};

export default MatchItem;
