import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Playlist from './pages/Playlist'
import Search from './pages/Search'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { TrackContext } from './context/TrackCTX'
import { PLaylistContext } from './context/PlaylistCTX'

function App() {
    const [track, setTrack] = useState(null)
    const [playlist_ctx, setPLaylist_ctx] = useState([])

    return (
        <PLaylistContext.Provider value={{playlist_ctx, setPLaylist_ctx}} >
            <TrackContext.Provider value={{ track, setTrack }} >
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/playlist/:playlistId' element={<Playlist />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </TrackContext.Provider>
        </PLaylistContext.Provider>
    )
}

export default App
