import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Register } from "../Pages/Auth/Register";
import { Login } from "../Pages/Auth/Login";
import { Notification } from "../Pages/Auth/Notification";
import { Admin } from "../Pages/Dashboards/Homes/Admin";
import { Staff } from "../Pages/Dashboards/Homes/Staff";
import { Student } from "../Pages/Dashboards/Homes/Student";
import { DLayout } from "../Pages/Dashboards/DLayout";
import Verification from "../Pages/Auth/Verification";
import Holder from "../Heropage/Holder";
import { PrivateRouter } from "./PrivateRouter";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComp from "../Pages/error/Error";

export const Router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  // },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verification />,
  },
  {
    path: "/notify",
    element: <Notification />,
  },
  {
    path: "/hero",
    element: <Holder />,
  },
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ErrorComp}>
        <PrivateRouter>
          <DLayout />
        </PrivateRouter>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        path: "dashboard/admin",
        element: <Admin />,
      },
      {
        index: true,
        path: "dashboard/staff",
        element: <Staff />,
      },
      {
        index: true,
        path: "dashboard/student",
        element: <Student />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorComp />,
  },
]);
