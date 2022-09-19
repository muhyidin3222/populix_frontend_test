import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';

const theme = createTheme({
  palette: {
  },
});

const ArchLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Produk List"
          sections={
            [
              {
                title: "Produk Terbaru",
                url: "https://info.populix.co/en/home-en/"
              }
            ]
          }
        />
        <main>
          {props.children}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default ArchLayout