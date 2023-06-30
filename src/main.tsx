import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, ForTheDay, Timer } from './ui/screens';
import './styles/global.css';
import { Layout } from './ui/components';
import { Notes } from './ui/screens/notes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
		errorElement: <h1>Oops sorry, that page does not exist.</h1>,
	},
	{
		path: '/daily',
		element: <ForTheDay />,
		errorElement: <h1>Oops sorry, that page does not exist.</h1>,
	},
	{
		path: '/notes',
		element: <Notes />,
		errorElement: <h1>Oops sorry, that page does not exist.</h1>,
	},
	{
		path: '/timer',
		element: (
			<Layout>
				<Timer />
			</Layout>
		),
		errorElement: <h1>Oops sorry, that page does not exist.</h1>,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className="mx-auto flex aspect-[375/667] h-screen w-screen max-w-phone justify-center shadow-lg">
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
