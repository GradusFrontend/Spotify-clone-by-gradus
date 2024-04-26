import { useEffect, useState } from "react"
import MultiCard from "../components/MultiCard"
import Recomendation from "../components/Recomendation"
import Layout from "../layout/Layout"
import axios from "axios"


function Home() {
    const token = localStorage.getItem('token')
    const URL = import.meta.env.VITE_API_URL
    const [playlists, setPlaylists] = useState([])


    useEffect(() => {
        axios.get(URL + '/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data.items);
                setPlaylists(res.data.items)
            })
    }, [])

    return (
        <main className='pl-[345px] mr-10 mt-6 text-white'>
            <section className='today-rec'>
                <h1 className='text-4xl mb-6'>Good morning</h1>

                <div className='w-full flex gap-y-5 gap-x-7 flex-wrap'>
                    {
                        playlists.map(item => {
                            item.images ? (
                                <Recomendation img={item.images[0].url} title={item.name} />
                            ) : (
                                <Recomendation img={'/images/playlist-card.png'} title={item.name} />
                            )
                        })
                    }
                </div>
            </section>

            <section className='might-like mt-12 text-white'>
                <h2 className='text-3xl mb-6'>Shows you might like</h2>

                <div className='might-like-box w-full flex justify-start flex-wrap gap-y-5 gap-x-7'>
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                    <MultiCard
                        img_src={'/images/playlist-card.png'}
                        title={'This MultiCard'}
                        subtitle={'Subtitle'}
                    />
                </div>
            </section>
        </main>
    )
}

export default Home

