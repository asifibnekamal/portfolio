import { Result } from 'postcss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Resume from './Components/Resume/Resume';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
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
