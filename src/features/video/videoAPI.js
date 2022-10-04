import axios from "../../utils/axios";


// get video item 
const getVideoItem = async (videoId) => {
    const response = await axios.get(`/videos/${videoId}`);
    return response.data;
}

export default getVideoItem;