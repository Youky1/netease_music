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
  return instance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}

export const getRankListRequest = () => {
  return instance.get('/toplist/detail');
}

export const getAlbumDetailRequest = id => {
  return instance.get (`/playlist/detail?id=${id}`);
};

export const getSingerInfoRequest = id => {
  return instance.get (`/artists?id=${id}`);
};