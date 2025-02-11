import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import "./globals.css";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  // variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "iLearnings | Landing Page",
  description: "Landing Page created using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
