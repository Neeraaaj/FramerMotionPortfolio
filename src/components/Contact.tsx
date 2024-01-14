
const Contact = () => {
  return (
    <div className=' bg-[#1E1916] from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl m-5 p-15 flex flex-col'>
        <h4 className='text-[#D2BF43]
        text-4xl'>Get In Touch.</h4>
        <h1 className='text-[#D2BF43] text-6xl w-[45vw] mt-10
        font-extrabold'>Do you have a question, an idea or a project you need help with?
        </h1>
        <h1 className='text-[#D2BF43] text-6xl font-extrabold'>Contact Me!</h1>

        <div className='flex flex-col w-[50vw] mt-10' >
            <div className='flex'>
                <button className='bg-[#1E1916] border-2 border-[#D2BF43]
                text-white p-5 rounded-4xl '>patilneeraj2003@gmail.com</button>
                <button className='bg-[#1E1916] border-2 border-[#D2BF43]
                text-white p-5 rounded-4xl ml-4 '>+91-9326576727</button>
            </div>

            <div className='flex mt-5'>
                <a className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[10vw]
                    text-white p-5 rounded-2xl ml-4 
                    cursor-pointer shadow-xl text-center'
                    href='https://twitter.com/NeerajPatil371' target='_blank'>Twitter</a>

    <a className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[10vw]
                    text-white p-5 rounded-2xl ml-4 
                    cursor-pointer shadow-xl text-center'
                    href='https://www.linkedin.com/in/neeraj-patil-539935227/' target='_blank'>LinkedIn</a>
                    <a className='bg-[#1E1916] border-2 border-[#D2BF43]
                w-[10vw]
                    text-white p-5 rounded-2xl ml-4 
                    cursor-pointer shadow-xl text-center'
                    href='https://github.com/Neeraaaj' target='_blank'>Github
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
