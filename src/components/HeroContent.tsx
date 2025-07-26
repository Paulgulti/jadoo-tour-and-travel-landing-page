import Header from './Header'

const HeroContent = () => {
    return (
        <div className=''>
            <Header />
            <div className='h-screen container flex items-center mx-auto pt-5 md:mt-20 pl-2'>
                <div className=' w-full  md:w-[45%] h-full bg-[url(/traveller-mobile.png)] bg-cover bg-no-repeat md:bg-none flex flex-col'>
                    <p className='text-[10px] md:text-[20px] font-semibold text-[#DF6951] font-poppins'>BEST DESTINATIONS AROUND THE WORLD</p>
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-volkhov font-bold text-[#181E4B] lg:leading-15 mt-[24px] mb-[30px] w-[200px] md:w-[90%] lg:w-[470px]'>Travel, enjoy and live a new and full life</h2>
                    <p className='text-[8px] md:text-[16px] w-[200px] font-medium font-poppins md:leading-[30px] text-[#5E6282] md:w-[470px] mb-[34px]'>
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>
                    <div className='flex items-center gap-2'>
                        <button className=' px-[27px] py-[19px] hover:cursor-pointer'>Find out more</button>
                        <div className='h-[52px] flex items-center gap-2 hover:cursor-pointer'>
                            <img src="/play-button.svg" className='w-8 h-8 ' alt="" />
                            <span>Play demo</span>
                        </div>
                    </div>
                </div>
                <img className=' w-full md:h-[400px] lg:h-[500px] hidden md:block' src="/Her-image.svg" alt="" />
            </div>
        </div>
    )
}

export default HeroContent
