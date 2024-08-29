import React from 'react'

const EditMyTopic = () => {
  return (
    <form action="" className='flex flex-col items-center w-full gap-3'>
        <input type="text" placeholder='Enter title' className='border border-white-300 p-5'/>
        <input type="text" placeholder='Enter description' className='border border-white-300 p-5'/>
        <button className='bg-blue-300 font-bold text-black p-5'>Update Topic</button>
    </form>
  )
}

export default EditMyTopic
