import React, {useState} from 'react';
import { 
    Box,
    Button,
    Typography,
    Toolbar,
    AppBar,
    Menu,
    MenuItem,
    IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Header(){
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: '0 4px 2px -2px gray', borderColor: "#000000" }}>
            <Toolbar>
                <Typography fontSize={28} sx={{ flexGrow: 1, cursor: "pointer" }} fontWeight={800} color={"#000000"} onClick={() => navigate("/")}>
                   RPM Digital Solutions
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="#000000"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleMenu}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => { handleClose(); navigate("/"); }}>Home</MenuItem>
                            <MenuItem onClick={() => { handleClose(); navigate("/services"); }}>Services</MenuItem>
                            <MenuItem onClick={() => { handleClose(); navigate("/about"); }}>About</MenuItem>
                            <MenuItem onClick={() => { handleClose(); navigate("/contact"); }}>Contact</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Button variant="text" onClick={() => navigate("/")}>
                            <Typography fontSize={20} fontWeight={500} color="#000000" textTransform="none">
                                Home
                            </Typography>
                        </Button>
                        <Button variant="text" onClick={() => navigate("/services")}>
                            <Typography fontSize={20} fontWeight={500} color="#000000" textTransform="none">
                                Services
                            </Typography>
                        </Button>
                        <Button variant="text" onClick={() => navigate("/about")}>
                            <Typography fontSize={20} fontWeight={500} color="#000000" textTransform="none">
                                About
                            </Typography>
                        </Button>
                        <Button variant="text" onClick={() => navigate("/contact")}>
                            <Typography fontSize={20} fontWeight={500} color="#000000" textTransform="none">
                                Contact
                            </Typography>
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
}