import React from "react"
import { ListItem, ListHeader } from "./style";
import { getName, getCount } from "../../api/utils";
import { connect } from "react-redux";
import { changePlayList, changeCurrentIndex, changePlayingState } from '../../application/Player/store/actionCreators';

const SongList = (props) => {
  const { 
    list, 
    showCollect, 
    subscribedCount,
    setPlayListDispatch,
    setCurrentIndexDispatch,
    setPlayingStateDispatch
  } = props;
  const handleChangePlayList = (index) => {
    setPlayListDispatch(list);
    setCurrentIndexDispatch(index);
    setPlayingStateDispatch();
  }
  const songs =  list.map((item, index) => (
    <ListItem key={index} onClick={() => handleChangePlayList(index)}>
      <div className="number">{index+1}</div>
      <div className="song">
        <p>{item.name}</p>
        <p>{getName(item.ar)} - {item.al.name}</p>
      </div>
    </ListItem>
  ))
  return (
    <>
      <ListHeader>
        <div onClick={() => handleChangePlayList(0)}>
          <i className="iconfont icon-bofang"></i>
          播放全部
          <span>（共{list.length}首）</span>
        </div>
        {
          showCollect &&
          <div>
            <i className="iconfont icon-jia"></i>
            收藏（{getCount(subscribedCount)}）
          </div>
        }
      </ListHeader>
      {songs}
    </>
  )
}

const mapDispatch = dispatch => ({
  setPlayListDispatch(list) {
    dispatch(changePlayList(list))
  },
  setCurrentIndexDispatch(index) {
    dispatch(changeCurrentIndex(index));
  },
  setPlayingStateDispatch() {
    dispatch(changePlayingState(true));
  }
})

export default connect(null, mapDispatch)(SongList);