import React from 'react';

// UI
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type HeaderT = {
    title: string;
};

const Header: React.FC<HeaderT> = (props) => {
    const { title } = props;

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href="/"
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
