import video from '../assets/PoweBI.mp4'
import File from '../assets/Links.png'

const Video = () => {
  return (
    <div className='p-10 h-[80vh]' style={{borderRadius: "0 0 100px 100px", background: `url(${File})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <h1 className='text-black text-5xl font-extrabold text-center p-5 bg-white rounded-4xl' style={{background: "white"}}>Beyond the Screen: Web Development and Educational Ventures</h1>
        <div className="relative mx-auto border-gray-700 mt-5 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
        <video controls>
            <source src={video} type='video/mp4' />
        </video>
    </div>
</div>
<div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
</div>
    </div>
  )
}

export default Video
