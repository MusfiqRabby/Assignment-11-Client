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
import TakeAssignment from "../components/TakeAssignment/TakeAssignment";
import PrivateRoute from "./PrivateRoute";
import AttemptAssignment from "../components/Attempt/AttemptAssignment";

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
          loader: () => fetch('https://assignment-related-project-server.vercel.app/create')
        },
        {
          path: '/crassignment',
          element: <PrivateRoute>
            <CreateAssignment/>
          </PrivateRoute>
        },
        {
          path: '/pending',
          element: <PrivateRoute>
            <PendingAssignment/>
          </PrivateRoute>
        },
        {
          path: '/viewdetails/:id',
          element: <PrivateRoute>
            <ViewDetails/>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-related-project-server.vercel.app/create/${params.id}`)
        },
        {
          path: '/updatepage/:id',
          element: <UpdatePage/>,
          loader: ({params}) => fetch(`https://assignment-related-project-server.vercel.app/create/${params.id}`)
        },
        {
          path: '/attempt-assignment',
          element: <AttemptAssignment/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registartion',
            element: <Registration/>
        },
        {
          path: '/takeassignmet/:id',
          element: <TakeAssignment/>
        }
      ]
    },
  ]);
  export default router;