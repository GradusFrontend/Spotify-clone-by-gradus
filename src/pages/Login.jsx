
function Login() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
    const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
    const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
    const RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE

    let url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=user-read-recently-played,user-top-read`
    return ( 
        <main className=" w-screen h-screen flex items-center justify-center">
            <section className="flex items-center flex-col gap-6 w-[400px] text-white">
                <img className="w-[50%] object-contain" src="/icons/big-logo.svg" alt="logo" />
                <h2 className="text-3xl">Войти с помощью Spotify</h2>
                <a href={url}>
                    <button className="text-black font-medium bg-[#1cd55f] rounded px-5 py-2 transition duration-300 ease-in-out hover:bg-[#1cd541] hover:scale-[1.05]">Login with Spotify</button>
                </a>
            </section>
        </main>
     );
}

export default Login;