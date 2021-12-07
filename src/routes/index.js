import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Album from '../application/Album';
import Singer from '../application/Singer';

const routes = [
  	{
  	  	path: '/',
  	  	element: <Home/>,
		children: [
			{
				path: "/",
				exact: true,
				element: <Navigate to={"/recommend"}/>
			},
			{
				path: "recommend",
				element: <Recommend/>,
				children:[
					{ 
						path: ':id', 
						element: <Album/>
					}
				]
			},
			{
				path: "singers",
				element: <Singers/>,
				children: [
					{
						path: ':id',
						element: <Singer/>
					}
				]
			},
			{
				path: "rank",
				element: <Rank/>,
				children:[
					{ 
						path: ':id', 
						element: <Album/>
					}
				]
			}
		]
  	}
]
const RouteWrapper = () => <>{useRoutes(routes)}</>
export default RouteWrapper;