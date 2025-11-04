import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import './Footer.css';

export const Footer = () => {
    return (
        <Box className="box">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body2">
                            Ciao sono Giorgio, uno studente di CIM. Ho sviluppato questa applicazione per aiutare tutti i miei colleghi.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Me
                        </Typography>
                        <Typography variant="body2">
                            Email: shadigiorgio.islam01@universitadipavia.it
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Me
                        </Typography>
                        
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" align="center">
                        {"Copyright ©"}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}