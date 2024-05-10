import { useEffect, useState } from "react"
import MultiCard from "../components/MultiCard"
import Recomendation from "../components/Recomendation"
import Layout from "../layout/Layout"
import axios from "axios"
import { Link } from "react-router-dom"


function Home() {
    const token = localStorage.getItem('token')
    const URL = import.meta.env.VITE_API_URL
    const [playlists, setPlaylists] = useState([])
    const [user, setUser] = useState({})
    const [recomendations, setRecomendations] = useState([])


    useEffect(() => {
        axios.get(URL + '/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setPlaylists(res.data.items)
            })
        axios.get(URL + '/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
            })

        axios.get(URL + '/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setUser(res.data)
            })
        axios.get(URL + '/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setRecomendations(res.data.playlists.items)
            })
    }, [])

    return (
        <main className='pl-[345px] mr-10 mt-6 text-white'>
            <section className='today-rec'>
                <h1 className='text-4xl mb-6'>Доброе утро</h1>

                <div className='w-full flex gap-y-5 gap-x-7 flex-wrap'>
                    {
                        playlists.map(item => (
                            <Link to={'/playlist/' + item.id}>
                                <Recomendation
                                    key={item.id}
                                    img={item.images ? item.images[0].url : '/images/playlist-card.png'}
                                    title={item.name}
                                />
                            </Link>
                        ))
                    }
                </div>
            </section>

            <section className='might-like mt-12 text-white'>
                <h2 className='text-3xl mb-6'>Специально для тебя, {user.display_name}</h2>

                <div className='might-like-box w-full flex justify-start flex-wrap '>
                    {
                        recomendations.map(item => (
                            <Link to={'/playlist/' + item.id}>
                                <MultiCard
                                    key={item.id}
                                    img_src={item.images ? item.images[0].url : '/images/playlist-card.png'}
                                    title={item.name}
                                    subtitle={item.owner.display_name}
                                />
                            </Link>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Home

