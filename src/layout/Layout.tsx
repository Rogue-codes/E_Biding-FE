import { ReactNode } from "react";
import SideBar from "../components/sidebar/SideBar";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Filter from "../components/filterComponents/Filter";
interface Ilayout {
  children: ReactNode;
}
export default function Layout({ children }: Ilayout) {

  const queryParams = new URLSearchParams(window.location.search);
  const isView = queryParams.get("view");
  const isNew = queryParams.get("new");
  return (
    <div className="w-full flex justify-start items-center h-screen">
      <SideBar />
      <div className="ml-[26vw] w-[calc(100%-25.5vw)]">
        {(!isView && !isNew) && (
          <>
            <Nav />
            <Filter />
          </>
        )}

        <div className="w-full pt-32">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
