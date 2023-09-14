export function ArrowUp({ color }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-up' role='img' viewBox='0 0 512 512' data-flip='false' data-invert='false' data-rounded='false'>
            <path fill={color} d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z'>
            </path>
        </svg>
    )
}

export function Battery() {
    return (
        <span className='relative flex justify-center items-center'>
            {/* <div className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'>
                    <path fill='white' stroke='#f3f3f3' stroke-width='2' d='m8.294 14-1.767 7.068c-.187.746.736 1.256 1.269.701L19.79 9.27A.75.75 0 0 0 19.25 8h-4.46l1.672-5.013A.75.75 0 0 0 15.75 2h-7a.75.75 0 0 0-.721.544l-3 10.5A.75.75 0 0 0 5.75 14h2.544Z'>
                    </path>
                </svg>
            </div> */}
            <div className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='none' viewBox='0 0 24 24'>
                    <path xmlns='http://www.w3.org/2000/svg' fill='white' d='M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h12Zm-.002 1.5H5a1.5 1.5 0 0 0-1.493 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007Z'>
                    </path>
                </svg>
            </div>
            <div className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='none' viewBox='0 0 24 24'>
                    <path fill='white' d='M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h12Zm-.002 1.5H5a1.5 1.5 0 0 0-1.494 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007ZM6 9h10a1 1 0 0 1 .993.883L17 10v4a1 1 0 0 1-.883.993L16 15H6a1 1 0 0 1-.993-.883L5 14v-4a1 1 0 0 1 .883-.993L6 9h10H6Z'>
                    </path>
                </svg>
            </div>
        </span>
    )
}
