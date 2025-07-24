
const BookTrip = () => {
    return (
        <div id="book" className='my-[180px] w-[1114px] mx-auto flex items-center'>
            <div>
                <h3 className='text-[18px] font-poppins font-semibold text-[#5E6282]'>Easy and Fast</h3>
                <h2 className='text-[50px] w-[500px] font-volkhov font-bold text-[#14183E] mt-[8px] mb-[60px] leading-[60px]'>Book Your Next Trip In 3 Easy Steps</h2>
                <div className='w-[395px] flex flex-col gap-[48px] font-poppins text-[16px] text-[#5E6282]'>
                    <div className='flex gap-3 items-center '>
                        <div className='bg-[#F0BB1F] w-[48px] h-[40px] rounded-md flex items-center justify-center'>
                            <img className='w-[25px] h-[25px]' src="/destination.svg" alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>Choose Destination</p>
                            <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <div className='bg-[#F15A2B] w-[48px] h-[40px] rounded-md flex items-center justify-center'>
                            <img className='w-[25px] h-[25px]' src="/payment-card.png" alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>Make payment</p>
                            <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <div className='bg-[#006380] w-[48px] h-[40px] rounded-md flex items-center justify-center'>
                            <img className='w-[25px] h-[25px]' src="/taxi.png" alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>Reach Airport on Selected Date</p>
                            <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-[370px] bg-white mx-auto pt-[20px] pb-[30px] rounded-2xl shadow-trip-box '>
                <div className='w-[321px] h-[161px] mx-auto mb-[20px] '>
                    <img className='w-full h-full object-cover rounded-2xl' src="/women-on-trip.jpg" alt="" />
                </div>
                <div className='w-[321px] mx-auto flex flex-col'>
                    <p className='font-poppins text-[18px] font-medium'>Trip to Greece</p>
                    <p className='font-poppins text-[16px] text-[#84829A]'>14-29 June| By Robbin John</p>
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
                <div className='border flex gap-3 bg-white rounded-xl absolute top-[60%] right-[-44px] p-[10px]'>
                    <div className=''>
                        <img className='rounded-full' src="/catedral.svg" alt="" />
                    </div>
                    <div className='font-poppins'>
                        <p className='text-[#84829A] font-medium text-[14px] tracking-tighter'>on going</p>
                        <p className='text-[18px] font-medium tracking-tight'>Trip to rome</p>
                        <p>40% completed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTrip
