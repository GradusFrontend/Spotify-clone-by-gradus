import './App.css'
import Layout from './layout/Layout'
// import Recomendation from './components/Recomendation'
// import PlaylistCard from './components/PlaylistCard'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import { Routes, Route } from 'react-router-dom'

function App() {
    let token = localStorage.getItem('token')
    if (location.pathname !== '/login') {
        token ? null : location.assign('/login')
    }
    
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/search' element={<Search />} />
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default App
