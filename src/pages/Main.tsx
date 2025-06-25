import { Outlet } from "react-router";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}
