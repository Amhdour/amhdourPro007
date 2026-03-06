import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArabicBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="ar" />
      {children}
      <Footer locale="ar" />
    </div>
  );
}
