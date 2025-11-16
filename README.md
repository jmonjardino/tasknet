/Users/monjardino/Desktop/ISCTE/empreendorismo/tasknet/README.md
# TaskNest

Landing page em React com UI moderna, focada em gestão de armazéns (PME), incluindo páginas de produto e formulário de contacto que envia dados para um webhook.

## Visão Geral
- Páginas: `Início`, `Sobre`, `Funcionalidades`, `Blog`, `FAQ`, `Contactos`, `Carreiras`
- Formulário de contacto envia `POST` em JSON para um webhook configurável
- UI baseada em [shadcn/ui] com Tailwind, ícones [Lucide], navegação com React Router

## Stack
- `Vite` (React + TypeScript)
- `React 18`, `react-router-dom`
- `Tailwind CSS`, `shadcn/ui`
- `Lucide Icons`
- `@tanstack/react-query` (infra de dados)
- Opcional: `n8n` para receber o webhook e enviar emails

## Requisitos
- Node.js 18+
- npm 9+

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```
- Servidor: `http://localhost:8080/`

## Build & Preview
```bash
npm run build
npm run preview
```
- Preview: `http://localhost:8080/` (porta pode variar)

## Estrutura
- `src/pages/*` páginas principais
- `src/components/*` componentes (Navbar, Footer, Hero, etc.)
- `src/components/ui/*` componentes de UI (shadcn/ui)
- `index.html` metadados, favicon e bootstrap
- `vite.config.ts` configurações do dev server e proxy

## Formulário de Contacto
- Local: `src/pages/Contact.tsx`
- Payload JSON enviado:
```json
{
  "name": "João Silva",
  "email": "joao@empresa.pt",
  "phone": "+351 912 345 678",
  "company": "Empresa X",
  "message": "Conte-nos sobre as necessidades do seu armazém..."
}
```
- Endpoint atual do envio:
