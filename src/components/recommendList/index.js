import React from "react";
import { 
  ListWrapper,
  ListItem,
  List
} from './style';
import { getCount } from "../../api/utils";
import LazyLoad from "react-lazyload";

function RecommendList(props) {
    const { recommendList } = props;
    return (
        <ListWrapper>
            <div className="title">推荐歌单</div>
            <List>
                {
                    recommendList.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
									<LazyLoad placeholder={<img width="100%" height="100%" src={require ('./music.png').default} alt="music"/>}>
										<img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
									</LazyLoad>
                                    <div className="play_count">
                                        <i className="iconfont play">&#xe885;</i>
                                        <span className="count">{getCount (item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )
}

export default RecommendList;