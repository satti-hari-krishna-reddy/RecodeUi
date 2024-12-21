import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

const ToolBar = () => {
    const [demoAnchorEl, setDemoAnchorEl] = useState(null);
    const [translateAnchorEl, setTranslateAnchorEl] = useState(null);
    const [activeButton, setActiveButton] = useState('');

    const handleDemoClick = (event) => setDemoAnchorEl(event.currentTarget);
    const handleDemoClose = () => setDemoAnchorEl(null);

    const handleTranslateClick = (event) => setTranslateAnchorEl(event.currentTarget);
    const handleTranslateClose = () => setTranslateAnchorEl(null);

    const handleButtonClick = (buttonName) => setActiveButton(buttonName);

    return (
        <AppBar
            position="sticky"
            sx={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '25px',
                height: 'fit-content',
                width: 'fit-content',
                margin: '20px auto',
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Upload Executable Button */}
                <Button
                    sx={{
                        backgroundColor: '#DC1FFF',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#00FFA3',
                            transform: 'scale(1.05)',
                        },
                    }}
                    onClick={() => handleButtonClick('upload')}
                >
                    Upload Executable
                </Button>

                {/* Decompile Button */}
                <Button
                    sx={{
                        backgroundColor: '#1F77FF',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#FF9933',
                            transform: 'scale(1.05)',
                        },
                    }}
                    onClick={() => handleButtonClick('decompile')}
                >
                    Decompile
                </Button>

                {/* Try Demo Executables Dropdown Button */}
                <Button
                    sx={{
                        backgroundColor: '#FF5722',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#FFC107',
                            transform: 'scale(1.05)',
                        },
                    }}
                    onClick={handleDemoClick}
                >
                    Demo Executables
                </Button>
                <Menu
                    anchorEl={demoAnchorEl}
                    open={Boolean(demoAnchorEl)}
                    onClose={handleDemoClose}
                >
                    <MenuItem onClick={handleDemoClose}>prime_numbers.exe</MenuItem>
                </Menu>

                {/* Reconstruct Button */}
                <Button
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#000',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        borderBottom: activeButton === 'reconstruct' ? '2px solid #000' : 'none',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                    onClick={() => handleButtonClick('reconstruct')}
                >
                    Reconstruct
                </Button>

                {/* Translate Dropdown Button */}
                <Button
                    sx={{
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#8BC34A',
                            transform: 'scale(1.05)',
                        },
                    }}
                    onClick={handleTranslateClick}
                >
                    Translate
                </Button>
                <Menu
                    anchorEl={translateAnchorEl}
                    open={Boolean(translateAnchorEl)}
                    onClose={handleTranslateClose}
                >
                    <MenuItem onClick={handleTranslateClose}>Python</MenuItem>
                    <MenuItem onClick={handleTranslateClose}>Java</MenuItem>
                    <MenuItem onClick={handleTranslateClose}>C++</MenuItem>
                    <MenuItem onClick={handleTranslateClose}>Golang</MenuItem>
                    <MenuItem onClick={handleTranslateClose}>JavaScript</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default ToolBar;
