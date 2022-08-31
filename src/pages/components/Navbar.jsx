import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CloudUploadOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pagesLeft = ['pokemons', 'types'];
const pagesRight = ['skills', 'teams'];
const rightMenu = ['Import', 'Export'];

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar elevation={0}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: { xs: 75, sm: 80, md: 90 },
                width: {
                    xs: '100%', md: '90%', lg: '80%'
                },
                margin: '0 auto',
                backgroundColor: 'rgba(0,74,173,0.9)',
                borderRadius: {
                    xs: '0px 0px 5% 5% / 30% 30%',
                    md: '0px 0px 3.5% 3.5% / 35% 35%',
                    xl: '0px 0px 3% 3% / 40% 40%'
                }
            }}>
            <Container maxWidth="xl" sx={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Toolbar disableGutters sx={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {[...pagesLeft, ...pagesRight].map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography variant="h6" textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box display='flex' alignItems='center'>
                        <AdbIcon sx={{ color: '#FFDE59', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: '#FFDE59',
                                textDecoration: 'none',
                            }}
                        >
                            POKECELL
                        </Typography>
                    </Box>

                    <Box sx={{
                        flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center',
                    }}>
                        {pagesLeft.map((page) => (
                            <Button
                                component={Link}
                                to={`/${page}`}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Typography px={2} variant="h6" textAlign="center">{page}</Typography>
                            </Button>
                        ))}
                        <Typography
                            variant="h4"
                            mx={4}
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: '#FFDE59',
                                textDecoration: 'none',
                            }}
                        >
                            POKECELL
                        </Typography>
                        {pagesRight.map((page) => (
                            <Button
                                component={Link}
                                to={`/${page}`}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Typography px={2} variant="h6" textAlign="center">{page}</Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open rightMenu">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <CloudUploadOutlined sx={{
                                    color: 'white'
                                }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {rightMenu.map((option) => (
                                <MenuItem key={option} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};


