export function DesktopIcon({ icon, name, link, isSelected, onClick }) {
    const commonStyles = 'flex flex-col justify-center items-center rounded-sm px-5 py-1 gap-1 hover:bg-white/10'
    const clickedClass = isSelected ? 'bg-white/30' : ''

    const renderContent = (
        <div
            onClick={onClick}
            className={`${commonStyles} ${clickedClass}`}
        >
            <img className='h-12 w-12' src={icon} alt={name} />
            <span className='text-white text-xs'>{name}</span>
        </div>
    )

    return link ? (
        <a href={link} target='_blank' rel='noreferrer'>
            {renderContent}
        </a>
    ) : (
        renderContent
    )
}
