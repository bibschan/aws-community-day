import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "AWS Day",
  description:
    "The AWS Community Day in Vancouver Canada features expert-led talks, technical workshops, hands-on labs, and networking opportunities with industry leaders and fellow enthusiasts. Whether you're an experienced professional or a newcomer in the world of AWS, come join us. Be part of the movement to create a better, smarter, and more connected world.",
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
