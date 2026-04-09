import {
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import SuccessStories from './pages/SuccessStories';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/success-stories',
    element: <SuccessStories />,
  },
  {
    path: '/blog',
    element: <Blogs />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPost />,
  },
]);

export default router;
