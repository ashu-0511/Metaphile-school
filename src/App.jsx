import './App.css'
import Navbar from './Home/Navbar'
import Page from './Home/Page'
import Profilescreen from './Profile/Profilescreen'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='Profile-page' element={<Profilescreen />} />
      </Routes>


    </>
  )
}

export default App
