import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/posts/:title",
    element: <BlogPost />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />
  }
];

export default routes;
