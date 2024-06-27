import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div
      className="relative bg-stone-100 dark:bg-neutral-900 text-stone-800"
      id="layout"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
