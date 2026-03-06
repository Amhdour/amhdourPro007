export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div dir="rtl">{children}</div>;
}
