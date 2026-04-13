// app/layout.tsx
import Provider from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        ></link>
      </head>
      <body>
        {/* SessionProvider remains a client component */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
