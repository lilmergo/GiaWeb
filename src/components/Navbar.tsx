import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const pages = ['Home', 'About', 'Experience', 'Projects-n-Stuff'];

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar sx={{ border: 1, borderColor: 'black', boxShadow: 'none', position: 'static' }}>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'center',
                        border: 1,
                    }}
                >
                    {pages.map((page) => (
                        <Button
                            component={Link}
                            to={`/${page}`}
                            key={page}
                            sx={{
                                my: 2,
                                mx: 2,
                                borderLeft: 1,
                                borderRight: 1,
                                transition: '100ms ease-in-out',
                                '&:hover': {
                                    px: 3,
                                    bgcolor: '#FFFFFF',
                                    borderLeft: 3,
                                    borderRight: 3,
                                },
                            }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ width:'100%', display: { xs: 'flex', sm: 'none' }, justifyContent:'space-between', alignItems: 'center' }}>
                <p style={{color:'#000000'}}>GIA HANH NGUYEN</p>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        sx={{ color: 'black' }} 
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        elevation={0}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{color:'red'}}
                        
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleMenuClose} component={Link} to={`/${page}`}
                            sx={{border:1}}
                            >
                                {page}
                            </MenuItem>
                        ))}
                    </Menu>
                        
                </Box>
            </Box>
        </AppBar>
    );
};
