import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Heart, 
  Coffee,
  Laptop,
  GraduationCap,
  Rocket
} from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Careers = () => {
  const openPositions = [
    {
      title: "Full Stack Developer",
      department: "Tecnologia",
      location: "Lisboa (Híbrido)",
      type: "Full-time",
      description:
        "Procuramos um developer experiente em React, Node.js e cloud para fazer parte da equipa de produto.",
    },
    {
      title: "Customer Success Manager",
      department: "Cliente",
      location: "Lisboa",
      type: "Full-time",
      description:
        "Gestão da relação com clientes, garantindo sucesso na implementação e utilização da plataforma.",
    },
    {
      title: "Product Designer (UI/UX)",
      department: "Design",
      location: "Remoto",
      type: "Full-time",
      description:
        "Criação de interfaces intuitivas e experiências que encantam utilizadores de armazéns.",
    },
    {
      title: "Marketing Digital",
      department: "Marketing",
      location: "Lisboa",
      type: "Full-time",
      description:
        "Gestão de campanhas digitais, conteúdo e estratégia de crescimento para o mercado PME.",
    },
  ];

  const benefits = [
    {
      icon: Laptop,
      title: "Trabalho Flexível",
      description: "Regime híbrido ou remoto, com horários flexíveis e foco em resultados.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Ambiente de startup em crescimento com oportunidades de evolução rápida.",
    },
    {
      icon: GraduationCap,
      title: "Formação Contínua",
      description: "Orçamento anual para formações, conferências e certificações.",
    },
    {
      icon: Heart,
      title: "Seguro de Saúde",
      description: "Seguro de saúde completo para ti e família, sem custos adicionais.",
    },
    {
      icon: Coffee,
      title: "Ambiente Descontraído",
      description: "Escritório moderno em Lisboa com snacks, café e eventos de equipa.",
    },
    {
      icon: Rocket,
      title: "Impacto Real",
      description: "Trabalha em produto usado diariamente por milhares de pessoas.",
    },
  ];

  const values = [
    "Inovação constante",
    "Foco no cliente",
    "Transparência total",
    "Trabalho em equipa",
    "Ownership e responsabilidade",
    "Aprendizagem contínua",
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
                Junta-te à TaskNest
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Faz parte de uma equipa que está a transformar a gestão de armazéns em Portugal. 
                Procuramos pessoas apaixonadas por tecnologia e com vontade de fazer a diferença.
              </p>
              <Button variant="hero" size="lg">
                Ver Posições Abertas
              </Button>
            </div>
          </div>
        </section>

        {/* Team Photo */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <img
                src={teamPhoto}
                alt="Equipa TaskNest"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Porquê a TaskNest?
              </h2>
              <p className="text-lg text-muted-foreground">
                Somos uma startup em crescimento acelerado, com ambiente jovem e cultura de 
                inovação. Valorizamos autonomia, aprendizagem e impacto real.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Os Nossos Valores
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="border-border bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg font-medium text-foreground">{value}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Posições Abertas
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos a crescer e à procura de talento para várias áreas
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="hero">Candidatar-me</Button>
                    </div>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Não Encontrou a Vaga Ideal?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Estamos sempre à procura de talento excepcional. Envie-nos o seu CV e 
                    entraremos em contacto quando surgir uma oportunidade adequada.
                  </p>
                  <Button variant="outline" size="lg">
                    Candidatura Espontânea
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Processo de Recrutamento
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Candidatura</h3>
                  <p className="text-sm text-muted-foreground">
                    Envia CV e carta de motivação
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Screening</h3>
                  <p className="text-sm text-muted-foreground">
                    Revisão de candidaturas (3-5 dias)
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Entrevistas</h3>
                  <p className="text-sm text-muted-foreground">
                    2-3 entrevistas com equipa
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Proposta</h3>
                  <p className="text-sm text-muted-foreground">
                    Feedback e proposta final
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Compromisso:</strong> Damos feedback a 
                  todos os candidatos em todas as fases do processo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Pronto para Fazer a Diferença?"
          description="Junta-te a nós e ajuda a transformar a gestão de armazéns em Portugal"
          primaryButtonText="Ver Posições Abertas"
          primaryButtonLink="#open-positions"
          secondaryButtonText="Saber Mais Sobre Nós"
          secondaryButtonLink="/about"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
