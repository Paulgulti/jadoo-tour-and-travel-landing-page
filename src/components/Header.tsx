import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from './ui/button'
import { useState } from 'react'
import clsx from 'clsx';

const Header = () => {
    const [menuStatus, setMenuStatus] = useState<Boolean>(false);

    return (
        <nav className='container h-[40px] mt-[37px] mx-auto flex items-center justify-between px-4'>
            <h1 className='text-[#181E4B] font-medium text-[44px]'>Jadoo</h1>
            <div className={clsx(
                'absolute md:static md:min-h-fit md:w-auto  flex-col md:items-center md:flex-row min-h-[60vh] w-full  left-0 top-0 px-3 bg-[#181E4B] md:bg-transparent text-white md:text-inherit flex gap-5 md:gap-10 lg:gap-30',
                {
                    'top-[-100%] ': menuStatus === false,
                    'top-[77px]': menuStatus === true,
                }
            )}>
                <ul className='flex flex-col md:flex-row md:items-center gap-5 lg:gap-13 text-[17px] font-sans'>
                    <li className='hover:text-[#5E6282]'><a href='#destinations'>Destinations</a></li>
                    <li className='hover:text-[#5E6282]'><a href='#services'>Services</a></li>
                    <li className='hover:text-[#5E6282]'><a href='#partners'>Partners</a></li>
                    <li className='hover:text-[#5E6282]'><a href='#book'>Book</a></li>
                </ul>
                <div className=' flex flex-col items-start md:flex-row lg:gap-5 gap-5'>
                    <Button className='hover:cursor-pointer text-black' variant={'outline'}>Login</Button>
                    <Button className='hover:cursor-pointer'>Sign up</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>EN
                            <img className='ml-[6.5px] inline w-[9px] h-[4.5px]' src="/Dropdown.svg" alt="" />
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </div>
            </div>
            {menuStatus ? (
                <svg
                    onClick={() => setMenuStatus(false)}
                    className='w-6 h-6 md:hidden hover:cursor-pointer'
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z" fill="#181E4B"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#181E4B"></path> </g>
                </svg>
            ) : (
                <svg
                    onClick={() => setMenuStatus(true)}
                    className='w-6 h-6 md:hidden hover:cursor-pointer'
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#181E4B" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 12L4 12" stroke="#181E4B" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 17L4 17" stroke="#181E4B" strokeWidth="1.5" strokeLinecap="round"></path> </g>
                </svg>
            )}

        </nav>
    )
}

export default Header