import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PokecellApp } from './PokecellApp'

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <PokecellApp />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
