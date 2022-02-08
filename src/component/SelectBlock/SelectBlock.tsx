import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { constants } from 'src/constants/mainConst';
import { MatchesContext } from 'src/context/MatchesContext';
import {StyledSelect} from './styled';

const LEAGUE_OPTIONS = [
    { value: '602', label: 'Premier League' },
    { value: '603', label: 'Persha Liga' },
];

type TOption = {
    value: string,
    label: string,
};

type TSeasons = {
    name: string,
    season_id: number,
};

const SelectBlock = () => {

    React.useEffect(() => {
        getSeasons(LEAGUE_OPTIONS[0].value);
    }, []);

    const {toggleLoader, setMatches } = React.useContext(MatchesContext);
    const [ league, setLeague ] = React.useState(LEAGUE_OPTIONS[0]);
    const [ season, setSeason ] = React.useState<TOption>(null);
    const [ seasonOptions, setSeasonOptions ] = React.useState<Array<TOption>>([]);

    const handleChangeLeague = (value: TOption) => {
        setLeague(value);
    };

    const handleChangeSeason = (value: TOption) => {
        setSeason(value);
        getMatches(value.value);
    };

    const getSeasons = async (value: string) => {
        try {
            const { data: { data } } = await axios.get(
                `${constants.SEASON_URL}${constants.API_KEY}${constants.LEAGUE_ID}${value}`);
            const seasons = data.map((element: TSeasons) => ({
                value: element.season_id.toString(),
                label: element.name
            }));
            setSeasonOptions(seasons);
            setSeason(seasons[0]);
            getMatches(seasons[0].value);
        } catch {
            return false;
        }
    };

    const getMatches = async (seasonId: string) => {
        try {
            toggleLoader();
            const { data: { data } } = await axios.get(
                `${constants.MATCHES_URL}${constants.API_KEY}${constants.SEASON_ID}${seasonId}`);
            setMatches(data);
        } catch {
            toggleLoader();
        }
    };
    return (
        <StyledSelect>
            <Select
                value={league}
                onChange={handleChangeLeague}
                options={LEAGUE_OPTIONS}
            />
            <Select
                value={season}
                onChange={handleChangeSeason}
                options={seasonOptions}
            />
        </StyledSelect>
    );
};

export default SelectBlock;
