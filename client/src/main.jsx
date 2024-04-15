import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import MessengerPage from './pages/admin/messenger-page/MessengerPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Comment for testing page */}
    <MessengerPage/>
  </React.StrictMode>,
)
