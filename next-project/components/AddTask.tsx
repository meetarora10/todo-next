import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { LuFilePlus2 } from "react-icons/lu";
import Link from 'next/link';
const AddTask = () => {
  return (
    <div className="w-2/6 mt-9 p-2 flex justify-between">
        <Link href={"add"}><button className="but"><LuFilePlus2 style={{display:'inline-block'}}/> TODO</button></Link>
        <IoIosSearch cursor={'pointer'} fontSize={'35px'} style={{backgroundColor:'white',borderRadius:'5px'}}/>
    </div>
  )
}

export default AddTask
