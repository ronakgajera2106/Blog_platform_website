import { Outlet } from "react-router-dom";
import { FooterWithLogo } from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import Headercomponet from "../../components/Header/Header";

export const PublicLayout = () => {
  return (
    <>
      <div>
        {/* <NavbarWithMegaMenu /> */}
        <Headercomponet />
        <Outlet />
        <FooterWithLogo />
      </div>
    </>
  );
};
