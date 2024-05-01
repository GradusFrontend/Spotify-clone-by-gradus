import { Audio } from 'react-loader-spinner'


export default function AudioSpinner() {
    return (
        <Audio
            height="27"
            width="27"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    )
}