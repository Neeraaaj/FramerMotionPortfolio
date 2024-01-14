
const BoatVideo = () => {
  return (
    <video className='h-100vh w-full object-cover animate-clip-from-top-animation
    shadow-lg' autoPlay muted loop>
        <source src='src/assets/web-design2.mp4' type="video/mp4" />
    </video>
  )
}

export default BoatVideo
