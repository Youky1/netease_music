import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
    isLoading,
    getRankListDispatch
  } = props;
  const list = rankList.toJS();

  useEffect(() => {
    getRankListDispatch();
  }, []);

  const globalStartIndex = filterIndex (list);
  const officialList = list.slice (0, globalStartIndex);
  const globalList = list.slice (globalStartIndex);

  const officialRankList = officialList.map((item) => (
    <div style={{position: 'relative'}} key={item.ToplistType}>
      <OfficialRankContainer>
        <img src={item.coverImgUrl} alt={item.name} />
        <Frequency>{item.updateFrequency}</Frequency>
        <div className="list_container">
          {item.tracks.map((i, index)  => <div className='item'>{index}. {i.first} - {i.second}</div>)}
        </div>
      </OfficialRankContainer>
    </div>
  ));

  const globalRankList = globalList.map((item) => (
    <div className="item">
      <img src={item.coverImgUrl} alt={item.name} />
      <Frequency>{item.updateFrequency}</Frequency>
    </div>
  ))

  console.log('globalList: ', globalList)
  return (
    <div>
      <Title>官方榜</Title>
      {officialRankList}
      <Title>全球榜</Title>
      <GlobalRankContainer>
        {globalRankList}
      </GlobalRankContainer>
    </div>
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