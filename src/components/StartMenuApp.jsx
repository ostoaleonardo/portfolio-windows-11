export function StartMenuApp({ icon, name, link }) {
    const renderContent = (
        <div className='w-full h-[84px] flex flex-col items-center rounded-md py-2 gap-1 hover:bg-white/10'>
            <img className='h-9 w-9' src={icon} />
            <span className='text-white text-xs text-center'>{name}</span>
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