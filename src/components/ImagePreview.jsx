import React from 'react'
import Loading from './Loading'

const ImagePreview = ({uploadImage,enhancedImage,loading}) => {
  return (
    <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

        <div className=" bg-white shadow-lg rounded-xl overflow-hidden">

            <h2 className=' text-xl font-semibold text-center bg-gray-800 text-white py-2'>
                Original Image
            </h2>

            {
                uploadImage ? 
                <img src={uploadImage} alt=""
                className=' object-cover w-full h-full' /> 
                :
                <div className=" flex items-center justify-center h-80 bg-gray-200">
                    No Image Selected
                </div>
            }

        </div>


        <div className=" bg-white shadow-lg rounded-xl overflow-hidden">

            <h2 className=' text-xl font-semibold text-center bg-blue-900 text-white py-2'>
                Enhanced Image
            </h2>

            {
                enhancedImage ? 
                <img src={enhancedImage} alt=""
                className=' object-cover w-full h-full' /> 
                :
                loading ? 
                <Loading></Loading> 
                :
                <div className=" flex items-center justify-center h-80 bg-gray-200">
                    No Enhanced Selected
                </div>
            }

        </div>

    </div>
  )
}

export default ImagePreview