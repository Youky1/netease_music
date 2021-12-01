import React from 'react';
import PropTypes from 'prop-types';

import Scroll from '../../components/scroll';
import { List, ListItem } from './style';


function Horizon(props) {
    const {
        list,
        currentItem,
        title,
        handleClick,
    } = props;
    return (
        <Scroll direction="horizental">
            <List>
                <span>{title}</span>
                {
                    list.map((item) => (
                        <ListItem
                            key={item.key}
                            className={`${currentItem === item.key ? 'selected': ''}`} 
                            onClick={() => handleClick (item.key)}
                        >{item.name}</ListItem>
                    ))
                }
            </List>
        </Scroll>
    )
}

Horizon.propTypes = {
    list: PropTypes.array,          // 接收的列表数据
    currentItem: PropTypes.string,  //当前元素
    title: PropTypes.string,        // 列表左边的标题
    handleClick: PropTypes.func,    // 点击不同item时执行的方法
}

Horizon.defaultProps = {
    list: [],
    currentItem: '',
    title: '',
    handleClick: null,
}

export default Horizon;