import { RouteObject, createBrowserRouter } from 'react-router-dom';
import DefaultPage from './Pages';

export const routes = [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <DefaultPage />,
      },
    ],
  },
] as RouteObject[];

const router = createBrowserRouter(routes);

export default router;
