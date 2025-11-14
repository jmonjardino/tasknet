import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { CheckCircle, Target, Lightbulb, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Desenvolvemos soluções tecnológicas de ponta que antecipam as necessidades do mercado.",
    },
    {
      icon: CheckCircle,
      title: "Simplicidade",
      description: "Criamos interfaces intuitivas que qualquer pessoa pode usar, sem curva de aprendizagem.",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Ouvimos ativamente e adaptamos o produto às necessidades reais das PME.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometemo-nos com a qualidade em cada detalhe, desde o código ao suporte.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sobre a TaskNest
              </h1>
              <p className="text-xl text-muted-foreground">
                Somos uma empresa portuguesa especializada em soluções digitais para pequenas e médias 
                empresas. A nossa missão é transformar a gestão de armazéns através da tecnologia.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Nossa História
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A TaskNest nasceu em 2023 da necessidade identificada junto de dezenas de PME 
                    portuguesas que enfrentavam desafios na gestão diária dos seus armazéns.
                  </p>
                  <p>
                    Percebemos que existiam processos manuais, falta de visibilidade em tempo real, 
                    e sobretudo, equipas desmotivadas pela repetição de tarefas sem reconhecimento.
                  </p>
                  <p>
                    Foi assim que decidimos criar uma plataforma completa que não só digitalizasse 
                    processos, mas também motivasse os colaboradores através de gamificação. O resultado 
                    foi além das expectativas: empresas reportaram aumentos de produtividade de 40% 
                    e redução de erros operacionais de 60%.
                  </p>
                  <p>
                    Hoje, servimos dezenas de empresas em Portugal e continuamos a evoluir o produto 
                    com base no feedback direto dos nossos clientes.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={teamPhoto}
                  alt="Equipa TaskNest"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  A Nossa Missão
                </h2>
              </div>
              
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-lg text-center text-muted-foreground leading-relaxed">
                    Capacitar pequenas e médias empresas portuguesas com ferramentas digitais de classe 
                    mundial que aumentam a eficiência operacional, reduzem custos, e criam ambientes 
                    de trabalho mais motivadores e produtivos. Queremos que cada PME tenha acesso a 
                    tecnologia de ponta, independentemente do seu tamanho ou orçamento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Os Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground">
                Princípios que guiam todas as nossas decisões e ações
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
                TaskNest em Números
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Empresas Ativas</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">2K+</div>
                  <div className="text-muted-foreground">Utilizadores Diários</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Satisfação Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Suporte Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Culture */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Nossa Cultura
              </h2>
              <p className="text-lg text-muted-foreground">
                Somos uma equipa jovem, apaixonada por tecnologia e focada em resolver problemas reais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Inovação Contínua
                  </h3>
                  <p className="text-muted-foreground">
                    Lançamos funcionalidades novas mensalmente com base no feedback dos clientes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Proximidade
                  </h3>
                  <p className="text-muted-foreground">
                    Conhecemos pessoalmente os nossos clientes e mantemos relação próxima
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Aprendizagem
                  </h3>
                  <p className="text-muted-foreground">
                    Investimos no crescimento da equipa e na evolução das nossas competências
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CTASection
          title="Quer Fazer Parte da Nossa História?"
          description="Descubra como a TaskNest pode transformar a gestão do seu armazém"
          primaryButtonText="Agendar Demonstração"
          primaryButtonLink="/contact"
          secondaryButtonText="Ver Carreiras"
          secondaryButtonLink="/careers"
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
