import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheeseMath | Advanced Calculator Suite",
  description: "A modern React calculator app with basic math, advanced operations, regex analysis, and credit card obscuring - all with a cheese-themed twist!",
  keywords: ["calculator", "math", "regex", "credit card", "utilities", "typescript", "nextui"],
  authors: [{ name: "Bradley Matera" }],
  openGraph: {
    title: "CheeseMath | Advanced Calculator Suite",
    description: "Modern calculator app with animations and advanced features",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
