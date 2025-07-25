import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const Testimonials = () => {
    const testimonials = [
        { id: crypto.randomUUID(), name: 'Helena Gui', job: 'CEO At Adastra', url: "/helena.jpg", testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquam quis debitis, incidunt soluta repellat ut vel distinctio nobis inventore culpa impedit reiciendis itaque nulla ducimus explicabo omnis! Ut, eaque!' },
        { id: crypto.randomUUID(), name: 'Franklin Staf', job: 'CTO At Adastra', url: "/franklin.jpg", testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquam quis debitis, incidunt soluta repellat ut vel distinctio nobis inventore culpa impedit reiciendis itaque nulla ducimus explicabo omnis! Ut, eaque!' },
        { id: crypto.randomUUID(), name: 'victor Smack', job: 'Project Manager', url: "/victor.jpg", testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquam quis debitis, incidunt soluta repellat ut vel distinctio nobis inventore culpa impedit reiciendis itaque nulla ducimus explicabo omnis! Ut, eaque!' },
        { id: crypto.randomUUID(), name: 'John Barock', job: 'Freelancer', url: "/john.jpg", testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquam quis debitis, incidunt soluta repellat ut vel distinctio nobis inventore culpa impedit reiciendis itaque nulla ducimus explicabo omnis! Ut, eaque!' },
        { id: crypto.randomUUID(), name: 'Jeffrey Stuart', job: 'Artist', url: "/jeffrey.jpg", testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquam quis debitis, incidunt soluta repellat ut vel distinctio nobis inventore culpa impedit reiciendis itaque nulla ducimus explicabo omnis! Ut, eaque!' },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  container mx-auto px-4 mt-5'>
            <div>
                <h2 className='text-xl md:text-2xl w-[500px] font-volkhov font-bold text-[#14183E] mt-2 mb-2 md:mb-5  '>What People Say About Us.</h2>
                <h3 className='text-md md:text-lg font-poppins font-semibold text-[#5E6282] md:mt-[8px] mb-8 md:mb-[60px] '>TESTIMONIALS</h3>
            </div>
            <div className='w-[80%] mx-auto md:mt-6  px-2'>
                <Carousel className=''>
                    <CarouselContent className='p-6'>
                        {testimonials.map(testimonial =>
                            <CarouselItem className='' key={testimonial.id}>
                                <div className='relative px-2 pt-6.5 pb-4 bg-white rounded-xl'>
                                    <div className='absolute top-[-22px] left-[-10px] w-12 h-12'>
                                        <img className='rounded-full' src={testimonial.url} alt="" />
                                    </div>
                                    <div className='font-poppins text-[#5E6282]'>
                                        <p className='text-[14px] md:text-[16px] '>&quot;{testimonial.testimonial}&quot;</p>
                                        <p className='font-semibold text-[16px] md:text-[18px] mt-2'>{testimonial.name}</p>
                                        <p className='text-[14px] '>{testimonial.job}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    )
}

export default Testimonials
