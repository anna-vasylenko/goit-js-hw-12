import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function getImages(q) {
  const res = await axios.get('', {
    params: {
      key: '44962724-2fcdbdaf7fb299db2b6841432',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
  return res.data;
}
