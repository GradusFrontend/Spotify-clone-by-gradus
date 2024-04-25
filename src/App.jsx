import './App.css'
import Layout from './layout/Layout'
// import Recomendation from './components/Recomendation'
// import PlaylistCard from './components/PlaylistCard'
import Home from './pages/Home'
import Search from './pages/Search'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/search' element={<Search />} />
            </Route>
        </Routes>
    )
}

export default App
