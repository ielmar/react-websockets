import Navbar from "./navbar";
import Breadcrumb from "./breadcrumb";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-background">
      <div className="bg-white">
        <div className="md:container md:mx-auto ">
          <Navbar />
        </div>
      </div>

      <div className="md:container md:mx-auto py-8">
        <Breadcrumb />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
