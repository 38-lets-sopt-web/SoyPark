import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./RootLayout";
import LoginPage from "@pages/login/LoginPage.tsx";
import SignupPage from "@pages/signup/SignupPage";
import MyPage from "@pages/mypage/MyPage";
import SearchPage from "@/pages/mypage/pages/search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "mypage", element: <MyPage /> },
      { path: "mypage/search", element: <SearchPage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
