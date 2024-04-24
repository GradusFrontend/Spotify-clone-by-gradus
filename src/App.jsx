import './App.css'
// import Layout from './layout/Layout'
// import Recomendation from './components/Recomendation'
// import PlaylistCard from './components/PlaylistCard'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    //    <Home/>
    )
}

export default App
