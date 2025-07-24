import Header from './Header'

const HeroContent = () => {
    return (
        <div>
            <Header />
            <div className='flex items-center m-auto w-[1200px] mt-20'>
                <div className='h-[535px] '>
                    <p className='text-[20px] font-bold text-[#DF6951] font-poppins'>BEST DESTINATION AROUND THE WORLD</p>
                    <h2 className='text-6xl font-volkhov font-bold text-[#181E4B] leading-[89px] mt-[24px] mb-[30px]'>Travel, enjoy and live a new and full life</h2>
                    <p className='text-[16px] font-medium font-poppins leading-[30px] text-[#5E6282] w-[470px] mb-[34px]'>
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>
                    <div className='flex items-center gap-2'>
                        <button className=' px-[27px] py-[19px] hover:cursor-pointer'>Find out more</button>
                        <div className='h-[52px] flex items-center gap-2 hover:cursor-pointer'>
                            <img src="/public/Play-button.svg" className='w-8 h-8 ' alt="" />
                            <span>Play demo</span>
                        </div>
                    </div>
                </div>
                <img className='w-[650px] h-[500px] ' src="/Her-image.svg" alt="" />
            </div>
        </div>

    )
}

export default HeroContent
