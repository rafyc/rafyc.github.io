import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {Button, TextField} from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import "./styles/contact.css";
function ContactForm(){
    const defaultTheme = createTheme();
  const [state, handleSubmit] = useForm("xnqkpzen");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container className='main' component="main" maxWidth="m" sx={{
        display: 'flex',
        alignItems: 'flex-start',
    }}>
      <CssBaseline />
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}>
             <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex',
            flexDirection: 'column', alignItems: 'flex-start',}}>
                <Grid xs={12} sm={3}>

        <TextField fullWidth id="email"

        type="email"
        name="email" label="Your email" variant="standard" sx={{marginTop: 2, width: 300}}/>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      </Grid>
      <TextField multiline={true} fullWidth id="message" name="message" label='Your message' variant='standard' sx={{marginTop: 2, width: 300}}/>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <Button variant="outlined" size="small" type="submit" disabled={state.submitting} className='button' sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
    </Box>
    </Container>
    </ThemeProvider>
  );
}
export default ContactForm;
