import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import './styles/index.css'
import App from './App.jsx'

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App /> 
  //</StrictMode>,
)
