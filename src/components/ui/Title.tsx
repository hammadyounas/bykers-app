import React from 'react'

export default function Title({title}: {title: string}) {
    return (
        <div className='w-[95%] max mx-auto bg-white  lg:py-6 py-4 lg:px-10 px-2 flex justify-between items-center'>
            <div className='max-lg:pt-5'>
            <p className='lg:text-2xl sm:text-xl text-lg font-semibold text-gray-800'>{title}</p>
            </div>

            <div className=' max-lg:pt-5  flex cursor-pointer'>
            <i className="fa-solid fa-user sm:w-10 sm:h-10 h-7 w-7 bg-gray-200 flex items-center justify-center text-center rounded-full text-secondary-light text-center max-sn:text-sm"></i>
            <i className="fa-solid fa-gear ml-2 sm:w-10 sm:h-10 h-7 w-7 bg-gray-200 flex items-center justify-center text-center rounded-full text-secondary-light text-center max-sn:text-sm"></i>
            </div>
        </div>
    )
}
