import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const ToolBar = () => {
    return (
        <AppBar
            position="sticky"
            sx={{
                background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
                backdropFilter: 'blur(10px)', // Blur effect
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)', // Light border
                padding: '10px 20px',
                borderRadius: '20px',
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Left side: SolNFT name */}
                {/* <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        color: '#00BBBF', // Vibrant color matching the gradient
                        fontFamily: 'Poppins, sans-serif', // Modern, clean font
                    }}
                >
                    SolNFT.
                </Typography> */}

                {/* Right side: Placeholder Button */}
                <Button
                    sx={{
                        backgroundColor: '#DC1FFF', // Matching color from the gradient
                        color: '#fff', // White text for contrast
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none', // Keep the text as is, no uppercase transformation
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft button shadow
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#00FFA3', // Swap to the other gradient color on hover
                            transform: 'scale(1.05)', // Slight scale up on hover
                        },
                    }}
                >
                    Upload file
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default ToolBar;
