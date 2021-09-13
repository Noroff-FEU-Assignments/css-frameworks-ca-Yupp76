import CustomNavbar from "components/CustomNavbar";
import CustomFooter from "components/CustomFooter";

const Layout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      <main className="container-v">{children}</main>
      <CustomFooter />
    </>
  );
};

export default Layout;
