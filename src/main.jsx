import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import MovieList from './pages/MovieList.jsx'
import MovieDetail from './pages/MovieDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'movies',
        element: <MovieList />
      },
      {
        path:'movies/:movieId',
        element: <MovieDetail />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
