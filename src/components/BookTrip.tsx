
const BookTrip = () => {
    return (
        <div id="book" className='mt-8 container mx-auto flex flex-col md:flex-row md:items-center px-2'>
            <div>
                <h2 className='text-xl md:text-2xl  font-volkhov font-bold text-[#14183E] mt-2 mb-2  '>Book Your Next Trip In 3 Easy Steps</h2>
                <h3 className='text-md md:text-lg font-poppins font-semibold text-[#5E6282] mb-2'>Easy and Fast</h3>
                <div className='md:hidden relative w-[250px] bg-white pt-[20px] pb-[30px] rounded-2xl shadow-trip-box '>
                    <div className='w-[90%] h-[120px] mx-auto mb-[20px] '>
                        <img className='w-full h-full object-cover rounded-2xl' src="/women-on-trip.jpg" alt="" />
                    </div>
                    <div className='w-[90%] mx-auto flex flex-col'>
                        <p className='font-poppins text-[14px] font-medium'>Trip to Greece</p>
                        <p className='font-poppins text-[12px] text-[#84829A]'>14-29 June| By Robbin John</p>
                        <div className='flex gap-3 mt-[13px] mb-[20px]'>
                            <div className='w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-100'>
                                <img className='w-[12px] h-[12px]' src="/leaf.svg" alt="" />
                            </div>
                            <div className='w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-100'>
                                <img className='w-[12px] h-[12px]' src="/map.svg" alt="" />
                            </div>
                            <div className='w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-100'>
                                <img className='w-[12px] h-[12px]' src="/send.svg" alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-[16px] h-[16px]' src="/building.svg" alt="" />
                                <p className='font-poppins font-medium text-[#84829A] text-[12px]'>24 people going</p>
                            </div>
                            <img className='w-[20px] h-[19px] ' src="/heart.svg" alt="" />
                        </div>
                    </div>
                    <div className='border flex gap-3 bg-white rounded-xl absolute top-[60%] right-[-44px] p-[10px]'>
                        <div className=''>
                            <img className='rounded-full' src="/catedral.svg" alt="" />
                        </div>
                        <div className='font-poppins'>
                            <p className='text-[#84829A] font-medium text-[12px] tracking-tighter'>on going</p>
                            <p className='text-[14px] font-medium tracking-tight'>Trip to rome</p>
                            <p className=" font-medium text-[12px]">40% completed</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className='md:w-[395px] flex flex-col gap-[48px] font-poppins text-[16px] text-[#5E6282]'>
                        <div className='flex gap-3 items-center '>
                            <div className='bg-[#F0BB1F] w-[48px] h-[40px] rounded-md flex items-center justify-center'>
                                <img className='w-[25px] h-[25px]' src="/destination.svg" alt="" />
                            </div>
                            <div className="w-[250px]">
                                <p className='font-bold'>Choose Destination</p>
                                <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <div className='bg-[#F15A2B] w-[48px] h-[40px] rounded-md flex items-center justify-center'>
                                <img className='w-[25px] h-[25px]' src="/payment-card.png" alt="" />
                            </div>
                            <div className="w-[250px]">
                                <p className='font-bold'>Make payment</p>
                                <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <div className='bg-[#006380] w-[48px] h-[40px] rounded-md flex items-center justify-center'>
                                <img className='w-[25px] h-[25px]' src="/taxi.png" alt="" />
                            </div>
                            <div className="w-[250px]">
                                <p className='font-bold'>Reach Airport on Selected Date</p>
                                <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block relative md:w-[220px] lg:w-[370px] bg-white mx-auto md:pt-[10px] md:pb-[20px] lg:pt-[20px] lg:pb-[30px] rounded-2xl shadow-trip-box md:mr-12 '>
                <div className='w-[90%] md:h-[100px] lg:h-[180px] mx-auto mb-[20px] '>
                    <img className='w-full h-full object-cover rounded-2xl' src="/women-on-trip.jpg" alt="" />
                </div>
                <div className='w-[90%] mx-auto flex flex-col'>
                    <p className='font-poppins text-[18px] font-medium'>Trip to Greece</p>
                    <p className='font-poppins md:text-[14px] lg:text-[16px] text-[#84829A] line-clamp-1'>14-29 June | By Robbin John</p>
                    <div className='flex gap-3 mt-[13px] mb-[20px]'>
                        <div className='w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-100'>
                            <img className='w-[14px] h-[14px]' src="/leaf.svg" alt="" />
                        </div>
                        <div className='w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-100'>
                            <img className='w-[14px] h-[14px]' src="/map.svg" alt="" />
                        </div>
                        <div className='w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-100'>
                            <img className='w-[14px] h-[14px]' src="/send.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1'>
                            <img className='w-[16px] h-[16px]' src="/building.svg" alt="" />
                            <p className='font-poppins font-medium text-[#84829A] '>24 people going</p>
                        </div>
                        <img className='w-[20px] h-[19px] ' src="/heart.svg" alt="" />
                    </div>
                </div>
                <div className='border flex gap-3 bg-white rounded-xl absolute md:top-[60%] lg:top-[60%] md:right-[-20px] lg:right-[-44px] lg:p-[10px] p-[5px]'>
                    <div className=''>
                        <img className='rounded-full' src="/catedral.svg" alt="" />
                    </div>
                    <div className='font-poppins'>
                        <p className='text-[#84829A] font-medium text-[14px] tracking-tighter'>on going</p>
                        <p className='md:text-[14px] lg:txt-[18px] font-medium tracking-tight'>Trip to rome</p>
                        <p className=" font-medium text-[12px]">40% completed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTrip
