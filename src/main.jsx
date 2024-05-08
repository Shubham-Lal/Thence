import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConfirmationProvider } from './ConfirmationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfirmationProvider>
    <App />
  </ConfirmationProvider>,
)