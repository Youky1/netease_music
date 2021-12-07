import React from 'react';
import { useNavigate } from 'react-router';
import FixedContainer from '../../baseUI/fixedContainer';
import Header from '../../baseUI/header';
import Scroll from '../../components/scroll';
import SongList from '../../components/songList'

import {
	BackgroundImage,
	ImgWrapper,
	CollectButton,
	SongWrapper,
	ScrollWrapper
} from './style';

function Singer (props) {
	const nav = useNavigate();
	const artist = {
	  picUrl: "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
	  name: "薛之谦",
	  hotSongs: [
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
			{
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
			{
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
			{
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
			{
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
			{
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
			{
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	    {
	      name: "我好像在哪见过你",
	      ar: [{name: "薛之谦"}],
	      al: {
	        name: "薛之谦专辑"
	      }
	    },
	  ]
	}
  return (
		<FixedContainer>
			<Header 
				title={artist.name}
				handleClick={() => nav(-1)} 
      />
			<BackgroundImage url={artist.picUrl}>
				<div className="filter"></div>
			</BackgroundImage>
			<ScrollWrapper id='out'>
				<Scroll>
					<div id='in'>
						<ImgWrapper>
							<CollectButton><i className="iconfont icon-jia"></i>收藏</CollectButton>
						</ImgWrapper>
						<SongWrapper>
							<SongList
								list={artist.hotSongs}
								showCollect={false}
							/>
						</SongWrapper>
					</div>
      	</Scroll>
			</ScrollWrapper>
      
		</FixedContainer>
  )
}

export default Singer;