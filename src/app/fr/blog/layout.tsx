import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FrenchBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="fr" />
      {children}
      <Footer locale="fr" />
    </div>
  );
}
