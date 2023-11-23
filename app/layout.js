import "normalize.css/normalize.css";
import "./reset.css";
import "./global.css";
import TheHeader from "@/components/TheHeader/TheHeader";
import { Inter } from "next/font/google";
import TheFooter from "@/components/TheFooter/TheFooter";
import ThemeProvider from "@/providers/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IShop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className + " container"}>
          <TheHeader />
          <main>{children}</main>
          <TheFooter />
          <ToastContainer
            autoClose={2000}
            pauseOnHover
            closeOnClick
            theme="light"
          />
        </body>
      </ThemeProvider>
    </html>
  );
}
