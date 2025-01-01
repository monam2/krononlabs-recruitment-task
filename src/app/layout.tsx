import type { Metadata } from "next";
import "./globals.css";
import { binancePlex } from "@/styles/fonts";
import RootProvider from "@/providers";
import getInitialTheme from "@/providers/getInitialTheme";

export const metadata: Metadata = {
  title: "KrononLabs Task",
  description: "KrononLabs Recruitment Task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lightTheme, chartTheme } = await getInitialTheme();

  return (
    <html lang="en">
      <body className={binancePlex.variable}>
        <RootProvider lightTheme={lightTheme} chartTheme={chartTheme}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
