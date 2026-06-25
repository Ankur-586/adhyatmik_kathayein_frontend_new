import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const TestPage = () => {
    return (
        <div className="h-96 bg-red-500 rounded-xl flex items-center justify-center text-white text-4xl">
            TEST PAGE
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <TestPage />,
            },
        ],
    },
]);

export default router;

// import { createBrowserRouter } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";

// import Home from "../pages/Home/Home";
// import Stories from "../pages/Stories/Stories";
// import Videos from "../pages/Videos/Videos";
// import Categories from "../pages/Categories/Categories";
// import About from "../pages/About/About";
// import Contact from "../pages/Contact/Contact";
// import NotFound from "../pages/NotFound/NotFound";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         errorElement: <NotFound />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             {
//                 path: "stories",
//                 element: <Stories />,
//             },
//             {
//                 path: "videos",
//                 element: <Videos />,
//             },
//             {
//                 path: "categories",
//                 element: <Categories />,
//             },
//             {
//                 path: "about",
//                 element: <About />,
//             },
//             {
//                 path: "contact",
//                 element: <Contact />,
//             },
//         ],
//     },
// ]);

// export default router;