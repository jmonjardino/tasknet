import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the form data to your backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contacto consigo em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Entre em Contacto
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos prontos para ajudar a transformar a gestão do seu armazém. 
                Agende uma demonstração ou esclareça as suas dúvidas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Agendar Demonstração
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">
                            Nome Completo <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="João Silva"
                            className="mt-2"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="joao@empresa.pt"
                            className="mt-2"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+351 912 345 678"
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company">Empresa</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nome da Empresa"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">
                          Mensagem <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Conte-nos sobre as necessidades do seu armazém..."
                          className="mt-2 min-h-[150px]"
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Ao enviar este formulário, concorda com a nossa{" "}
                        <a href="#" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Morada</h3>
                        <p className="text-sm text-muted-foreground">
                          Av. da Liberdade 123
                          <br />
                          1250-143 Lisboa
                          <br />
                          Portugal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                        <p className="text-sm text-muted-foreground">+351 210 123 456</p>
                        <p className="text-sm text-muted-foreground">+351 912 345 678</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">info@tasknest.pt</p>
                        <p className="text-sm text-muted-foreground">suporte@tasknest.pt</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta: 09:00 - 18:00
                          <br />
                          Sábado e Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Resposta Rápida</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprometemo-nos a responder a todas as mensagens em menos de 24 horas 
                      (dias úteis).
                    </p>
                    <div className="text-3xl font-bold text-primary">{"<"} 24h</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Visite-nos</h2>
                <p className="text-lg text-muted-foreground">
                  Estamos no coração de Lisboa, facilmente acessível por transportes públicos
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.7168786832404!2d-9.145841684463464!3d38.72412597959672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347f58e7c10b%3A0x2b67c2c1a7405b94!2sAv.%20da%20Liberdade%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização TaskNest"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
