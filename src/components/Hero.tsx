import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Gestão Inteligente de Armazéns</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforma o teu Armazém com Gestão Inteligente e Gamificação
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              A plataforma SaaS que simplifica processos, aumenta a produtividade e motiva equipas em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/contact">
                  Agendar Demonstração
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Funcionalidades
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+40%</div>
                <div className="text-sm text-muted-foreground">Produtividade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">-60%</div>
                <div className="text-sm text-muted-foreground">Erros Operacionais</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Digital</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroDashboard}
                alt="TaskNest Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
              <div className="text-sm font-medium">+95% Satisfação</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-6 py-3 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-foreground">Desde 2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
