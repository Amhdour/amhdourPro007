import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GermanBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="de" />
      {children}
      <Footer locale="de" />
    </div>
  );
}
