import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
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
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    minHeight: '30px',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        color: '#00BBBF',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.2rem',
                    }}
                >
                    RecodeAI
                </Typography>
                <Box
                    sx={{
                        width: '12px',
                        height: '12px',
                        background: 'linear-gradient(45deg, #00FFA3, #DC1FFF)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
