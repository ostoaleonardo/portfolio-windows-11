export function StartMenuRec({ icon, name }) {
    return (
        <div className='w-full h-full flex flex-row items-center rounded-md px-2 py-3 gap-4 hover:bg-white/10'>
            <img className='h-9 w-9' src={icon} />
            <div className='flex flex-col items-start'>
                <span className='text-white text-xs text-center'>{name}</span>
                <span className='text-white/50 text-xs text-center'>Recently added</span>
            </div>
        </div>
    )
}