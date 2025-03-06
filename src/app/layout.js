import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/featured/navbar/navbar";
import Footer from "@/components/footer/footer";

// import AdminSidebar from "@/featured/admin/admin-sidebar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Real Estate",
  description: "Real Estate Website",
};

export default function RootLayout({ children }) {
  return (
          <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Scope+One&display=swap"
                    rel="stylesheet"/>
             </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar/>
            {/* <AdminSidebar/> */}
            {children}
            <Footer/>
            </body>
        </html>
  );
}
