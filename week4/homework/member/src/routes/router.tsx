import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./RootLayout";
import LoginPage from "@pages/login/LoginPage.tsx";
import SignupPage from "@pages/signup/SignupPage";
import MyPage from "@pages/mypage/MyPage";
import SearchPage from "@pages/search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "mypage/info", element: <MyPage /> },
      { path: "mypage/search", element: <SearchPage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
