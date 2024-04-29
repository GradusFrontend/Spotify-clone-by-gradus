import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Playlist from './pages/Playlist'
import Search from './pages/Search'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react';
import { createContext } from 'react'
import { useState } from 'react'

export const TrackContext = createContext(null)


function App() {
    const [track, setTrack] = useState(null)

    return (
        <TrackContext.Provider value={{track, setTrack}} >
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/playlist/:playlistId' element={<Playlist />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </TrackContext.Provider>
    )
}

export default App
