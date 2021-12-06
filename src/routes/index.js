import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Album from '../application/Album';
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
				element: <Recommend/>
			},
			{
				path: "singers",
				element: <Singers/>
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