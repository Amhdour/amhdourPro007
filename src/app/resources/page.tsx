import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dictionaries } from "@/lib/dictionaries";

export default function ResourcesPage() {
  const t = dictionaries.en.resources;

  return (
    <div className="text-site-text bg-site-bg">
      <Header />
      <main className="min-h-screen pt-[75px]">
        <div className="max-w-[900px] mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-site-text mb-2">{t.title}</h1>
          <p className="text-site-muted mb-10">{t.subtitle}</p>
          <div className="flex flex-col gap-6">
            {t.items.map((item) => (
              <Card key={item.name} className="border-site-primary/20 hover:border-site-primary transition-colors duration-300 bg-site-block">
                <CardHeader>
                  <CardTitle className="text-xl text-site-text">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-site-text/80 flex-1">{item.description}</p>
                  <Button asChild className="bg-site-primary hover:bg-site-primary-light text-white font-semibold shrink-0">
                    <a href={item.file} download>
                      {t.downloadButton}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
