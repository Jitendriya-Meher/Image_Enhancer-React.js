import axios from "axios";

const API_KEY = '';
const BASE_URL = 'https://techhk.aoscdn.com';

export const enhancedImageAPI = async (file) => {

    try{
        const taskId = await uploadImage(file);
        console.log('image upload',taskId);

        const enhancedImageData = await pollForEnhanceImage(taskId);
        console.log('enhancedImageAPI',enhancedImageData);

        return enhancedImageData;

    }
    catch(error){
        console.error('Error API:', error);
    }

}

const uploadImage = async (file) => {

    const formData = new FormData();
    formData.append('image_file', file);

    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "X-API-KEY": API_KEY,
                'Content-Type': 'multipart/form-data'
            }
        }
    );

    return data.data.task_id;

}

const fetchEnhancedImage = async (taskId) => {

    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY
            }
        }
    );

    return data.data;
}

const pollForEnhanceImage = async (tskId, retries=0) => {

    const result = await fetchEnhancedImage(tskId);

    if( result.state === 4 ){
        console.log('Processing ...');

        if( retries >= 20){
            throw new Error('Max retries Image processing failed');
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        return pollForEnhanceImage(tskId, retries+1);

    }

    return result;

}