import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './PromptPreview.css';

interface Props {
    prompt: string;
    onRegenerate: () => void;
    onSaveTemplate: () => void;
}

const PromptPreview: React.FC<Props> = ({ prompt, onRegenerate, onSaveTemplate }) => {
    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            // You might want to add a toast notification here
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    const highlightKeywords = (text: string) => {
        // Add keyword highlighting logic here
        return text;
    };

    return (
        <Box className="previewContainer">
            <Container>
                <Typography variant="h3" className="previewTitle">
                    Prompt Generato
                </Typography>

                <Paper elevation={3} className="promptDisplay">
                    <Typography variant="body1" className="promptText">
                        {highlightKeywords(prompt)}
                    </Typography>
                </Paper>

                <Box className="actionButtons">
                    <Button
                        variant="contained"
                        startIcon={<RefreshIcon />}
                        onClick={onRegenerate}
                        className="actionButton regenerate"
                    >
                        Rigenera prompt
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<ContentCopyIcon />}
                        onClick={handleCopyPrompt}
                        className="actionButton copy"
                    >
                        Copia prompt
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<BookmarkIcon />}
                        onClick={onSaveTemplate}
                        className="actionButton save"
                    >
                        Salva template
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default PromptPreview;