import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/Catalog";
import { db } from "./db";
import SingleArtistPage from "./pages/SingleArtistPage";

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
            <CatalogPage />
        </MainLayout>
    },
    {
        path: '/catalog/:id',
        element: <MainLayout>
            <SingleArtistPage />
        </MainLayout>,
        loader: async ({ request, params }) => {
            const { id } = params;
            return id ? db[parseInt(id)] : undefined;
        }
    },
    {
        path: '/cart',
        element: <MainLayout>
            <p>sometime i ll do it</p>
        </MainLayout>
    },
]);
