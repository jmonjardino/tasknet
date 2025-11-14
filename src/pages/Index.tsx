import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { CheckCircle, Users, Trophy, BarChart3, FileCheck, Smartphone, Bell, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamWorking from "@/assets/team-working.jpg";
import gamification from "@/assets/gamification.jpg";

const Index = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Gestão de Tarefas",
      description: "Crie, atribua e acompanhe tarefas com prioridades, prazos e notificações automáticas.",
    },
    {
      icon: Trophy,
      title: "Gamificação",
      description: "Motive a sua equipa com pontos, rankings e recompensas por objetivos alcançados.",
    },
    {
      icon: BarChart3,
      title: "Dashboard do Gestor",
      description: "Visualize KPIs e operações em tempo real com relatórios inteligentes e exportáveis.",
    },
    {
      icon: FileCheck,
      title: "Prova Digital",
      description: "Registe evidências com fotos, documentos e confirmações de execução de tarefas.",
    },
    {
      icon: Users,
      title: "Gestão de Equipas",
      description: "Organize colaboradores, defina permissões e acompanhe o desempenho individual.",
    },
    {
      icon: Smartphone,
      title: "Multi-plataforma",
      description: "Acesso via web e mobile (iOS/Android) para máxima flexibilidade operacional.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Redução de Erros",
      description: "Minimize erros operacionais até 60% com processos digitais e validações automáticas.",
    },
    {
      icon: BarChart3,
      title: "Aumento de Produtividade",
      description: "Melhore a eficiência da equipa em até 40% com tarefas organizadas e priorizadas.",
    },
    {
      icon: Users,
      title: "Equipas Motivadas",
      description: "Sistema de gamificação que aumenta o engagement e satisfação dos colaboradores.",
    },
    {
      icon: Bell,
      title: "Centralização",
      description: "Toda a gestão do armazém numa única plataforma integrada e fácil de usar.",
    },
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Diretor de Operações",
      company: "LogiPro SA",
      content:
        "A TaskNest transformou completamente a forma como gerimos o nosso armazém. A produtividade aumentou 45% em apenas 3 meses.",
    },
    {
      name: "Maria Santos",
      role: "Gestora de Armazém",
      company: "DistribuiMais Lda",
      content:
        "O sistema de gamificação motivou a equipa de forma incrível. Os colaboradores adoram competir pelos rankings!",
    },
    {
      name: "Pedro Costa",
      role: "CEO",
      company: "ArmazenTech",
      content:
        "Implementação rápida e suporte excelente. Em 2 semanas já estávamos 100% operacionais. Recomendo vivamente!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* About Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sobre a TaskNest
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Somos uma empresa especializada em soluções SaaS para pequenas e médias empresas. 
                A nossa missão é digitalizar e simplificar a gestão de armazéns através de tecnologia 
                inovadora e intuitiva.
              </p>
              <p className="text-lg text-muted-foreground">
                Combinamos gestão operacional eficiente com gamificação para criar um ambiente de 
                trabalho mais produtivo e motivador. Tudo num único ecossistema digital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={teamWorking}
                  alt="Equipa a trabalhar"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Capacitar PMEs com ferramentas digitais que aumentam a eficiência, reduzem custos 
                    e melhoram a motivação das equipas.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Nossos Valores</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Simplicidade e facilidade de uso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Inovação tecnológica constante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Foco na motivação das equipas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Suporte próximo e dedicado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Funcionalidades Principais
              </h2>
              <p className="text-lg text-muted-foreground">
                Tudo o que precisa para gerir o seu armazém de forma eficiente e moderna
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/features">Ver Todas as Funcionalidades</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefícios para PME
              </h2>
              <p className="text-lg text-muted-foreground">
                Resultados comprovados que transformam a operação do seu armazém
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Gamificação que Motiva
                </h3>
                <p className="text-muted-foreground">
                  O nosso sistema de gamificação transforma tarefas rotineiras em desafios 
                  estimulantes. Colaboradores ganham pontos, sobem no ranking e desbloqueiam 
                  recompensas ao completar objetivos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Rankings em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Sistema de pontos e badges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Recompensas personalizáveis</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={gamification}
                  alt="Gamificação"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O Que Dizem os Nossos Clientes
              </h2>
              <p className="text-lg text-muted-foreground">
                Empresas que já transformaram os seus armazéns com a TaskNest
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notícias & Atualizações
              </h2>
              <p className="text-lg text-muted-foreground">
                Fique a par das últimas novidades e funcionalidades da TaskNest
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/10 h-48 flex items-center justify-center">
                    <Bell className="h-16 w-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">15 Nov 2024</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Nova Funcionalidade: Notificações SMS
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Agora pode receber alertas críticos via SMS para nunca perder uma tarefa importante.
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <Link to="/blog">Ler mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-accent/10 h-48 flex items-center justify-center">
                    <Smartphone className="h-16 w-16 text-accent" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">02 Nov 2024</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      App Mobile Renovada
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Interface redesenhada e mais rápida. Descarregue já a nova versão para iOS e Android.
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <Link to="/blog">Ler mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/10 h-48 flex items-center justify-center">
                    <Trophy className="h-16 w-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">20 Out 2024</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      TaskNest Vence Prémio Inovação PME
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Fomos reconhecidos como a melhor solução SaaS para gestão de armazéns em Portugal.
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <Link to="/blog">Ler mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">Ver Todas as Notícias</Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection
          title="Pronto para Transformar o Seu Armazém?"
          description="Agende uma demonstração gratuita e descubra como a TaskNest pode revolucionar a gestão da sua empresa."
          primaryButtonText="Agendar Demonstração Gratuita"
          primaryButtonLink="/contact"
          secondaryButtonText="Pedir Orçamento"
          secondaryButtonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
