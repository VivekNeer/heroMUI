import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Info from './Info.jsx';
import Biege from './Biege.jsx';
import Stage from './Stage.jsx'
import Design from './Design.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Info />
    <Biege />
    <Stage />
    <Design />
  </React.StrictMode>,
)
