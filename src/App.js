import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Consultant from './Components/Consultant/Consultant';
import Contact from './Components/Contract/Contact';
import Course from './Components/Course/Course';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import MobileBazar from './Components/MobileBazar/MobileBazar';
import Resume from './Components/Resume/Resume';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/mobilebazar',
          element: <MobileBazar></MobileBazar>
        },
        {
          path: '/consultant',
          element: <Consultant></Consultant>
        },
        {
          path: '/course',
          element: <Course></Course>
        },
        {
          path: '/resume',
          element: <Resume></Resume>
        },
      ]
    }
  ])


  return (
    <div data-theme="business">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
