import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { AppProvider } from "@/components/providers/AppProvider";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "LedgerLingo — Learn Bookkeeping & Payroll",
  description: "The fun, free way to learn bookkeeping & payroll.",
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📒</text></svg>" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Applies the saved theme before first paint (same as the legacy inline script).
const themeScript = `try{if(localStorage.getItem("ll_theme")==="dark")document.documentElement.dataset.theme="dark";}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
