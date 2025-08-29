<div align="center">

# Chatbot Inteligente 100% Offline com Prompt API do Chrome

Construindo um widget de chatbot embarcado que roda totalmente no navegador, explorando os recursos experimentais de AI locais da Chrome Prompt API.

</div>

---

## 📢 Semana JS Expert 09

Este repositório faz parte da **Semana JS Expert 09**, evento gratuito ministrado entre **25/08/2025 e 31/08/2025**.

As aulas completas estão disponíveis em:

👉 [Semana JS Expert 09 na EW Academy](https://now.ew.academy/semana-js-expert-9?utm_source=githubreadme)

> Aproveite enquanto o acesso gratuito estiver liberado! Compartilhe o link com quem quer dominar JavaScript moderno.

### Certificado

Caso você conclua todas as aulas e desafios, receberá este certificado de conclusão (bonitão):

![JavaScript](./certificate.png)

---

### Live demo

- Link para teste:https://oracleapex-com-bot-ia.hallanchristian.com.br

---

## 📚 Sumário

- [Semana JS Expert 09](#-semana-js-expert-09)
- [Preview](#-preview)
- [Objetivo](#-objetivo)
- [Recursos Principais](#-recursos-principais)
- [Arquitetura e Estrutura](#-arquitetura-e-estrutura)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação Rápida](#-instalação-rápida)
- [Executando](#-executando)
- [Embutindo o Widget em Outro Site](#-embutindo-o-widget-em-outro-site)
- [Customização](#-customização)
- [Limitações e Avisos](#-limitações-e-avisos)
- [Roadmap / Próximos Passos](#-roadmap--próximos-passos)
- [FAQ](#-faq)
- [Contribuição](#-contribuição)
- [EW Academy](#-ew-academy)

---

## 🎯 Objetivo

Aprender, de forma prática, como criar um chatbot que usa **modelos de IA locais / embarcados** via recursos experimentais do Chrome, sem depender de um backend externo. Você terá um widget reutilizável que pode ser plugado em qualquer página.

## 🚀 Recursos Principais

- 100% offline (sem chamadas para servidores – ideal para protótipos e privacidade).
- API moderna do Chrome (Prompt API / AI APIs experimentais).
- Arquitetura simples com separação entre Controller, View e Services.
- Suporte a mensagens streaming simuladas / indicador de digitação.
- Fácil de estilizar via CSS custom properties.
- Preparado para abortar requisições (ex: botão Stop nas aulas avançadas).

## 🧱 Arquitetura e Estrutura do Widget

```

sdk/
    ew-chatbot.html      # Snippet para embutir
    ew-chatbot.css       # Estilos e variáveis CSS
    src/
        index.js           # Bootstrapping
        controllers/chatBotController.js
        views/chatBotView.js
        services/promptService.js (adapta chamadas de IA)
    botData/
        systemPrompt.txt
        chatbot-config.json
        avatar.webp
```

- Cada aula possui evolução incremental (ex: abortar requests, streaming, melhorias UX...).
- A pasta `_template` serve como base para começar novas aulas/features.

## ✅ Pré-requisitos

- Node.js 22+ (para scripts utilitários e servidor estático simples).
- Navegador **Chrome** (versão compatível com as AI / Prompt APIs experimentais).
- Habilitar flags experimentais:
  - [chrome://flags/#prompt-api-for-gemini-nano](chrome://flags/#prompt-api-for-gemini-nano)

## ⚠️ Limitações e Avisos

- As Chrome AI / Prompt APIs ainda são experimentais e podem mudar ou exigir flags.
- Recursos offline dependem do suporte do navegador / hardware local.
- Este projeto é educacional – não destina-se a produção sem revisões de segurança.

## ❓ FAQ

**Funciona em Firefox / Safari?** Atualmente o foco é Chrome (APIs experimentais específicas).

**Preciso de servidor backend?** Não para o núcleo demonstrado; tudo roda no cliente.

**Como altero o prompt inicial?** Edite `botData/systemPrompt.txt`.

---

Feito com 💜 durante a Semana JS Expert 09.
