import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-site-text bg-site-bg">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
