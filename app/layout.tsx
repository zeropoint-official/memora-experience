import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header1 } from "@/components/ui/header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memora Experience | Cyprus Event Planning",
  description:
    "Cyprus's premier event experience company. From Planitario to student trips and business expos, we create unforgettable moments.",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white" style={{ colorScheme: 'light' }}>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased bg-white`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <Header1 />
        {children}
      </body>
    </html>
  );
}
