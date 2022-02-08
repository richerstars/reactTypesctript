import React from 'react';
import './App.css';
import MatchesList from 'src/component/MatchesList/MatchesList';
import SelectBlock from 'src/component/SelectBlock/SelectBlock';

const App = () => (
    <div>
        <SelectBlock/>
        <MatchesList/>
    </div>
);

export default App;
