import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getCount, isValidChange } from '../../api/utils';

import {
  TopContainer,
  ListHeader
} from './style';
import { getAlbumList } from './store/actionCreators';

import Loading from '../../baseUI/loading';
import FixedContainer from '../../baseUI/fixedContainer';
import Header from '../../baseUI/header';

import Scroll from '../../components/scroll';
import SongList from '../../components/songList';

function Album (props) {
  const nav = useNavigate();
  const {
    currentAlbum: album,
    isLoading,
    getAlbumListDispatch
  } = props;
  const currentAlbum = album.toJS();

  // 获取歌单详情信息
  const params = useParams();
  useEffect(() => {
    getAlbumListDispatch(params.id);
  },[params.id, getAlbumListDispatch]);

  // 滑动页面的回调函数，用于设置顶部header的透明度
  const [y, setY] = useState(0);
  const handleScroll = useCallback((e) => {
    if(e.y < 0 && e.y > -100 && isValidChange(e.y, y)){
      setY(e.y);
    }
  },[currentAlbum])

  // 歌单顶部信息栏
  const renderTopContainer = () => (
    <TopContainer>
      <div className="background" background={currentAlbum.coverImgUrl}></div>
      <div className="content">
        <div className="left_box">
          <img src={currentAlbum.coverImgUrl} alt={currentAlbum.name} />
          <div className="frequency">
            <span className="iconfont icon-24gf-headphones"></span>
            {getCount(currentAlbum.subscribedCount)}
            </div>
        </div>
        <div className="right_box">
          <div>{currentAlbum.name}</div>
          <div className='avatar'>
            <img 
              src={currentAlbum.creator.avatarUrl} 
              alt={currentAlbum.creator.nickname} 
              className='avatar'
            />
            {currentAlbum.creator.nickname}
          </div>
        </div>
      </div>
      <div className="button_bar">{renderButtons}</div>
    </TopContainer>
  )

  // 顶部的按钮栏
  const buttons = [
    {text:'评论', icon:'icon-pinglun'},
    {text:'点赞', icon:'icon-aixin'},
    {text:'收藏', icon:'icon-jia'},
    {text:'更多', icon:'icon-icmore'},
  ]
  const renderButtons = buttons.map(item => (
    <div className='btn' key={item.text}>
      <i className={"iconfont " + item.icon}></i>
      <p>{item.text}</p>
    </div>
  ))

  // 歌单上面的播放栏
  const renderListHeader = () => (
    <ListHeader>
      <div>
        <i className="iconfont icon-bofang"></i>
        播放全部
        <span>（共{currentAlbum.tracks.length}首）</span>
      </div>
      <div>
        <i className="iconfont icon-jia"></i>
        收藏（{getCount(currentAlbum.subscribedCount)}）
      </div>
    </ListHeader>
  )

  return (
      <FixedContainer>
        <Header 
          title='返回' 
          handleClick={() => nav(-1)} 
          moveY={y} 
          marqueeContent={currentAlbum.name}
        />
        { isLoading && <Loading/>}
        {
          !isLoading &&
          <Scroll name='name' onScroll={handleScroll}>
            <div>
              {renderTopContainer()}
              {renderListHeader()}
              <SongList list={currentAlbum.tracks}/>
            </div>
          </Scroll>
        }
      </FixedContainer>
  )
}

const mapState = state => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']),
  isLoading: state.getIn(['album', 'isLoading']),
})

const mapDispatch = dispatch => ({
  getAlbumListDispatch(id) {
    dispatch(getAlbumList(id));
  }
})

export default connect(mapState, mapDispatch)(Album);