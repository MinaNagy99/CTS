import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MailLayout from "./components/mainLayout/MailLayout";
import WebsiteProvider from "./components/Context/WebsiteContext";
import DashBoard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import View from "./components/View/View";
import { UpdateForm } from "./components/UpdateForm/UpdateForm";
import ProtectedRoute from "./components/ProtectRoute/ProtectRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MailLayout />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "dashboard",

          element: (
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          ),
        },
        { path: "AddWebsite", element: <Form /> },
        { path: "view/:id", element: <View /> },
        { path: "update/:id", element: <UpdateForm /> },
      ],
    },
  ]);

  return (
    <>
      <WebsiteProvider>
        <div className="bg-teal-950 min-h-screen">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </WebsiteProvider>
    </>
  );
}

export default App;
