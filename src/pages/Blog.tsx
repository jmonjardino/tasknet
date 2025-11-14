import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como a Gamificação Aumenta a Produtividade em Armazéns",
      excerpt:
        "Descubra como sistemas de pontos e rankings podem transformar a motivação da sua equipa e aumentar a eficiência operacional.",
      author: "Ana Martins",
      date: "15 Nov 2024",
      readTime: "5 min",
      category: "Produtividade",
      featured: true,
    },
    {
      id: 2,
      title: "5 Sinais de que Precisa de Digitalizar o Seu Armazém",
      excerpt:
        "Processos manuais, falta de visibilidade e erros recorrentes são apenas alguns dos sinais. Saiba se está na altura de mudar.",
      author: "Pedro Silva",
      date: "08 Nov 2024",
      readTime: "4 min",
      category: "Transformação Digital",
      featured: true,
    },
    {
      id: 3,
      title: "TaskNest vs Gestão Tradicional: Estudo Comparativo",
      excerpt:
        "Análise detalhada dos resultados de 20 empresas que migraram de gestão manual para TaskNest. Os números impressionam.",
      author: "João Costa",
      date: "02 Nov 2024",
      readTime: "7 min",
      category: "Case Studies",
      featured: true,
    },
    {
      id: 4,
      title: "10 Melhores Práticas para Gestão de Tarefas em Armazéns",
      excerpt:
        "Dicas práticas que pode implementar imediatamente para melhorar a organização e eficiência da sua operação.",
      author: "Maria Santos",
      date: "28 Out 2024",
      readTime: "6 min",
      category: "Melhores Práticas",
      featured: false,
    },
    {
      id: 5,
      title: "A Importância da Prova Digital na Logística Moderna",
      excerpt:
        "Como a documentação digital de tarefas reduz disputas, melhora a rastreabilidade e aumenta a confiança com clientes.",
      author: "Carlos Ferreira",
      date: "22 Out 2024",
      readTime: "5 min",
      category: "Tecnologia",
      featured: false,
    },
    {
      id: 6,
      title: "Reduzir Erros Operacionais: Estratégias Comprovadas",
      excerpt:
        "Metodologias e ferramentas que ajudam PME a reduzir erros em até 60% nas operações de armazém.",
      author: "Sofia Oliveira",
      date: "15 Out 2024",
      readTime: "6 min",
      category: "Operações",
      featured: false,
    },
    {
      id: 7,
      title: "Como Motivar Equipas de Armazém: Guia Completo",
      excerpt:
        "Estratégias de motivação, desde reconhecimento até recompensas, que realmente funcionam no ambiente de armazém.",
      author: "Ricardo Alves",
      date: "08 Out 2024",
      readTime: "8 min",
      category: "Gestão de Pessoas",
      featured: false,
    },
    {
      id: 8,
      title: "ROI de Sistemas SaaS para PME: Vale a Pena?",
      excerpt:
        "Análise financeira detalhada do retorno de investimento em plataformas cloud para gestão de armazéns.",
      author: "Luís Ribeiro",
      date: "01 Out 2024",
      readTime: "7 min",
      category: "Negócios",
      featured: false,
    },
    {
      id: 9,
      title: "Tendências em Gestão de Armazéns para 2025",
      excerpt:
        "O futuro da logística: automação, IA, IoT e como as PME podem preparar-se para estas mudanças.",
      author: "Teresa Gomes",
      date: "25 Set 2024",
      readTime: "6 min",
      category: "Tendências",
      featured: false,
    },
  ];

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  const categories = ["Todos", "Produtividade", "Tecnologia", "Case Studies", "Melhores Práticas"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog TaskNest
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights, dicas e novidades sobre gestão de armazéns e transformação digital
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-secondary border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Artigos em Destaque
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="bg-primary/10 h-48 flex items-center justify-center">
                      <Tag className="h-16 w-16 text-primary" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                        <span className="text-xs font-semibold text-primary">{post.category}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <Button variant="link" className="p-0 group">
                          Ler mais
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Todos os Artigos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-3">
                      <span className="text-xs font-semibold text-accent">{post.category}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                        Ler mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Carregar Mais Artigos
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Receba Conteúdo Exclusivo
                </h2>
                <p className="text-muted-foreground mb-6">
                  Subscreva a nossa newsletter e receba artigos, dicas e novidades diretamente no seu email
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="hero" size="lg">
                    Subscrever
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
