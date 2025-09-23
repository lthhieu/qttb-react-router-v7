import { Outlet } from "react-router";
import Footer from "~/layouts/footer";
import Header from "~/layouts/header";

export default function MasterLayout() {
    return (
        <>
            <Header />
            <main className="mx-[10%] my-[32px] leading-[42px]">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}