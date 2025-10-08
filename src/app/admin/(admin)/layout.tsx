export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <p>admin navbar</p>
        {children}
    </div>
      
  );
}
