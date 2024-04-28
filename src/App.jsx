import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Playlist from './pages/Playlist'
import Search from './pages/Search'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/playlist/:playlistId' element={<Playlist />} />
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default App
