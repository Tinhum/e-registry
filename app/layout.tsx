import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./navigation-bar";
import Sidebar from "./SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | E-REGISTRY",
    default: "E-REGISTRY",
  },
  description: "Digital registration for Lira city council",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh overflow-y-auto`}
      >
        <NavigationBar />
        <div className="flex flex-row h-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
