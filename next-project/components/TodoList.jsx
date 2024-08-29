import React from 'react'
import Link from 'next/link'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
const getTopics = async() =>{
  try{
    const res = await fetch("http://localhost:3000/api/topics",{
      cache:"no-store",
    });
    if(!res.ok){
      throw new Error("Failed to fetch");
    }
    return res.json;
  } catch(e){
    console.log("error loading ",e);
  }
}
const TodoList = async() => {
  const { topics } = await getTopics();
  return (
    <>
    {topics.map((t)=>(
      <div className='p-4 border border-slate-800 my-3 flex justify-between w-2/6'>
        <div>
          <h2 className='font-bold text-2xl'>{t.title}</h2>
          <p>{t.description}</p>
        </div>
        <div>
          <button><RiDeleteBinLine fontSize={'25px'} color='red' style={{display:'inline-block',marginRight:'5px'}}/></button>
          <Link href={`/edit/${t._id}`}><FaEdit fontSize={'25px'} style={{display:'inline-block'}}/></Link>
        </div>
      </div>
    ))}
    </>
  )
}

export default TodoList
