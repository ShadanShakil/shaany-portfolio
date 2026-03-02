import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shany Abbas - Video Editing Portfolio",
  description: "Premium video editing and motion graphics portfolio showcasing high-end projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrument.variable} font-sans bg-background text-foreground antialiased min-h-screen selection:bg-primary-green selection:text-black`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
