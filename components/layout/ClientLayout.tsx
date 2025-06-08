"use client";

import { ReactNode } from "react";
import { useTheme } from "@/components/ui/ThemeProvider/ThemeProvider";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <GluestackUIProvider mode={theme}>
      <Navbar />
      {children}
      <Footer />
    </GluestackUIProvider>
  );
}

export { ClientLayout }; 