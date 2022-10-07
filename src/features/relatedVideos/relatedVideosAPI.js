import axios from "../../utils/axios";


const getRelatedVideos = async ({ id, tags = [], author = '' }) => {
    const limit = 5;

    let queryString = tags?.length > 0 ? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}`;
    queryString += `&author_like=${author}`

    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
}

export default getRelatedVideos;