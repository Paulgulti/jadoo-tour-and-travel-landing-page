
const PartnersAndSubscription = () => {
    const partners = [
        { id: crypto.randomUUID(), url: '/src/assets/ethiopian-airlines.svg' },
        { id: crypto.randomUUID(), url: '/src/assets/jetstar-airways.svg' },
        { id: crypto.randomUUID(), url: '/src/assets/expedia.svg' },
        // { id: crypto.randomUUID(), url: '/src/assets/azerbaijan-airlines.svg' },
        { id: crypto.randomUUID(), url: '/src/assets/singapore-airlines.svg' },
    ]
    return (
        <div id="partners" className='py-[100px] w-[1073px] mx-auto'>
            <div className='flex items-center h-[100px] gap-8'>
                {partners.map(partner =>
                    <div key={partner.id} className='w-[200px] '>
                        <img className='' src={partner.url} alt="" />
                    </div>
                )}
            </div>
            <div className='bg-[#DFD7F9] mt-10 py-5  rounded-b-3xl rounded-t-3xl rounded-tl-[300px]'>
                <h2 className='w-[800px] mx-auto text-center font-poppins font-semibold text-[33px] text-[#5E6282] mb-4'>Subscribe to get information, latest news and other
interesting offers about Jadoo</h2>
                <form action="" className='text-center'>
                    <input type="email" placeholder='Your email' className='bg-white w-[320px] h-[45px] text-[14px] px-5 mr-5' />
                    <button className='bg-red-400 h-[45px] px-4 font-sans text-white font-semibold text-[17px] rounded-lg hover:cursor-pointer hover:bg-red-400/90'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default PartnersAndSubscription
