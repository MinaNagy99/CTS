import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
