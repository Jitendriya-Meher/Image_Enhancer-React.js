import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/apiCalling';

const Home = () => {

    const [uploadImage, setUploadImage] = useState(null);

    const [enhancedImage, setEnhancedImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const uploadImageHandler = async ( file ) => {

        console.log(URL.createObjectURL(file));

        setUploadImage(URL.createObjectURL(file));

        setLoading(true);

        try{
            const enhancedUrl = await enhancedImageAPI(file);

            setEnhancedImage(enhancedUrl?.image);
        }
        catch(error){
            console.error('Error processing image', error);
        }

        setLoading(false);

    }

  return (
    <
    // div 
    // className=' w-full flex flex-col items-center justify-center'
    >

        <ImageUpload
            uploadImageHandler={uploadImageHandler}
        ></ImageUpload>

        <ImagePreview
            loading={loading}
            enhancedImage={enhancedImage}
            uploadImage={uploadImage}
        ></ImagePreview>

    </>
  )
}

export default Home