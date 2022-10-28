import axios from 'axios';

const search = axios.create();

search.defaults.baseURL = 'https://dapi.kakao.com/v2/search';

search.defaults.headers.common['Authorization'] = 'KakaoAK';

export default search;
