import React, { useState } from 'react';
import { FormControl, Input, FormHelperText, Grid, Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Login = () => {
    const [login, setLogin] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Função para abrir e fechar o Drawer
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    // Conteúdo do Drawer
    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Caixa de entrada', 'Favoritos', 'Enviar email', 'Rascunhos'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Todo correio', 'Lixo', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: 2,
            }}
        >
            {/* Botão para abrir o Drawer */}
            <Button onClick={toggleDrawer(true)}>Open Menu</Button>
            
            {/* Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>

            {/* Formulário de Login */}
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                    <FormControl fullWidth>
                        <Input
                            id="login_nome"
                            aria-describedby="login_nome_helper_text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;
