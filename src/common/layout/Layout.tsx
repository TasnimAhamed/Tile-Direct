import Header from "../../common/widgets/Header";

// default layout configuration
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
