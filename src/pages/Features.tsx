import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { 
  CheckCircle, 
  Users, 
  Trophy, 
  BarChart3, 
  FileCheck, 
  Smartphone, 
  Bell,
  Calendar,
  Shield,
  Zap,
  FileText,
  Image as ImageIcon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Gestão Completa de Tarefas",
      description: "Crie, atribua e acompanhe tarefas com total controle e visibilidade",
      benefits: [
        "Criação rápida de tarefas com templates personalizáveis",
        "Atribuição automática baseada em competências",
        "Definição de prioridades (baixa, média, alta, urgente)",
        "Prazos com alertas automáticos de vencimento",
        "Estados personalizáveis (pendente, em progresso, concluída)",
        "Dependências entre tarefas para workflow complexo",
      ],
    },
    {
      icon: Users,
      title: "Gestão de Equipas",
      description: "Organize e coordene a sua equipa de forma eficiente",
      benefits: [
        "Perfis completos de colaboradores com competências",
        "Gestão de turnos e horários de trabalho",
        "Atribuição de permissões e níveis de acesso",
        "Histórico completo de atividade por colaborador",
        "Avaliação de desempenho integrada",
        "Formação e onboarding digitalizados",
      ],
    },
    {
      icon: FileCheck,
      title: "Prova Digital",
      description: "Documente e valide a execução de tarefas com evidências digitais",
      benefits: [
        "Upload de fotos diretamente da câmara do telemóvel",
        "Anexo de documentos (PDF, Excel, Word)",
        "Assinatura digital para confirmações",
        "Carimbos de data/hora automáticos",
        "Localização GPS de onde foi executada a tarefa",
        "Arquivo seguro e pesquisável de todas as evidências",
      ],
    },
    {
      icon: Trophy,
      title: "Sistema de Gamificação",
      description: "Motive a equipa com pontos, rankings e recompensas",
      benefits: [
        "Sistema de pontos por tarefas completadas",
        "Rankings individuais e de equipa em tempo real",
        "Badges e conquistas desbloqueáveis",
        "Challenges semanais e mensais",
        "Recompensas personalizáveis pela gestão",
        "Histórico de conquistas de cada colaborador",
      ],
    },
    {
      icon: BarChart3,
      title: "Dashboard do Gestor",
      description: "Visualize todas as operações e KPIs num só lugar",
      benefits: [
        "Visão geral de tarefas pendentes/concluídas",
        "Gráficos de produtividade por período",
        "Taxa de conclusão no prazo",
        "Tempo médio de execução por tipo de tarefa",
        "Análise de desempenho por colaborador/equipa",
        "Alertas de tarefas críticas ou atrasadas",
      ],
    },
    {
      icon: FileText,
      title: "Reporting Inteligente",
      description: "Relatórios automáticos e exportáveis para análise profunda",
      benefits: [
        "Relatórios diários, semanais e mensais automáticos",
        "Exportação em PDF, Excel e CSV",
        "Relatórios personalizados por filtros",
        "Análise de tendências e padrões",
        "Comparação de períodos (mês atual vs anterior)",
        "Envio automático de relatórios por email",
      ],
    },
    {
      icon: Bell,
      title: "Sistema de Notificações",
      description: "Alertas inteligentes para nunca perder uma informação importante",
      benefits: [
        "Notificações push no mobile e web",
        "Alertas por email configuráveis",
        "SMS para tarefas críticas (opcional)",
        "Notificações de tarefas atribuídas",
        "Lembretes de prazos próximos",
        "Alertas de mensagens e atualizações da equipa",
      ],
    },
    {
      icon: Smartphone,
      title: "Multi-plataforma",
      description: "Acesso completo via web, iOS e Android",
      benefits: [
        "App nativa iOS e Android otimizada",
        "Interface web responsive para desktop/tablet",
        "Sincronização em tempo real entre dispositivos",
        "Modo offline para trabalho sem internet",
        "Câmara integrada para fotos de tarefas",
        "Scanner de códigos de barras/QR",
      ],
    },
    {
      icon: Calendar,
      title: "Planeamento & Calendário",
      description: "Organize tarefas e turnos com calendário integrado",
      benefits: [
        "Vista de calendário por dia/semana/mês",
        "Drag & drop para reagendar tarefas",
        "Integração com Google Calendar e Outlook",
        "Gestão de turnos e folgas",
        "Vista de carga de trabalho por colaborador",
        "Alertas de conflitos de agendamento",
      ],
    },
    {
      icon: Shield,
      title: "Segurança & Conformidade",
      description: "Dados protegidos com os mais altos padrões de segurança",
      benefits: [
        "Encriptação de dados em trânsito e repouso",
        "Backup automático diário",
        "Conformidade com RGPD",
        "Autenticação de dois fatores (2FA)",
        "Logs de auditoria completos",
        "Controlo granular de permissões",
      ],
    },
    {
      icon: Zap,
      title: "Integrações",
      description: "Conecte com as ferramentas que já usa",
      benefits: [
        "API REST para integrações personalizadas",
        "Webhooks para automações",
        "Integração com sistemas ERP/WMS",
        "Conexão com ferramentas de email",
        "Integração com Slack/Teams",
        "Export/import de dados em massa",
      ],
    },
    {
      icon: ImageIcon,
      title: "Onboarding Simplificado",
      description: "Implementação rápida e formação incluída",
      benefits: [
        "Configuração inicial em menos de 1 hora",
        "Templates prontos para vários tipos de armazém",
        "Vídeos tutoriais integrados na plataforma",
        "Sessão de formação online incluída",
        "Material de apoio em português",
        "Suporte dedicado durante implementação",
      ],
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
                Funcionalidades TaskNest
              </h1>
              <p className="text-xl text-muted-foreground">
                Uma plataforma completa com tudo o que precisa para gerir o seu armazém 
                de forma eficiente e moderna
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <Card className="border-border h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {feature.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                        <span className="text-sm font-semibold text-accent">
                          {feature.benefits.length} Funcionalidades
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-start gap-3 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Implementação em 24 Horas
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Ao contrário de sistemas complexos que demoram semanas a implementar, 
                      a TaskNest está operacional em menos de 24 horas. Sem instalações, 
                      sem hardware adicional, sem complicações.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">1h</div>
                        <div className="text-sm text-muted-foreground">Configuração Inicial</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">2h</div>
                        <div className="text-sm text-muted-foreground">Formação da Equipa</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">0</div>
                        <div className="text-sm text-muted-foreground">Custos de Setup</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CTASection
          title="Pronto para Experimentar?"
          description="Agende uma demonstração personalizada e veja todas as funcionalidades em ação"
          primaryButtonText="Agendar Demonstração"
          primaryButtonLink="/contact"
          secondaryButtonText="Ver Preços"
          secondaryButtonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Features;
