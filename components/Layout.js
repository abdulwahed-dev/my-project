import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;