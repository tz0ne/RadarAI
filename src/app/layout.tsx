import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";

export const metadata = {
  title: "RadarAI",
  description: "AI Sales Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
