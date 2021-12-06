import React from "react"
import { ListItem, ListHeader } from "./style";
import { getName, getCount } from "../../api/utils";

const SongList = (props) => {
  const { list, showCollect, subscribedCount } = props;
  const songs =  list.map((item, index) => (
    <ListItem key={index}>
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
        <div>
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

export default SongList;