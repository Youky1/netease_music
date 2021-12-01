import { instance } from './config';

export const getBannerRequest = () => {
    return instance.get('/banner')
}

export const getRecommendListRequest = () => {
    return instance.get ('/personalized');
}