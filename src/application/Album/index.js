import React, { useState } from 'react';
import {Container} from './style';
import Header from '../../baseUI/header';
import {useNavigate} from 'react-router';
import Scroll from '../../components/scroll';
import { getCount, getName } from '../../api/utils'
import {
  TopContainer,
  ListItem,
  ListHeader
} from './style';

function Album (props) {
  const nav = useNavigate();
  const currentAlbum = {
    creator: {
      avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
      nickname: "浪里推舟"
    },
    coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
    subscribedCount: 2010711,
    name: "听完就睡，耳机是天黑以后柔软的梦境",
    tracks:[
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
    ]
  }
  const buttons = [
    {text:'评论', icon:'icon-pinglun'},
    {text:'点赞', icon:'icon-aixin'},
    {text:'收藏', icon:'icon-jia'},
    {text:'更多', icon:'icon-icmore'},
  ]

  // 下方四个按钮
  const renderButtons = buttons.map(item => (
    <div className='btn' key={item.text}>
      <i className={"iconfont " + item.icon}></i>
      <p>{item.text}</p>
    </div>
  ))

  // 歌单的歌曲列表
  const renderSongsList = currentAlbum.tracks.map((item, index) => (
    <ListItem key={index}>
      <div className="number">{index+1}</div>
      <div className="song">
        <p className="song_name">{item.name}</p>
        <p className="singer">{getName(item.ar)} - {item.al.name}</p>
      </div>
    </ListItem>
  ))

  const [y, setY] = useState(0);

  const handleScroll = (e) => {
    if(e.y < 0 && e.y > -100){
      setY(e.y);
    }
  }

  return (
      <Container className='animate__animated animate__bounceInRight'>
        <Header 
          title='返回' 
          handleClick={() => nav(-1)} 
          moveY={y} 
          marqueeContent={currentAlbum.name}
        />
        <Scroll name='name' onScroll={handleScroll}>
          <div>
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
            {renderSongsList}
          </div>
        </Scroll>
      </Container>
  )
}

export default Album;