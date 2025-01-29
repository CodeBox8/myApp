import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TicTac from './TicTac.jsx'
import UsersList from './UsersList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TicTac />
    <UsersList/>
  </StrictMode>,
)
