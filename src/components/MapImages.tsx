import Map1 from '../assets/map_1.png'
import Map2 from '../assets/map_2.png'

const MapImages = () => {
  return (
    <div className='absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden'>
        <img src={Map1} />
        <img src={Map2} />
    </div>
  )
}

export default MapImages
