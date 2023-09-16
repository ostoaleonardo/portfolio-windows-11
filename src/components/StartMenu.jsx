import { StartMenuApp } from './StartMenuApp'
import { StartMenuRec } from './StartMenuRec'
import { search, edge, chrome, vscode, spotify, figma, discord, steam, epicgames, settings, recycle } from '../constants/icons'
import { ArrowRight, Power } from './Icons'

const StartMenuAppList = [
    { icon: edge, name: 'Edge' },
    { icon: chrome, name: 'Chrome' },
    { icon: vscode, name: 'VS Code' },
    { icon: figma, name: 'Figma' },
    { icon: spotify, name: 'Spotify' },
    { icon: discord, name: 'Discord' },
    { icon: steam, name: 'Steam', link: 'https://steamcommunity.com/id/ostoaleonardo/' },
    { icon: epicgames, name: 'Epic Games Launcher', link: 'https://store.epicgames.com/es-ES/u/771b7b9686b54fb7a25da86b901ffb92' },
    { icon: settings, name: 'Settings' },
    { icon: recycle, name: 'Recycle Bin' },
]

export function StartMenu() {
    return (
        <div className='absolute bottom-3 left-0 right-0 w-[640px] h-[min(100%_-_24px,_720px)] bg-[#202020]/60 backdrop-blur-2xl border-2 border-white/5 rounded-lg mx-auto z-50'>
            <div className='w-full  flex flex-col p-8'>
                <header className='w-full h-full flex bg-black/20 items-center rounded-full border-2 border-white/5 px-4 py-1 gap-3'>
                    <img className='h-3.5 w-3.5 invert' src={search} />
                    <span className='text-white/50 text-sm'>
                        Search applications, settings and documents
                    </span>
                </header>
                <section className='w-full h-full flex flex-col gap-3 mt-10'>
                    <div className='w-full flex justify-between mb-3'>
                        <span className='text-white font-semibold text-sm'>
                            Pinned
                        </span>
                        <button className='flex text-white text-xs items-center px-2 py-1 rounded bg-white/10 hover:bg-white/[.15] transition'>
                            <span className='mr-2'>
                                All apps
                            </span>
                            <ArrowRight />
                        </button>
                    </div>
                    <div className='w-full grid grid-cols-6 justify-between gap-y-1'>
                        {StartMenuAppList.map((app, index) => (
                            <StartMenuApp key={index} icon={app.icon} name={app.name} link={app.link} />
                        ))}
                    </div>
                </section>
                <section className='w-full h-full flex flex-col gap-3 mt-10'>
                    <div className='w-full flex mb-3'>
                        <span className='text-white font-semibold text-sm'>
                            Recommended
                        </span>
                    </div>
                    <div className='w-full grid grid-cols-2 grid-rows-3 justify-between gap-1'>
                        <StartMenuRec icon={vscode} name='VS Code' />
                        <StartMenuRec icon={spotify} name='Spotify' />
                    </div>
                </section>
            </div>
            <footer className='absolute bottom-0 w-full flex flex-row justify-between items-center bg-black/20 rounded-b-lg px-10 py-3'>
                <div className='flex items-center rounded-md px-3 py-1.5 gap-3 hover:bg-white/10'>
                    <img
                        alt='User avatar'
                        src='https://avatars.githubusercontent.com/u/141528763'
                        className='h-7 w-7 bg-white/20 rounded-full aspect-square' />
                    <span className='text-white text-xs'>
                        OstoaLeonardo
                    </span>
                </div>
                <div className='rounded-md aspect-square p-2 hover:bg-white/10'>
                    <Power />
                </div>
            </footer>
        </div>
    )
}