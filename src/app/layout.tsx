import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'SereniTea House | Premium Tea Restaurant Experience',
  description: 'Indulge in an exquisite tea experience at SereniTea House. Discover premium loose-leaf teas, artisanal pastries, and tranquil ambiance. Book your high tea experience today.',
  keywords: ["tea restaurant, premium tea, high tea, loose leaf tea, artisanal pastries, tea house, gourmet tea, tea shop, SereniTea House"],
  openGraph: {
    "title": "SereniTea House | Premium Tea Restaurant Experience",
    "description": "Indulge in an exquisite tea experience at SereniTea House. Discover premium loose-leaf teas, artisanal pastries, and tranquil ambiance. Book your high tea experience today.",
    "url": "https://www.sereniteahouse.com",
    "siteName": "SereniTea House",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/sake-japanese-beverage-still-life_23-2150170129.jpg",
        "alt": "Elegant tea restaurant interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "SereniTea House | Premium Tea Restaurant Experience",
    "description": "Indulge in an exquisite tea experience at SereniTea House. Discover premium loose-leaf teas, artisanal pastries, and tranquil ambiance. Book your high tea experience today.",
    "images": [
      "http://img.b2bpic.net/free-photo/sake-japanese-beverage-still-life_23-2150170129.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
