import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import BasicExample from './components/BasicExample'
import ParamsExample from './components/ParamsExample'
import AuthExample from './components/AuthExample'
import CustomLinkExample from './components/CustomLinkExample'
import PreventingTransitionsExample from './components/PreventingTransitionsExample'
import NoMatchExample from './components/NoMatchExample'
import RecursiveExample from './components/RecursiveExample'
import SidebarExample from './components/SidebarExample'
import AnimationExample from './components/AnimationExample'
import AmbiguousExample from './components/AmbiguousExample'
import RouteConfigExample from './components/RouteConfigExample'
import ModalGallery from './components/ModalGallery'

const routes = [
	{
		id: 0,
		path: '/BasicExample',
		component: BasicExample
	},
	{
		id: 1,
		path: '/ParamsExample',
		component: ParamsExample
	},
	{
		id: 2,
		path: '/AuthExample',
		component: AuthExample
	},
	{
		id: 3,
		path: '/CustomLinkExample',
		component: CustomLinkExample
	},
	{
		id: 4,
		path: '/PreventingTransitionsExample',
		component: PreventingTransitionsExample
	},
	{
		id: 5,
		path: '/NoMatchExample',
		component: NoMatchExample
	},
	{
		id: 6,
		path: '/RecursiveExample',
		component: RecursiveExample
	},
	{
		id: 7,
		path: '/SidebarExample',
		component: SidebarExample
	},
	{
		id: 8,
		path: '/AnimationExample',
		component: AnimationExample
	},
	{
		id: 9,
		path: '/AmbiguousExample',
		component: AmbiguousExample
	},
	{
		id: 10,
		path: '/RouteConfigExample',
		component: RouteConfigExample
	},
	{
		id: 11,
		path: '/ModalGallery',
		component: ModalGallery
	}
]

// const history = createBrowserHistory()
// const changeFunc = (e) => {
// 	history.push(e.target.dataset.to)
// }
const RouteWithSubRoutes = (route) => <Route path={route.path} render={(props) => <route.component {...props}/>} />
const App = () => (
	<Router>
		<div>
			<ul>
				{routes.map((item) => (
					<li key={item.id}>
						<Link to={item.path}>{item.path.slice(1)}</Link>
					</li>
				))}
			</ul>
			{routes.map((route) => <RouteWithSubRoutes key={route.id} {...route} />)}
		</div>
	</Router>
)

export default App