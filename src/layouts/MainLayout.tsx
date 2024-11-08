import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }: {children: React.ReactElement}) => {
    return <>
        <Header />
        <div className="pt-[70px]">
            {children}
            <Footer />
        </div>
    </>
}

export default MainLayout;
