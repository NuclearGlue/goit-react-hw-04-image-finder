import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyApi = '24778461-5d71b0865fcbfdadabb130a0c';

export const fetchImages = async (searchQuery, quantity) => {
  const response = await axios
    .get(`/?q=${searchQuery}`, {
      params: {
        key: keyApi,
        page: 1,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: quantity,
      },
    })
    .then(result => result.data.hits)
    .then(images => {
      return images;
    });

  return response;
};

export default {
  fetchImages,
};
