
const Destinations = () => {
  const destinations = [
    {id: crypto.randomUUID(), destinationImage: "/Rome.jpg", location: "Rome, Italy", price: "$5.43k", tripDays: "10 Days Trip"},
    {id: crypto.randomUUID(), destinationImage: "/london.jpg", location: "London, Uk", price: "$4.2k", tripDays: "12 Days Trip"},
    {id: crypto.randomUUID(), destinationImage: "/europe.jpg", location: "Full Europe", price: "$15k", tripDays: "28 Days Trip"},
  ];
  
  return (
    <div id="destinations" className='border mt-8 border-red-500 container mx-auto px-4'>
      <h2 className='text-xl md:text-2xl font-volkhov font-bold text-[#14183E]  text-center'>Top Destinations</h2>
      <h3 className='text-md md:text-lg font-poppins font-semibold text-[#5E6282] text-center mt-2 mb-5 md:mb-5'>Top Selling</h3>
      <div className='flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-8 '>
        {destinations.map(destination => 
          <div className='flex flex-col bg-white w-[314px] font-poppins font-medium text-[#5E6282] rounded-xl'>
            <img className='rounded-t-xl' src={destination.destinationImage} alt="" />
            <div className='px-6 py-3'>
              <div className='flex justify-between mb-2 text-[18px]'>
                <p>{destination.location}</p>
                <p>{destination.price}</p>
              </div>
              <div className='flex gap-2'>
                <img src="/src/assets/navigation.svg" alt="" />
                <p className='text-[16px]'>{destination.tripDays}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Destinations
