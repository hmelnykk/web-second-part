import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout>
            <HomePage />
        </MainLayout>
    },
    {
        path: '/catalog',
        element: <MainLayout>
            <HomePage />
        </MainLayout>
    },
    {
        path: '/cart',
        element: <MainLayout>
            <HomePage />
        </MainLayout>
    },
]);
