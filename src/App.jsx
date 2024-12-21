import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';

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
        >
            <Header />
        </Box>
    );
};

export default App;
