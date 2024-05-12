import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import ErrorPage from "../pages/ErrorPage";
import CreateAssignment from "../pages/CreateAssignment";
import Assignment from "../pages/Assignment";
import PendingAssignment from "../pages/PendingAssignment";
import UpdatePage from "../components/Update/UpdatePage";
import ViewDetails from "../components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/assignment',
          element: <Assignment/>,
          loader: () => fetch('http://localhost:5000/create')
        },
        {
          path: '/crassignment',
          element: <CreateAssignment/>,
        },
        {
          path: '/pending',
          element: <PendingAssignment/>
        },
        {
          path: '/viewdetails',
          element: <ViewDetails/>
        },
        {
          path: '/updatepage/:id',
          element: <UpdatePage/>,
          loader: ({params}) => fetch(`http://localhost:5000/create/${params.id}`)
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registartion',
            element: <Registration/>
        }
      ]
    },
  ]);
  export default router;