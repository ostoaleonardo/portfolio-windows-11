export function DesktopIcon({ icon, name, isSelected, onClick }) {
    const clickedClass = isSelected ? 'bg-white/30' : '';

    return (
        <div
            onClick={onClick}
            className={`flex flex-col justify-center items-center rounded-sm px-5 py-1 gap-1 hover:bg-white/10 ${clickedClass}`}>
            <img className='h-12 w-12' src={icon} />
            <span className='text-white text-xs'>{name}</span>
        </div>
    )
}
