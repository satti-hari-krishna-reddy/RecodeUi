import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import ToolBar from './components/ToolBar';

const App = () => {
    return (
<Box
    sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        padding: '20px',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #ffafbd, #ffc3a0, #d5aaff, #a0c4ff, #8ecae6)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }}
>  <div style={{'display' : 'flex'}}>    <Header />
<About /></div>

<ToolBar />
</Box>

    );
};

export default App;
