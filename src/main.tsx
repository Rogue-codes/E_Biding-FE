import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PrivateRoute from "./routes/PrivateRoute";
import ErrorPage from "./pages/errorPage/ErrorPage";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/auth/login/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackbarProvider } from "notistack";
import Home from "./pages/dashboard/Home";
import Layout from "./layout/Layout";
import Analytics from "./pages/dashboard/Analytics";
import BiddingManagement from "./pages/dashboard/BiddingManagement";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Bid from "./components/biddingManagement/Bid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <Home />
          </Layout>
        ),
      },
      {
        path: "/bidding-management",
        element: (
          <Layout>
            <BiddingManagement />
          </Layout>
        ),
      },
      {
        path: "/reports",
        element: (
          <Layout>
            <Analytics />
          </Layout>
        ),
      },
      {
        path: "/bidding-management/:id",
        element: (
          <Layout>
            <Bid />
          </Layout>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <SnackbarProvider />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
