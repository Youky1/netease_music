import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
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
				element: <Rank/>
			}
		]
  	}
]
const RouteWrapper = () => <>{useRoutes(routes)}</>
export default RouteWrapper;