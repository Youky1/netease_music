import React, { useState, useEffect } from "react";
import FixedContainer from '../../baseUI/fixedContainer';
import {
  HeaderContainer,
  HotWordsContainer,
  SuggestContainer,
  Title,
} from './style';
import { useNavigate } from 'react-router-dom';
import {
  getHotKeyWordsRequest,
  getSuggestListRequest
} from '../../api/require';
import Loading from '../../baseUI/loading';
import { isValidObject, getName } from '../../api/utils';

function Search() {
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState('');       // 搜索值
  const [hotWordsList, setHotWordsList] = useState([]);   // 热门搜索词
  const [suggestList, setSuggestList] = useState({});     // 推荐列表
  const [isLoading, setIsLoading] = useState(-2);         // 加载状态

  // 获取热门搜索词
  useEffect(() => {
    getHotKeyWordsRequest()
    .then(res => {
      setHotWordsList(res.result.hots);
      setIsLoading(isLoading+1);
    })
    .catch(e => console.log(e))
  },[])

  // 获取推荐列表
  useEffect(() => {
    getSuggestListRequest()
    .then(res => {
      setSuggestList(res.result);
      setIsLoading(isLoading+1);
    })
    .catch(e => console.log(e))
  },[])


  // 热门搜索JSX
  const renderHotWords = hotWordsList.map((item, index) => (
    <div className="word" key={index}>{item.first}</div>
  ))

  // 推荐专辑JSX
  const renderAlbums = () => (
    <>
      <p className="suggest-title">推荐专辑：</p>
      {
        suggestList.albums.map((item, index) => (
          <div key={index} className="albums-item">
            <span>{item.name}</span>
            <span> - {item.artist.name}</span>
          </div>
        ))
      }
    </>
  )

  // 推荐歌手JSX
  const renderArtist = () => (
    <>
      <p className="suggest-title">推荐歌手：</p>
      {
        suggestList.artists.map((item,index) => (
          <div className="artist-item" key={index}>
            <img src={item.picUrl} alt="歌手图片" />
            <span>{item.name}</span>
          </div>
        ))
      }
    </>
  )

  // 推荐歌曲JSX
  const renderSongs = () => (
    <>
      <p className="suggest-title">推荐歌曲</p>
      {
        suggestList.songs.map((item,index) => (
          <div className="albums-item" key={index}>
            <span>{item.name}</span>
            <span> - {getName(item.artists)}</span>
          </div>
        ))
      }
    </>
  )
  
  return (
    <FixedContainer>
      <HeaderContainer>
        <i className="iconfont icon-fanhui" onClick={() => nav(-1)}></i>
        <input 
          type="text" 
          placeholder="请输入搜索内容"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </HeaderContainer>

      <HotWordsContainer>
        <Title>热门搜索：</Title>
        {isLoading>=0 && <Loading/>}
        <div className="words">{hotWordsList.length > 0 && renderHotWords}</div>
      </HotWordsContainer>

      <SuggestContainer>
        <Title>热门推荐：</Title>
        <div>
          {isValidObject(suggestList) && renderAlbums()}
          {isValidObject(suggestList) && renderArtist()}
          {isValidObject(suggestList) && renderSongs()}
        </div>
      </SuggestContainer>
    </FixedContainer>
  )
}

export default Search;