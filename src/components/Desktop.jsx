import { useState } from 'react'
import { DesktopIcon } from './DesktopIcon'
import { recycle } from '../assets/images/icons/win'
import { vscode, figma, github, linkedin, behance, spotify, discord } from '../assets/images/icons/programs'

const icons = [
    { icon: recycle, name: 'Recycle Bin' },
    { icon: vscode, name: 'VS Code' },
    { icon: github, name: 'GitHub', link: 'https://github.com/ostoaleonardo' },
    { icon: linkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/ostoa-leonardo/' },
    { icon: behance, name: 'Behance', link: 'https://www.behance.net/ostoaleonardo' },
    { icon: figma, name: 'Figma' },
    { icon: spotify, name: 'Spotify' },
    { icon: discord, name: 'Discord' },
]

export function Desktop() {
    const [selectedIcon, setSelectedIcon] = useState(null)

    const handleIconClick = (index) => {
        setSelectedIcon(index)
    }

    return (
        <section className='w-fit h-fit grid grid-rows-6 grid-cols-2 grid-flow-col gap-6 p-6'>
            {icons.map((icon, index) => (
                <DesktopIcon
                    key={index}
                    icon={icon.icon}
                    name={icon.name}
                    link={icon.link}
                    isSelected={selectedIcon === index}
                    onClick={() => handleIconClick(index)}
                />
            ))}
        </section>
    )
}