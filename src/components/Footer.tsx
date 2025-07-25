
const Footer = () => {
    return (
        <div className='mb-5 mx-auto font-poppins border border-red-500 container px-4 mt-5'>
            <div className=' flex gap-4 md:gap-10 flex-col md:flex-row'>
                <div className='w-[200px]'>
                    <h4 className='text-[#181E4B] font-medium text-[44px]'>Jadoo</h4>
                    <p className='text-[13px] font-medium text-[#5E6282]'>Book your trip in minute, get full
                        Control for much longer.
                    </p>
                </div>
                <div>
                    <h4 className='md:text-[21px] text-black font-bold mb-2.5'>Useful Links</h4>
                    <ul>
                        <li className='text-[13px] text-[#5E6282] font-medium mb-1.5'><a href="">Privacy Policy</a></li>
                        <li className='text-[13px] text-[#5E6282] font-medium mb-1.5'><a href="">Billing & Payment</a></li>
                        <li className='text-[13px] text-[#5E6282] font-medium mb-1.5'><a href="">Help/FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='md:text-[21px] text-black font-bold mb-2.5'>Contact Us</h4>
                    <ul>
                        <li className='text-[13px] text-[#5E6282] font-semibold mb-1.5'>Address: <br /><span className='font-medium'>Bole, Addis Ababa, Ethiopia</span></li>
                        <li className='text-[13px] text-[#5E6282] font-semibold mb-1.5'>Mobile: <br /><span className='font-medium'>+251 9********</span></li>
                        <li className='text-[13px] text-[#5E6282] font-semibold mb-1.5'>Email: <br /><span className='font-medium'>Jadoo@gmail.com</span></li>
                    </ul>
                </div>
                <div>
                    <h4 className='md:text-[21px] text-black font-bold mb-2.5'>More</h4>
                    <ul>
                        <li className='text-[13px] text-[#5E6282] font-medium mb-1.5'><a href="">Airlinefees</a></li>
                        <li className='text-[13px] text-[#5E6282] font-medium mb-1.5'><a href="">Airline</a></li>
                        <li className='text-[13px] text-[#5E6282] font-medium mb-1.5'><a href="">Low fare tips</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='md:text-[21px] text-black font-bold mb-2.5'>Follow Us</h4>
                    <div className='flex gap-3'>
                        <div className='w-10 h-10 bg-white flex items-center justify-center rounded-full hover:scale-[1.15]'>
                            <a href="">
                                <img className='w-5 h-5' src="/Facebook-Icon.svg" alt="" />
                            </a>
                        </div>
                        <div className='w-10 h-10 bg-white flex items-center justify-center rounded-full hover:scale-[1.15]'>
                            <a href="">
                                <img className='w-6 h-6' src="/instagram.svg" alt="" />
                            </a>
                        </div>
                        <div className='w-10 h-10 bg-white flex items-center justify-center rounded-full hover:scale-[1.15]'>
                            <a href="">
                                <img className='w-6 h-6' src="/twitter-logo.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-[14px] font-medium text-[#5E6282] mt-10'>
                <p className='text-center'>All rights reserved @jadoo.com</p>
                <p className='text-center'>2025</p>
            </div>

        </div>
    )
}

export default Footer
