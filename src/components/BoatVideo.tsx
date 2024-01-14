import WebSrc from '../assets/web-design2.mp4'

const BoatVideo = () => {
  return (
    <video className='h-100vh w-full object-cover animate-clip-from-top-animation
    shadow-lg' autoPlay muted loop>
        <source src={WebSrc} type="video/mp4" />
    </video>
  )
}

export default BoatVideo
