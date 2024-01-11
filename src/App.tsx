import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import MailLayout from './components/mainLayout/MailLayout';
import WebsiteProvider from './components/Context/WebsiteContext';
import Form from './components/Form/Form';
import View from './components/View/View';
import { UpdateForm } from './components/UpdateForm/UpdateForm';
import ProtectedRoute from './components/ProtectRoute/ProtectRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MailLayout />,
            children: [
                { index: true, element: <Login /> },
                {
                    path: 'dashboard',
                    element: (
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'dashboard/portfolio',
                    element: <Portfolio />,
                },
                {
                    path: 'dashboard/blog',
                    element: <Dashboard />,
                },
                { path: 'AddWebsite', element: <Form /> },
                { path: 'view/:id', element: <View /> },
                { path: 'update/:id', element: <UpdateForm /> },
            ],
        },
    ]);

    return (
        <>
            <WebsiteProvider>
                <div className="min-h-screen bg-teal-950">
                    <RouterProvider router={router}></RouterProvider>
                </div>
            </WebsiteProvider>
        </>
    );
}

export default App;
