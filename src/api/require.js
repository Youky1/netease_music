import { instance } from './config';

export const getBannerRequest = () => {
    return instance.get('/banner')
}

export const getRecommendListRequest = () => {
    return instance.get ('/personalized');
}

export const getHotSingerListRequest = (count) => {
  return instance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category, alpha, count) => {
  console.log(alpha)
  return instance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}