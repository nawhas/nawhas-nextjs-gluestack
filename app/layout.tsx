import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider/ThemeProvider";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nawhas.com",
  description: "Nawhas.com",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-[#18181b] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <StyledJsxRegistry>
            <ClientLayout>{children}</ClientLayout>
          </StyledJsxRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
