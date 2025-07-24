import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from './ui/button'

const Header = () => {
    return (
        <nav className='w-[1160px] h-[40px] mt-[37px] mx-auto flex  items-center justify-between'>
            <h1 className='text-[#181E4B] font-medium text-[44px]'>Jadoo</h1>
            <ul className='flex gap-13 text-[17px] font-sans'>
                <li className='hover:text-[#5E6282]'><a href='#destinations'>Destinations</a></li>
                <li className='hover:text-[#5E6282]'><a href='#services'>Services</a></li>
                <li className='hover:text-[#5E6282]'><a href='#partners'>Partners</a></li>
                <li className='hover:text-[#5E6282]'><a href='#book'>Book</a></li>
                <div className='flex gap-5'>
                    <Button className='hover:cursor-pointer' variant={'outline'}>Login</Button>
                    <Button className='hover:cursor-pointer'>Sign up</Button>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>EN
                        <img className='ml-[6.5px] inline w-[9px] h-[4.5px]' src="/src/assets/Dropdown.svg" alt="" />
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </ul>
        </nav>
    )
}

export default Header