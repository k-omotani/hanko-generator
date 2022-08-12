import React from 'react';
import './App.css';
import Preview from './component/Preview';

import Slider from '@mui/material/Slider';
import Boy from '@mui/icons-material/Boy';
import Stack from '@mui/material/Stack';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Preview />
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <AirlineSeatReclineExtraIcon />
          <Slider
            aria-label="Small steps"
            defaultValue={0.00000005}
            step={1.0}
            marks
            min={0}
            max={90}
            valueLabelDisplay="auto"
          />
          <Boy />
        </Stack>
      </header>
    </div>
  );
}

export default App;
