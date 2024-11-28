import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";


export const metadata = {
  title: "getmeaChai",
  description: "Platform for Creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body  className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Navbar/>
       {children}
        <Footer/>
      </body>
      </SessionWrapper>
    </html>
  );
}
