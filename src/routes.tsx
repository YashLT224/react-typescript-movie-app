import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from './pages/movie'
import Bookmarks from './pages/bookmark'
import TvSeries from './pages/tv-series'
import Login from "./pages/login";
export const router = createBrowserRouter([
    {
      path: "/",
       element: <Home />,
       errorElement: <Error />,
     
    },
    {
      path: "/login",
       element: <Login />,
       errorElement: <Error />,
     
    },
    
    {
      path: "/movies",
      element: <Movie />,
      errorElement: <Error />,
    },
    {
      path: "/tv-series",
      element: <TvSeries />,
      errorElement: <Error />,
    },
    {
      path: "/bookmarks",
      element: <Bookmarks />,
      errorElement: <Error />,
    },
  ]);