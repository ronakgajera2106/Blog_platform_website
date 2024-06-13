import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../../components/Header/Header";
import { FooterWithLogo } from "../../components/Footer/footer";
import Header from "../../components/Header/newheader";

export const PublicLayout = () => {
  return (
    <>
      <div>
        {/* <NavbarWithMegaMenu /> */}
        <Header />
        <Outlet />
        <FooterWithLogo />
      </div>
    </>
  );
};
