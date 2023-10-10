import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Gallery from "../Components/Home/Gallery/Gallery";
import History from "../Components/History/History";
import FilmPremier from "../Components/Events/Premier/FilmPremier";
import Submission from "../Components/Events/Submission/Submission.jsx";
import FilmAndFun from "../Components/Events/FIlmAndFun/FilmAndFun";
import ConvocationEvent from "../Components/Events/Convocation/ConvocationEvent";
import Scholarships from "../Components/Events/Scholarships/Scholarships";
import Cinematography from "../Components/Events/Cinematography/Cinematography";
import Footer from "../Components/Home/Footer/Footer";
import EventHandling from "../Components/Home/EventHeld/EventHandling;/EventHandling;";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/',
        element:<EventHandling></EventHandling>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/history',
        element:<History></History>
      },
      {
        path:'/premier',
        element:<PrivetRoute><FilmPremier></FilmPremier></PrivetRoute>
      },
      {
        path:'/convocation',
        element:<ConvocationEvent></ConvocationEvent>
      },
      {
        path:'/submission',
        element:<PrivetRoute><Submission></Submission></PrivetRoute>
      },
      {
        path:'/fnf',
        element:<PrivetRoute><FilmAndFun></FilmAndFun></PrivetRoute>
      },
      {
        path:'/scholarships',
        element:<Scholarships></Scholarships>
      },
      {
        path:'/cinematography',
        element:<Cinematography></Cinematography>
      },
      {
        path:'/home',
        element:<Footer></Footer>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
    ]
  },
]);

export default router;