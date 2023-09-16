import { home, widgets, wifi, audio3 } from '../constants/icons'
import { ArrowUp, Battery } from './Icons'

export function TaskBar({ startMenu, setStartMenu }) {
    const handleStartMenu = () => {
        setStartMenu(!startMenu)
    }

    return (
        <footer className='absolute bottom-0 w-full flex flex-row justify-between bg-[#202020]/40 backdrop-blur-xl border-t-2 border-white/10 p-1'>
            <section className='grid grid-cols-1'>
                <div className='flex justify-center items-center rounded-md hover:bg-white/10 transition-all p-2'>
                    <img className='h-6 w-6' src={widgets} />
                </div>
            </section>
            <section className='grid grid-cols-3 gap-2'>
                <button onClick={handleStartMenu} className='flex justify-center items-center rounded-md hover:bg-white/10 transition-all p-2'>
                    <img className='h-6 w-6' src={home} />
                </button>
            </section>
            <section className='grid grid-cols-7 gap-1'>
                <div className='flex col-span-1 justify-center items-center rounded-md hover:bg-white/10 transition-all px-2'>
                    <ArrowUp />
                </div>
                <div className='flex col-span-3 justify-center items-center rounded-md hover:bg-white/10 transition-all px-2'>
                    <div className='grid grid-cols-3 gap-2'>
                        <img className='h-4 w-4 invert' src={wifi} />
                        <img className='h-4 w-4 invert' src={audio3} />
                        <Battery />
                    </div>
                </div>
                <div className='max-w-fit flex flex-col col-span-3 justify-center items-end rounded-md hover:bg-white/10 transition-all px-2'>
                    <span className='text-xs text-white'>12:00 p. m.</span>
                    <span className='text-xs text-white'>13/09/2023</span>
                </div>
            </section>
        </footer>
    )
}
