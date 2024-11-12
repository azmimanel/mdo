import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../Assets/LOGO.png";
import logo_white from "../Assets/logo_white.png";
import { Instagram, YouTube, Facebook } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Produits', path: '/produits' },
    { label: 'Contact', path: '/contact' },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    const isHomePage = location.pathname === '/';

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={Logo} style={{ height: '60px', cursor: 'pointer' }} alt='logo' onClick={handleNavigate} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                sx={{
                                    textAlign: 'center',
                                    backgroundColor: isActive ? '#A7A7A7' : 'transparent',
                                    color: isActive ? 'white' : 'inherit',
                                }}
                                component={Link}
                                to={item.path}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', zIndex: '1' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'transparent', color: isHomePage ? 'white' : 'black', boxShadow: 'none', position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Left Section with Logo and Navigation Links */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 2 }}
                            >
                                <img src={isHomePage ? logo_white : Logo} style={{ height: '60px', cursor: 'pointer', marginRight: '55px' }} alt='logo' onClick={handleNavigate} />
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'flex-start', gap: '30px' }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={NavLink}
                                        to={item.path}
                                        sx={{
                                            fontSize: '18px',
                                            color: isHomePage ? 'white' : 'black',
                                            textDecoration: 'none',
                                            '&.active': {
                                                textDecoration: 'underline',
                                                textUnderlinePosition: 'under',
                                                textDecorationColor: '#77451b',
                                                textDecorationThickness: '2px',
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <IconButton href="https://www.instagram.com/mdo.tunisie/" target="_blank" aria-label="Instagram">
                                <Instagram sx={{ color: isHomePage ? 'white' : 'black' }} />
                            </IconButton>
                            <IconButton href="https://www.youtube.com/@mdotunisie9683" target="_blank" aria-label="YouTube">
                                <YouTube sx={{ color: isHomePage ? 'white' : 'black' }} />
                            </IconButton>
                            <IconButton href="https://www.facebook.com/mdotunisie" target="_blank" aria-label="Facebook">
                                <Facebook sx={{ color: isHomePage ? 'white' : 'black' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
