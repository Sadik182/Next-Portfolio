import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
