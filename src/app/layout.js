import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "AWS Day",
  description: "AWS Day",
};

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
