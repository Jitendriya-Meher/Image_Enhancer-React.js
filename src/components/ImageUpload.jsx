import React from 'react'

const ImageUpload = ({uploadImageHandler}) => {

    const showImageHandler = (e) => {

        const file = e.target.files[0];
        console.log(file);
        
        if( file){
            uploadImageHandler(file);
        }
    }

  return (
    <div className=' bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>

        <label htmlFor="file" className=' block w-full cursor-pointer border-dashed border-2 border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>

            <p className=' text-lg font-medium text-gray-600'>
                Click and Drag to Upload your Image
            </p>

            <input
                type='file'
                hidden
                id='file' 
                onChange={showImageHandler}
            />


        </label>

    </div>
  )
}

export default ImageUpload