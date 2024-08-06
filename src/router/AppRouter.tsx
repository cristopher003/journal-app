import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { JournalPage } from "../journal/pages/JournalPage";

  
  const router = createBrowserRouter([
    {
      path: "/auth",
      element:<AuthRouter></AuthRouter>,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
            path: "/auth/*",
            element: <Navigate to={"/auth/login"} />,
          },
      ],
    },
    {
      path: "/journal",
      element: <JournalPage />,
    },
    {
        path: "/*",
        element: <Navigate to={"/auth/login"} />,
      },

  
  ]);


export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
