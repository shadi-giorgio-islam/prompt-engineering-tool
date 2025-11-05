import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import './CommunicationSelector.css';

interface CommunicationType {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const communicationTypes: CommunicationType[] = [
    {
        id: 'medico-paziente',
        title: 'Comunicazione medico-paziente',
        description: 'Per chat, videoconsulti o messaggi clinici',
        icon: <ChatIcon sx={{ fontSize: 40 }} />
    },
    {
        id: 'interprofessionale',
        title: 'Comunicazione tra professionisti sanitari',
        description: 'Per scambi interprofessionali e teleconsulti',
        icon: <GroupIcon sx={{ fontSize: 40 }} />
    },
    {
        id: 'organizzativa',
        title: 'Comunicazione organizzativa e gestionale',
        description: 'Per riunioni, report o coordinamento amministrativo',
        icon: <BusinessIcon sx={{ fontSize: 40 }} />
    }
];

interface Props {
    onSelect: (type: string) => void;
}

const CommunicationSelector: React.FC<Props> = ({ onSelect }) => {
    return (
        <Box id="next-section" className="selectorContainer">
            <Container>
                <Typography variant="h3" className="selectorTitle">
                    Seleziona il tipo di comunicazione
                </Typography>
                <Typography variant="h6" className="selectorSubtitle">
                    Scegli la categoria più adatta alle tue esigenze
                </Typography>
                <Box className="cardsContainer">
                    {communicationTypes.map((type) => (
                        <Card key={type.id} className="communicationCard">
                            <CardActionArea onClick={() => onSelect(type.id)}>
                                <CardContent>
                                    <div className="cardIcon">{type.icon}</div>
                                    <Typography variant="h5" className="cardTitle">
                                        {type.title}
                                    </Typography>
                                    <Typography variant="body1" className="cardDescription">
                                        {type.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default CommunicationSelector;