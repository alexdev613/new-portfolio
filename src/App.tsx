import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Blog } from './pages/blog';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  }
])

export { router }