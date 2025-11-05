import React, { useState } from 'react';
import {
    Box,
    Container,
    TextField,
    MenuItem,
    Slider,
    Typography,
    FormControl,
    InputLabel,
    Select,
} from '@mui/material';
import './PromptBuilder.css';

interface PromptParameters {
    objective: string;
    sender: string;
    receiver: string;
    tone: string;
    detailLevel: number;
    context: string;
    language: string;
    style: string;
}

interface Props {
    parameters: PromptParameters;
    onParametersChange: (params: PromptParameters) => void;
}

const PromptBuilder: React.FC<Props> = ({ parameters, onParametersChange }) => {
    const [localParameters, setLocalParameters] = useState<PromptParameters>(parameters);

    const roles = ['Medico', 'Infermiere', 'Coordinatore', 'Paziente', 'Team sanitario'];
    const tones = ['Empatico', 'Formale', 'Collaborativo', 'Tecnico', 'Informativo'];
    const styles = ['Formale accademico', 'Operativo breve', 'Standard'];
    const languages = ['Italiano', 'English', 'Español'];

    const handleChange = (field: keyof PromptParameters) => (
        event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
    ) => {
        const newParameters = {
            ...localParameters,
            [field]: event.target.value
        };
        setLocalParameters(newParameters);
        onParametersChange(newParameters);
    };

    return (
        <Box className="promptBuilderContainer" id="prompt-builder">
            <Container>
                <Typography variant="h3" className="sectionTitle">
                    Costruisci il tuo Prompt
                </Typography>
                
                <div className="parametersGrid">
                    <TextField
                        fullWidth
                        label="Obiettivo della comunicazione"
                        placeholder="Es: spiegare un piano terapeutico"
                        value={localParameters.objective}
                        onChange={handleChange('objective')}
                        className="parameterField"
                    />

                    <div className="roleSelectors">
                        <FormControl fullWidth>
                            <InputLabel>Ruolo emittente</InputLabel>
                            <Select
                                value={localParameters.sender}
                                onChange={handleChange('sender')}
                                label="Ruolo emittente"
                            >
                                {roles.map(role => (
                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel>Ruolo destinatario</InputLabel>
                            <Select
                                value={localParameters.receiver}
                                onChange={handleChange('receiver')}
                                label="Ruolo destinatario"
                            >
                                {roles.map(role => (
                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <FormControl fullWidth>
                        <InputLabel>Tono comunicativo</InputLabel>
                        <Select
                            value={localParameters.tone}
                            onChange={handleChange('tone')}
                            label="Tono comunicativo"
                        >
                            {tones.map(tone => (
                                <MenuItem key={tone} value={tone}>{tone}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div className="detailLevelContainer">
                        <Typography gutterBottom>
                            Livello di dettaglio
                        </Typography>
                        <Slider
                            value={localParameters.detailLevel}
                            onChange={(_, value) => {
                                const newDetailLevel = value as number;
                                setLocalParameters({
                                    ...localParameters,
                                    detailLevel: newDetailLevel
                                });
                                onParametersChange({
                                    ...localParameters,
                                    detailLevel: newDetailLevel
                                });
                            }}
                            step={1}
                            marks={[
                                { value: 0, label: 'Sintetico' },
                                { value: 1, label: 'Standard' },
                                { value: 2, label: 'Approfondito' }
                            ]}
                            min={0}
                            max={2}
                        />
                    </div>

                    <TextField
                        fullWidth
                        label="Contesto clinico/organizzativo"
                        placeholder="Es: paziente cronico in telemonitoraggio"
                        value={localParameters.context}
                        onChange={handleChange('context')}
                        className="parameterField"
                    />

                    <div className="languageStyleSelectors">
                        <FormControl fullWidth>
                            <InputLabel>Lingua</InputLabel>
                            <Select
                                value={localParameters.language}
                                onChange={handleChange('language')}
                                label="Lingua"
                            >
                                {languages.map(lang => (
                                    <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel>Stile output</InputLabel>
                            <Select
                                value={localParameters.style}
                                onChange={handleChange('style')}
                                label="Stile output"
                            >
                                {styles.map(style => (
                                    <MenuItem key={style} value={style}>{style}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export default PromptBuilder;