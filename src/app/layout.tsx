import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
