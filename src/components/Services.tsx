import clsx from 'clsx'

const Services = () => {
    const services = [
        {id: crypto.randomUUID(), imageSrc: "/satellite-dish.svg", title: "Calculated Weather", desc: "Built Wicket longer admire do barton vanity itself do in it." },
        {id: crypto.randomUUID(), imageSrc: "/Flights.svg", title: "Best Flights", desc: "Engrossed listening. Park gate sell they west hard for the." },
        {id: crypto.randomUUID(), imageSrc: "/microphone.svg", title: "Local Events", desc: "Barton vanity itself do in it. Preferd to men it engrossed listening." },
        {id: crypto.randomUUID(), imageSrc: "/Customization.svg", title: "Customization", desc: "We deliver outsourced aviation services for military customers" }
    ]
    return (
        <div id="services" className='w-[1228px]  mx-auto mt-[97px] mb-[123px]'>
            <h3 className='text-[18px] font-poppins font-semibold text-[#5E6282] text-center'>CATEGORY</h3>
            <h2 className='text-[50px] font-volkhov font-bold text-[#14183E] mt-[10px] mb-[108px] text-center'>We Offer Best Services</h2>
            <div className=' flex gap-[118px]'>
                {services.map(service => 
                    <div key={service.id} className='w-[200px] flex flex-col items-center hover:bg-white  hover:cursor-pointer rounded-3xl hover:shadow-lg px-2 pb-3'>
                        <img
                            className={clsx(
                                {'w-[77px] h-[66px]': service.title === 'Customization'},
                                {'w-[67px] h-[75px]': service.title === 'Local Events'},
                                {'w-[92px] h-[78px]': service.title === 'Calculated Weather'},
                                {'w-[92px] h-[78px]': service.title === 'Best Flights'},
                            )} 
                            src={service.imageSrc} alt="" />
                        <h4 className='text-[20px] font-semibold text-[#1E1D4C] text-center mt-[15px] mb-[15px]'>{service.title}</h4>
                        <p className='text-[16px] font-poppins font-medium text-[#5E6282] text-center'>{service.desc}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services
