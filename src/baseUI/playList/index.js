import React,{useRef} from "react";
import { connect } from "react-redux";
import {
  Container,
  ListContainer,
} from './style';
import Scroll from '../../components/scroll'
import { getName } from "../../api/utils";
import { changeCurrentIndex, changePlayingState, deleteSongFromList } from '../../application/Player/store/actionCreators'

function PlayList(props) {
  const {
    togglePlayList,
    playListImmutable,
    setCurrentIndexDispatch,
    setPlayingStateDispatch,
    deleteSong,
  } = props;
  const playList = playListImmutable.toJS();
  const outsideRef = useRef();

  // 隐藏歌单列表
  const handleOutsideClick = e => {
    if(e.target === outsideRef.current) {
      togglePlayList()
    }
  }

  // 切歌
  const handleChangeSong = (index) => {
    setCurrentIndexDispatch(index);
    setPlayingStateDispatch();
  }

  // 渲染歌曲列表
  const renderSongsList = () => {
    return playList.map((item, index) => (
      <div className="song-item" key={item.name + index}>
        <span onClick={() => handleChangeSong(index)}>
          <span className="song-name" >{item.al.name} - </span>
          <span className="song-singer">{getName(item.ar)}</span>
        </span>
        <i className="iconfont icon-shanchu" onClick={() => deleteSong(index)}></i>
      </div>
    ))
  }
  return(
    <Container onClick={handleOutsideClick} ref={outsideRef}>
      <ListContainer>
        <div className="title">当前播放
          <span className="number">（{playList.length}首）</span>
        </div>
        <Scroll>
          <div className="content">
            {renderSongsList()}
          </div>
        </Scroll>
      </ListContainer>
    </Container>
  )
}
const mapState = state => ({
  playListImmutable: state.getIn(['player', 'playList'])
})
const mapDispatch = dispatch => ({
  setCurrentIndexDispatch(index) {
    dispatch(changeCurrentIndex(index));
  },
  setPlayingStateDispatch() {
    dispatch(changePlayingState(true));
  },
  deleteSong(index) {
    dispatch(deleteSongFromList(index))
  }
})
export default connect(mapState, mapDispatch)(PlayList);