import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "../components/Nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
