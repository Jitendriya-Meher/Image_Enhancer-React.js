import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className=' flex items-center flex-col justify-center min-h-screen bg-gray-100 py-8 px-4'>

      <div className="text-center mb-8">

        <h1 className=' text-5xl font-bold text-gray-800 mb-2'>
          AI image Enhancer
        </h1>

        <p className=' text-lg text-gray-500'>
          By Jitendriya Meher
        </p>

      </div>

      <Home></Home>

      <div className=" text-lg text-gray-500 mt-6">

        <p>
          Upload your image and let AI enhance to you in seconds.
        </p>

      </div>

    </div>
  )
}

export default App