import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    //      useEffect(() => {
    //         fetch('https://api.github.com/users/Amaan1911').then((response) => {
    //             response.json().then((data) => {
    //                 console.log(data)
    //                 setData(data)
    //             })
    //         })



    // },[])
  return (
    <div
    className=' text-center m-4 p-4 bg-black
    text-white text-3xl rounded-lg'
    
    >
        <h1 className='text-3xl font-bold'>Github Followers : {data.followers}</h1>
        <img src={data.avatar_url} alt="avatar" className='w-10 h-10 rounded-full '  />
        <p className='text-sm text-gray-500'>
            This is the Github page.
        </p>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/Amaan1911')
    return await response.json()
    
}
