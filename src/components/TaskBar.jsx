import { ArrowUp, Battery } from './Icons'
import home from '../assets/images/icons/ui/home.png'
import widgets from '../assets/images/icons/ui/widgets.png'

export function TaskBar() {
    return (
        <footer className='absolute bottom-0 w-full flex flex-row justify-between bg-[#202020]/40 backdrop-blur-xl border-t-2 border-white/10 p-1'>
            <section className='grid grid-cols-1'>
                <div className='flex justify-center items-center rounded-md hover:bg-white/10 transition-all p-2'>
                    <img className='h-6 w-6' src={widgets} />
                </div>
            </section>
            <section className='grid grid-cols-3 gap-2'>
                <div className='flex justify-center items-center rounded-md hover:bg-white/10 transition-all p-2'>
                    <img className='h-6 w-6' src={home} />
                </div>
            </section>
            <section className='grid grid-cols-7 gap-1'>
                <div className='flex col-span-1 justify-center items-center rounded-md hover:bg-white/10 transition-all px-2'>
                    <ArrowUp color='white' />
                </div>
                <div className='flex col-span-3 justify-center items-center rounded-md hover:bg-white/10 transition-all px-2'>
                    <div className='grid grid-cols-3 gap-2'>
                        <img className='h-4 w-4 invert' src='https://win11.blueedge.me/img/icon/ui/wifi.png' />
                        <img className='h-4 w-4 invert' src='https://win11.blueedge.me/img/icon/ui/audio3.png' />
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
