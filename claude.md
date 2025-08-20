# Desenvolvimento de Portfólio React - Instruções para Claude Code

## 📋 CONTEXTO GERAL
Vou desenvolver um portfólio profissional em React com design moderno e animações elegantes. O desenvolvimento será feito em etapas pausadas, aguardando confirmação do usuário antes de prosseguir para a próxima fase.

**Referência de design:** Site do Onyedika (https://www.onyedika.xyz/)
**Cor principal:** #c40263 (substituindo o verde da referência)
**Idioma:** Português (PT-BR)

## 🎯 REQUISITOS PRINCIPAIS
- React com TypeScript
- Totalmente responsivo (mobile, tablet, notebook, telas grandes)
- Tema claro e escuro
- Animações suaves nas transições de página
- Estrutura organizada com CSS modular
- Deploy-ready para Vercel/Netlify

## 👤 INFORMAÇÕES DO DESENVOLVEDOR
```
Nome: Dani Tavares Lobo
LinkedIn: https://www.linkedin.com/in/danitavareslobo/
GitHub: https://github.com/danitavareslobo
WhatsApp: +55 (47) 99635-6860
E-mail: danitavares.dev@gmail.com
Tecnologias: C#, .NET, React, Blazor, JavaScript, TypeScript
```

## 🚀 ETAPA 1: ESTRUTURA INICIAL E CONFIGURAÇÃO
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar projeto React com TypeScript:
```bash
npx create-react-app danitares.dev --template typescript
```

2. Instalar dependências essenciais:
```bash
npm install framer-motion react-router-dom sass
npm install --save-dev @types/react-router-dom
```

3. Criar estrutura de pastas:
```
src/
├── components/
│   ├── Layout/
│   ├── Navigation/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   └── Contact/
├── styles/
│   ├── variables.scss
│   ├── mixins.scss
│   ├── global.scss
│   └── themes.scss
├── contexts/
│   └── ThemeContext.tsx
├── hooks/
│   └── useTheme.ts
├── utils/
│   └── constants.ts
└── assets/
    └── icons/
```

4. Criar arquivo de variáveis CSS (src/styles/variables.scss):
```scss
// Cores principais
:root {
  // Tema Claro
  --color-primary: #c40263;
  --color-primary-light: #e6317b;
  --color-primary-dark: #a00151;
  --color-primary-rgb: 196, 2, 99;
  
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;
  
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --text-tertiary: #909090;
  
  --border-color: #dee2e6;
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-tertiary: #808080;
  
  --border-color: #333333;
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.4);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.5);
}

// Breakpoints
$mobile: 480px;
$tablet: 768px;
$laptop: 1024px;
$desktop: 1280px;
$wide: 1536px;

// Fontes elegantes
$font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-mono: 'JetBrains Mono', 'Fira Code', monospace;

// Transições
$transition-fast: 0.2s ease;
$transition-normal: 0.3s ease;
$transition-slow: 0.5s ease;
```

**TESTE:** Verifique se o projeto foi criado e as dependências instaladas corretamente.
**COMMIT:** "feat: estrutura inicial do projeto e configuração de variáveis"

---

## 🎨 ETAPA 2: CONTEXTO DE TEMA E COMPONENTE LAYOUT
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar ThemeContext (src/contexts/ThemeContext.tsx)
2. Criar hook useTheme (src/hooks/useTheme.ts)
3. Criar componente Layout principal
4. Configurar roteamento básico
5. Adicionar fontes elegantes do Google Fonts

**TESTE:** Verifique se o tema claro/escuro funciona
**COMMIT:** "feat: implementação do sistema de temas e layout base"

---

## 🎯 ETAPA 3: NAVEGAÇÃO E MENU ANIMADO
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar Navbar responsiva com menu hambúrguer para mobile
2. Implementar navegação suave entre seções
3. Adicionar indicador de seção ativa
4. Criar animações de hover elegantes
5. Implementar toggle de tema com animação

**TESTE:** Navegação em diferentes tamanhos de tela
**COMMIT:** "feat: navbar responsiva com animações"

---

## 🏠 ETAPA 4: HERO SECTION ANIMADA
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar Hero Section com:
   - Texto animado de apresentação
   - Efeito de digitação para título
   - Partículas ou elementos geométricos animados no fundo
   - Botões com hover animado
   - Links para redes sociais

**TESTE:** Animações e responsividade da Hero
**COMMIT:** "feat: hero section com animações"

---

## 👨‍💻 ETAPA 5: SEÇÃO SOBRE
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar seção Sobre com:
   - Animação de entrada ao scroll
   - Layout de duas colunas (texto + espaço para imagem)
   - Timeline de experiência
   - Cards animados

**TESTE:** Animações ao fazer scroll
**COMMIT:** "feat: seção sobre com animações on scroll"

---

## 💻 ETAPA 6: SEÇÃO DE HABILIDADES
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar grid de tecnologias:
   - C#, .NET, React, Blazor, JavaScript, TypeScript
   - Cards com hover 3D
   - Animações sequenciais de entrada
   - Indicadores de nível de habilidade animados

**TESTE:** Interações e animações dos cards
**COMMIT:** "feat: seção de habilidades com cards animados"

---

## 📧 ETAPA 7: SEÇÃO DE CONTATO
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Criar seção de contato com:
   - Links para LinkedIn, GitHub
   - WhatsApp e E-mail
   - Formulário de contato (opcional)
   - Animações de hover nos botões
   - Design minimalista e elegante

**TESTE:** Links e interações funcionando
**COMMIT:** "feat: seção de contato"

---

## ✨ ETAPA 8: POLIMENTO E ANIMAÇÕES FINAIS
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Adicionar:
   - Loader inicial animado
   - Transições suaves entre páginas
   - Animações de parallax
   - Cursor personalizado (opcional)
   - Otimização de performance

**TESTE:** Performance e fluidez das animações
**COMMIT:** "feat: polimento final e otimizações"

---

## 📱 ETAPA 9: AJUSTES RESPONSIVOS FINAIS
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Testar e ajustar para:
   - Mobile (320px - 768px)
   - Tablet (768px - 1024px)
   - Laptop (1024px - 1280px)
   - Desktop (1280px - 1536px)
   - Wide (1536px+)

**TESTE:** Em diferentes dispositivos/tamanhos
**COMMIT:** "fix: ajustes responsivos finais"

---

## 🚀 ETAPA 10: PREPARAÇÃO PARA DEPLOY
**AGUARDE MEU "OK" ANTES DE PROSSEGUIR**

1. Otimizar build
2. Configurar meta tags e SEO
3. Adicionar favicon e manifest
4. Criar README.md
5. Preparar para Vercel/Netlify

**TESTE:** Build de produção
**COMMIT:** "chore: preparação para deploy"

---

## 📝 NOTAS IMPORTANTES PARA O CLAUDE CODE:

1. **SEMPRE AGUARDE** confirmação com "OK" antes de prosseguir para a próxima etapa
2. **EXPLIQUE** o que foi feito em cada etapa
3. **MOSTRE** trechos de código importantes
4. **SUGIRA** melhorias quando apropriado
5. **PERGUNTE** se há preferências específicas antes de implementar
6. **TESTE** cada funcionalidade antes de avançar
7. **MANTENHA** o código limpo e bem comentado
8. **USE** TypeScript com tipagem forte
9. **IMPLEMENTE** tratamento de erros apropriado
10. **DOCUMENTE** componentes complexos
11. **LEMBRE** vc pode consultar tecnologias no linkedin e github anexados, além do texto a ser  utilizado

## 🎯 RESULTADO ESPERADO:
Um portfólio moderno, elegante e profissional que:
- Impressione recrutadores e clientes
- Seja rápido e otimizado
- Funcione perfeitamente em todos os dispositivos
- Tenha animações suaves e profissionais
- Seja fácil de manter e expandir

---

**INÍCIO:** Digite "OK" para começar a ETAPA 1