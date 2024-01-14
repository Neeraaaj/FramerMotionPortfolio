
const Contact = () => {
  return (
   <div className=' bg-[#1E1916] from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl m-5 p-15 flex flex-col'>
        <h4 className='text-[#D2BF43]
        text-4xl'>Get In Touch.</h4>
        <h1 className='text-[#D2BF43] text-4xl sm:text-4xl lg:text-7xl md:text-5xl w-[45vw] mt-10
        font-extrabold'>Do you have a question, an idea or a project you need help with?
        </h1>
        <h1 className='text-[#D2BF43] text-4xl font-extrabold mt-5 sm:text-4xl lg:text-6xl md:text-5xl'>Contact Me!</h1>

        <div className='flex flex-col w-[50vw] mt-10' >
            <div className='flex flex-col'>
                <button className='bg-[#1E1916] border-2 border-[#D2BF43]
                text-white p-5 rounded-4xl
                w-[fit-content] text-[10px] sm:text-[10px]
                lg:text-[50px]'>patilneeraj2003@gmail.com</button>
                <button className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[fit-content]
                text-white p-5 rounded-4xl mt-5
                text-[10px] sm:text-[10px]
                lg:text-[50px]'>+91-9326576727</button>
            </div>

            <div className='flex mt-5 flex-wrap lg:flex-row sm:flex-wrap md:flex-row'>
                <a className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[fit-content]
                    text-white p-5 rounded-2xl 
                    cursor-pointer shadow-xl text-center'
                    href='https://twitter.com/NeerajPatil371' target='_blank'>Twitter</a>

    <a className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[fit-content]
                    text-white p-5 rounded-2xl m-1
                    cursor-pointer shadow-xl text-center'
                    href='https://www.linkedin.com/in/neeraj-patil-539935227/' target='_blank'>LinkedIn</a>
                    <a className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[fit-content]
                    text-white p-5 rounded-2xl 
                    cursor-pointer shadow-xl text-center'
                    href='https://github.com/Neeraaaj' target='_blank'>Github
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
