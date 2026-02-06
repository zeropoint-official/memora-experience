import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { HeaderV2 } from "@/components/ui/header-v2";
import { Footer } from "@/components/ui/footer";

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
    <ClerkProvider>
      <html lang="en" className="bg-[#FAFAFA]" style={{ colorScheme: 'light' }}>
        <body
          className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased bg-[#FAFAFA]`}
          style={{ 
            backgroundColor: '#FAFAFA',
            fontFamily: 'var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif'
          }}
        >
          <HeaderV2 />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
