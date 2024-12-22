import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ToolBar = () => {
    const [demoAnchorEl, setDemoAnchorEl] = useState(null);
    const [translateAnchorEl, setTranslateAnchorEl] = useState(null);
    const [activeButton, setActiveButton] = useState('');
    const [demoButtonText, setDemoButtonText] = useState('Demo Executables');
    const [translateButtonText, setTranslateButtonText] = useState('Translate');

    const handleDemoClick = (event) => setDemoAnchorEl(event.currentTarget);
    const handleDemoClose = (option) => {
        setDemoAnchorEl(null);
        if (option) setDemoButtonText(option);
    };

    const handleTranslateClick = (event) => setTranslateAnchorEl(event.currentTarget);
    const handleTranslateClose = (option) => {
        setTranslateAnchorEl(null);
        if (option) setTranslateButtonText(option);
    };

    const handleButtonClick = (buttonName) => setActiveButton(buttonName);

    const buttonStyle = {
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '20px',
        padding: '10px 20px',
        textTransform: 'none',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    };

    const menuStyle = {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        padding: '8px 16px',
    };

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
            <Toolbar sx={{ display: 'flex', gap: '15px' }}>
                {/* Upload Executable Button */}
                <Button
                    sx={{
                        ...buttonStyle,
                        backgroundColor: '#DC1FFF',
                        '&:hover': { backgroundColor: '#00FFA3' },
                    }}
                    onClick={() => handleButtonClick('upload')}
                >
                    Upload Executable
                </Button>

                {/* Decompile Button */}


                {/* Demo Executables Dropdown */}
                <Button
                    sx={{
                        ...buttonStyle,
                        backgroundColor: '#FF5722',
                        '&:hover': { backgroundColor: '#E64A19' },
                    }}
                    onClick={handleDemoClick}
                >
                    {demoButtonText} <ArrowDropDownIcon sx={{ marginLeft: '5px' }} />
                </Button>
                <Menu
                    anchorEl={demoAnchorEl}
                    open={Boolean(demoAnchorEl)}
                    onClose={() => handleDemoClose()}
                    sx={{ '& .MuiPaper-root': { borderRadius: '15px', padding: '5px 0' } }}
                >
                    <MenuItem sx={menuStyle} onClick={() => handleDemoClose('prime_numbers.exe')}>
                        prime_numbers.exe
                    </MenuItem>
                </Menu>
                <Button
                    sx={{
                        ...buttonStyle,
                        backgroundColor: '#007BFF',
                        '&:hover': { backgroundColor: '#0056B3' },
                    }}
                    onClick={() => handleButtonClick('decompile')}
                >
                    Decode
                </Button>

                {/* Reconstruct Button */}
                <Button
                    sx={{
                        ...buttonStyle,
                        backgroundColor: 'transparent',
                        color: '#000',
                        borderBottom: activeButton === 'reconstruct' ? '2px solid #000' : 'none',
                        '&:hover': { color: '#555' },
                    }}
                    onClick={() => handleButtonClick('reconstruct')}
                >
                    Recode
                </Button>

                {/* Translate Dropdown */}
                <Button
                    sx={{
                        ...buttonStyle,
                        backgroundColor: '#4CAF50',
                        '&:hover': { backgroundColor: '#388E3C' },
                    }}
                    onClick={handleTranslateClick}
                >
                    {translateButtonText} <ArrowDropDownIcon sx={{ marginLeft: '5px' }} />
                </Button>
                <Menu
                    anchorEl={translateAnchorEl}
                    open={Boolean(translateAnchorEl)}
                    onClose={() => handleTranslateClose()}
                    sx={{ '& .MuiPaper-root': { borderRadius: '15px', padding: '5px 0' } }}
                >
                    <MenuItem sx={menuStyle} onClick={() => handleTranslateClose('Python')}>
                        Python
                    </MenuItem>
                    <MenuItem sx={menuStyle} onClick={() => handleTranslateClose('Java')}>
                        Java
                    </MenuItem>
                    <MenuItem sx={menuStyle} onClick={() => handleTranslateClose('C++')}>
                        C++
                    </MenuItem>
                    <MenuItem sx={menuStyle} onClick={() => handleTranslateClose('Golang')}>
                        Golang
                    </MenuItem>
                    <MenuItem sx={menuStyle} onClick={() => handleTranslateClose('JavaScript')}>
                        JavaScript
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default ToolBar;
