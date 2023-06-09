import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
