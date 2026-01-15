import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stride - Modern Horse Leasing Marketplace",
  description: "Connect with quality horses through secure, transparent leasing. The modern marketplace for equestrian sports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
