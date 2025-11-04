import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import './Navbar.css';
import {Drawer} from "@mui/material";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
export const Navbar = () => {
    type Anchor = 'left';

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
            <AppBar position="static" className="appbar">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" }
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="logo non trovato"
                                height="50px"/>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                onClick={toggleDrawer('left', true)}
                                className="iconButtonMenu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor='left'
                                open={state['left']}
                                onClose={toggleDrawer('left', false)}
                            >
                                <Typography
                                    component="a"
                                    href="/"
                                    className="logo"
                                >
                                    <img
                                        src="./logo.png"
                                        alt="logo non trovato"
                                        height="70px"/>
                                </Typography>
                                <IconButton size="large" onClick={toggleDrawer('left', false)} className="iconButtonClose">
                                    <CloseSharpIcon fontSize="inherit" />
                                </IconButton>
                            </Drawer>


                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1
                            }}
                        >
                            <img
                                src="./logo.png"
                                alt="logo non trovato"
                                height="50px"/>
                        </Typography>

                    </Toolbar>
            </AppBar>
    );
}