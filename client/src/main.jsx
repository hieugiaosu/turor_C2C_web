import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import StatisticPage from './pages/admin/statistic-page/StatisticPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Comment for testing page */}
    <StatisticPage/>
  </React.StrictMode>,
)
