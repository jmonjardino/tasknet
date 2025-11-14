import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Geral",
      questions: [
        {
          question: "O que é a TaskNest?",
          answer:
            "A TaskNest é uma plataforma SaaS (Software as a Service) especializada em gestão de tarefas e equipas para armazéns de pequenas e médias empresas. Combinamos gestão operacional eficiente com gamificação para aumentar a produtividade e motivação das equipas.",
        },
        {
          question: "Para que tipo de empresas é indicada?",
          answer:
            "A TaskNest é ideal para pequenas e médias empresas com armazéns ou centros de distribuição, independentemente do sector. Desde e-commerce, retalho, distribuição alimentar, logística, até indústria transformadora. Se tem uma equipa que gere tarefas num armazém, a TaskNest é para si.",
        },
        {
          question: "Preciso de instalar algum software?",
          answer:
            "Não! A TaskNest é 100% cloud-based. Basta aceder através de qualquer navegador web ou descarregar a nossa app mobile (iOS/Android). Não é necessário instalar servidores ou software adicional. Tudo funciona online e sincroniza automaticamente.",
        },
      ],
    },
    {
      category: "Preços & Planos",
      questions: [
        {
          question: "Quanto custa a TaskNest?",
          answer:
            "Os nossos planos começam a partir de €49/mês para até 10 utilizadores. Temos planos flexíveis que se adaptam ao tamanho da sua empresa. Entre em contacto connosco para um orçamento personalizado baseado nas suas necessidades específicas.",
        },
        {
          question: "Existe período de teste gratuito?",
          answer:
            "Sim! Oferecemos 14 dias de teste gratuito sem necessidade de cartão de crédito. Pode explorar todas as funcionalidades da plataforma e decidir se faz sentido para a sua empresa.",
        },
        {
          question: "Os preços incluem formação e suporte?",
          answer:
            "Sim! Todos os planos incluem: sessão de onboarding inicial, formação da equipa, material de apoio em português, suporte por email e telefone. Planos superiores incluem suporte prioritário e gestor de conta dedicado.",
        },
      ],
    },
    {
      category: "Implementação & Onboarding",
      questions: [
        {
          question: "Quanto tempo demora a implementação?",
          answer:
            "A TaskNest pode estar operacional em menos de 24 horas. A configuração inicial demora cerca de 1 hora, seguida de 2 horas de formação da equipa. Ao contrário de sistemas tradicionais que demoram semanas, começamos a gerar valor imediatamente.",
        },
        {
          question: "Que equipamentos são necessários?",
          answer:
            "Apenas smartphones ou tablets com acesso à internet. A TaskNest funciona em qualquer dispositivo iOS ou Android, bem como em computadores via navegador web. Não é necessário hardware especial ou leitores dedicados.",
        },
        {
          question: "Conseguem migrar dados do nosso sistema atual?",
          answer:
            "Sim! Ajudamos na migração de dados de sistemas existentes (Excel, outras plataformas). A nossa equipa faz o import de colaboradores, tarefas e histórico para garantir uma transição suave sem perda de informação.",
        },
      ],
    },
    {
      category: "Funcionalidades",
      questions: [
        {
          question: "O sistema funciona offline?",
          answer:
            "Sim, parcialmente. A app mobile permite consultar tarefas, marcar como concluídas e tirar fotos mesmo sem internet. Assim que recuperar ligação, tudo sincroniza automaticamente. Ideal para armazéns com zonas de má cobertura.",
        },
        {
          question: "Como funciona o sistema de gamificação?",
          answer:
            "Os colaboradores ganham pontos ao completar tarefas. Quanto mais rápido e melhor executam, mais pontos recebem. Existe um ranking visível em tempo real que promove competição saudável. Gestores podem definir challenges e recompensas personalizadas (ex: melhor da semana ganha voucher).",
        },
        {
          question: "Posso personalizar os relatórios?",
          answer:
            "Sim! Pode criar relatórios totalmente personalizados escolhendo métricas, períodos, filtros e formato de visualização. Os relatórios podem ser agendados para envio automático por email (diário, semanal, mensal) em PDF ou Excel.",
        },
      ],
    },
    {
      category: "Segurança & Privacidade",
      questions: [
        {
          question: "Os meus dados estão seguros?",
          answer:
            "Absolutamente. Usamos encriptação de ponta a ponta (SSL/TLS), backups diários automáticos, e os nossos servidores estão alojados em data centers europeus certificados. Somos totalmente conformes com o RGPD e nunca partilhamos dados com terceiros.",
        },
        {
          question: "Quem tem acesso aos dados da minha empresa?",
          answer:
            "Apenas os utilizadores que autorizar. Cada colaborador tem login único e pode definir permissões granulares (ex: uns vêem apenas as suas tarefas, gestores vêem tudo). Pode revogar acessos instantaneamente quando alguém sai da empresa.",
        },
        {
          question: "Como funcionam os backups?",
          answer:
            "Fazemos backups automáticos diários de todos os dados. Em caso de necessidade, podemos restaurar informação de qualquer ponto no tempo. Os dados são replicados geograficamente para garantir disponibilidade mesmo em caso de falha de um data center.",
        },
      ],
    },
    {
      category: "Suporte & Ajuda",
      questions: [
        {
          question: "Que tipo de suporte oferecem?",
          answer:
            "Suporte por email (resposta em 24h), telefone em horário comercial, e base de conhecimento com tutoriais e FAQs. Planos superiores incluem suporte prioritário com resposta em 4h e chat directo com a equipa técnica.",
        },
        {
          question: "Existe formação contínua?",
          answer:
            "Sim! Oferecemos webinars mensais gratuitos sobre melhores práticas, novas funcionalidades e dicas avançadas. Também temos uma biblioteca completa de vídeos tutoriais e guias em português acessível 24/7.",
        },
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
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-muted-foreground">
                Encontre respostas rápidas às questões mais comuns sobre a TaskNest
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    {category.category}
                  </h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem
                        key={questionIndex}
                        value={`${categoryIndex}-${questionIndex}`}
                        className="border border-border rounded-lg px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold text-foreground pr-4">
                            {item.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Não Encontrou a Resposta?
                </h2>
                <p className="text-lg text-muted-foreground">
                  A nossa equipa está disponível para ajudar com qualquer questão
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Telefone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Segunda a Sexta
                      <br />
                      09:00 - 18:00
                    </p>
                    <Button variant="outline" className="w-full">
                      +351 210 123 456
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Resposta em 24h
                      <br />
                      (dias úteis)
                    </p>
                    <Button variant="outline" className="w-full">
                      suporte@tasknest.pt
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Chat ao Vivo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Disponível em
                      <br />
                      horário comercial
                    </p>
                    <Button variant="outline" className="w-full">
                      Iniciar Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Pronto para Começar?"
          description="Experimente a TaskNest gratuitamente durante 14 dias, sem necessidade de cartão de crédito"
          primaryButtonText="Começar Teste Gratuito"
          primaryButtonLink="/contact"
          secondaryButtonText="Agendar Demonstração"
          secondaryButtonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
