import "./globals.css";
import Header from "@/components/sections/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}
