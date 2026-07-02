import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../../src/components/home/layouts/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;