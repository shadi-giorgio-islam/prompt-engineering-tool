import React from 'react';
import { Box, Button, Container, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import './Banner.css';

const Banner: React.FC = () => {
    const scrollToNextSection = () => {
        // Assume la prossima sezione ha un id "next-section"
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box className={`bannerContainer`}>
            <img src="/banner.jpg" alt="Banner" className={`bannerImage`} />
            <div className={`bannerOverlay`} />
            <Container className={`bannerContent`}>
                <Typography variant="h2" className="bannerTitle" sx={{ color: '#ffffff', marginBottom: 3 }}>
                    Prompt Engineering per la Sanità
                </Typography>
                <Typography variant="h5" className="bannerSubtitle" sx={{ color: '#ffffff', marginBottom: 4 }}>
                    Strumento avanzato per la creazione di prompt efficaci nel contesto sanitario
                </Typography>
                <Box sx={{ marginBottom: 4 }}>
                    <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: 2 }}>
                        Crea prompt personalizzati in tre semplici passaggi:
                    </Typography>
                    <List>
                        {[
                            'Seleziona il tipo di comunicazione',
                            'Personalizza i parametri specifici',
                            'Genera il tuo prompt ottimizzato'
                        ].map((step, index) => (
                            <ListItem key={index} sx={{ color: '#ffffff', padding: '8px 0' }}>
                                <ListItemIcon sx={{ color: '#ffffff', minWidth: '32px' }}>
                                    <RadioButtonCheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                                    {step}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Button 
                    variant="contained" 
                    size="large" 
                    onClick={scrollToNextSection}
                    className="startButton"
                    sx={{
                        backgroundColor: 'var(--primocolore)',
                        '&:hover': {
                            backgroundColor: 'var(--secondocolore)',
                        },
                        padding: '12px 32px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        borderRadius: '30px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    Inizia ora
                </Button>
            </Container>
        </Box>
    );
};

export default Banner;