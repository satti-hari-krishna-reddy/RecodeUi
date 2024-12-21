import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar
            position="sticky"
            sx={{
                background: 'rgba(255, 255, 255, 0.3)', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)', 
                padding: '10px 20px',
                borderRadius: '20px',
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        color: '#00BBBF', 
                        fontFamily: 'Poppins, sans-serif', 
                    }}
                >
                    SolNFT.
                </Typography>
                <Button
                    sx={{
                        backgroundColor: '#DC1FFF', 
                        color: '#fff', 
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none', // No uppercase
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#00FFA3', 
                            transform: 'scale(1.05)', 
                        },
                    }}
                >
                    Placeholder Button
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
