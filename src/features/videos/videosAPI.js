import axios from "../../utils/axios";


const getVideos = async (tagsSelection, search = '') => {
    let queryString = tagsSelection?.length > 0 ? tagsSelection.map(tag => `tags_like=${tag}`).join('&') : null;
    queryString += `&q=${search}`;
    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
}

export default getVideos;