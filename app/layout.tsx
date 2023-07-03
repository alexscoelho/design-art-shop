import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/components/NextAuthProvider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Design Art",
  description: "Diseños, sublimación y arte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextAuthProvider>
          <div className="flex flex-col h-full">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
