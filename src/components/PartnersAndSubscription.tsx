
const PartnersAndSubscription = () => {
    const partners = [
        { id: crypto.randomUUID(), url: '/ethiopian-airlines.svg' },
        { id: crypto.randomUUID(), url: '/jetstar-airways.svg' },
        { id: crypto.randomUUID(), url: '/expedia.svg' },
        // { id: crypto.randomUUID(), url: '/src/assets/azerbaijan-airlines.svg' },
        { id: crypto.randomUUID(), url: '/singapore-airlines.svg' },
    ]
    return (
        <div id="partners" className='px-4 container mx-auto'>
            <h2 className='text-xl md:text-2xl font-volkhov font-bold text-[#14183E] mt-2 md:mb-10 '>Our Partners</h2>
            <div className='flex items-center h-[50px]  gap-8 '>
                {partners.map(partner =>
                    <div key={partner.id} className='w-[200px] '>
                        <img className='' src={partner.url} alt="" />
                    </div>
                )}
            </div>
            <div className='bg-[#dfd7f9c8] w-[100%] md:mt-10 py-5 rounded-b-xl  md:rounded-b-3xl rounded-tr-xl md:rounded-tr-3xl rounded-tl-[100px] mt-8'>
                <h2 className='lg:w-[800px] w-[70%] mx-auto text-center font-poppins font-semibold text-[12px] md:text-[20px] lg:text-[33px] text-[#5E6282] mb-4'>Subscribe to get information, latest news and other
                    interesting offers about Jadoo</h2>
                <form action="" className='text-center '>
                    <input type="email" placeholder='Your email' className='bg-white lg:w-[320px] lg:h-[45px] text-[14px] px-5 mr-5' />
                    <button className='bg-red-400 h-[35px] lg:h-[45px] mt-2 md:mt-0 px-4 font-sans text-white font-semibold lg:text-[17px] rounded-lg hover:cursor-pointer hover:bg-red-400/90'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default PartnersAndSubscription
