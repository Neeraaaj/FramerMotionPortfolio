
const BoatVideo = () => {
  return (
    <video className='h-100vh w-full object-cover animate-clip-from-top-animation
    shadow-lg' autoPlay muted loop>
        <source src={"https://cdn.dribbble.com/userupload/3738676/file/original-80c2e8faa083b3fbf34bacc067ad8614.mp4"} type="video/mp4" />
    </video>
  )
}

export default BoatVideo
