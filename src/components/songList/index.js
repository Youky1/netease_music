import React from "react"
import { ListItem } from "./style";
import { getName } from "../../api/utils";

const SongList = (props) => {
  const {list} = props;
  return list.map((item, index) => (
    <ListItem key={index}>
      <div className="number">{index+1}</div>
      <div className="song">
        <p>{item.name}</p>
        <p>{getName(item.ar)} - {item.al.name}</p>
      </div>
    </ListItem>
  ))
}

export default SongList;