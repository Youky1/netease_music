import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { getRankList } from './store';
import { filterIndex } from '../../api/utils';
import {
  Title,
  OfficialRankContainer,
  GlobalRankContainer,
  Frequency,
} from './style';

function Rank (props) {
  const {
    rankList,
    getRankListDispatch
  } = props;
  const list = rankList.toJS();

  useEffect(() => {
    getRankListDispatch();
  });

  const globalStartIndex = filterIndex (list);
  const officialList = list.slice (0, globalStartIndex);
  const globalList = list.slice (globalStartIndex);

  const nav = useNavigate();

  const officialRankList = officialList.map((item) => (
    <div 
      style={{position: 'relative'}} 
      key={item.ToplistType} 
      onClick={() => nav(`${item.id}`)}
    >
      <OfficialRankContainer>
        <img src={item.coverImgUrl} alt={item.name} />
        <Frequency>{item.updateFrequency}</Frequency>
        <div className="list_container">
          {item.tracks.map((i, index)  => <div className='item' key={index}>{index}. {i.first} - {i.second}</div>)}
        </div>
      </OfficialRankContainer>
    </div>
  ));

  const globalRankList = globalList.map((item,index) => (
    <div className="item"  key={index}>
      <img src={item.coverImgUrl} alt={item.name} />
      <Frequency>{item.updateFrequency}</Frequency>
    </div>
  ))

  return (
    <>
      <div>
        <Title>官方榜</Title>
        {officialRankList}
        <Title>全球榜</Title>
        <GlobalRankContainer>
          {globalRankList}
        </GlobalRankContainer>
      </div>
      <Outlet/>
    </>
  )
}

const mapState = (state) => ({
  rankList: state.getIn(['rank', 'rankList']),
  isLoading: state.getIn(['rank', 'isLoading'])
})

const mapDispatch = (dispatch) => ({
  getRankListDispatch() {
    dispatch(getRankList());
  }
})

export default connect(mapState, mapDispatch)(Rank);