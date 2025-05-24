import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()
  return (
    <div
      className="text-center m-4 p-4 bg-black bg-opacity-50
    text-white text-3xl rounded-lg"
    >
      <h1 className="text-3xl font-bold">User : {userid}</h1>
      <p className="text-sm text-gray-500">This is the User page.</p>
    </div>
  );
}

export default User