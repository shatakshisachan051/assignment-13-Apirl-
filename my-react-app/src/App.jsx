
import { Route, Router,Routes } from 'react-router-dom'
import './App.css'

import UploadPage from "./pages/UploadPage"

import LogsPage from "./pages/LogsPage"
import DeveloperLogsPage from './pages/DeveloperLogsPage'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/upload' element={<UploadPage/>}/>
          <Route path='/logs' element={<LogsPage/>}/>
          <Route path='/search/:devId' element={<DeveloperLogsPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
