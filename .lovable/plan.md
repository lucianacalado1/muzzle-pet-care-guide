
# Muzzle Pet Food - Site Completo

## Visão Geral
Site educativo e de conversão para a marca Muzzle Pet Food, com design clean, mobile-first, usando as cores da marca (verde escuro #2D5F4A, amarelo/dourado #E5A825, bege #F0EAD6). O logo será incorporado diretamente no site.

## Páginas e Funcionalidades

### 1. Landing Page
- **Hero Section**: Fundo bege com título grande "Gominhas Naturais Muzzle", subtítulo sobre suplementação funcional, e botão CTA verde "Descobrir a dose ideal para meu pet" que leva ao quiz
- **O que são as Gominhas**: Seção explicativa sobre snacks naturais de gelatina feitos de caldo de ossos concentrado
- **Benefícios**: Cards com ícones mostrando benefícios (pele/pelo, articulações, mobilidade, digestão)
- **Como Usar**: 3 formas de uso (Snack descongelado, Geladinho congelado, Topping na refeição) + instruções de conservação
- **Prova Social**: Depoimentos de tutores com fotos e avaliações
- **CTA Final**: Seção com chamada para o quiz

### 2. Quiz Interativo (multi-step)
- Formulário passo a passo com animações suaves entre etapas:
  - **Etapa 1 - Dados do Pet**: Nome, espécie (cão/gato com ícones), idade, raça, peso, sexo
  - **Etapa 2 - Objetivo**: Seleção de objetivos (pele e pelo, articulações, mobilidade, digestão, sem preocupação específica)
  - **Etapa 3 - Alimentação**: Tipo atual (ração, alimentação natural, suplementação)
  - **Etapa 4 - Email**: Campo de email antes de ver o resultado
- Barra de progresso visual no topo

### 3. Página de Resultado
- Card personalizado com o nome do pet e dose recomendada
- Lógica: Gato = 2/dia | Cão ≤10kg = 2/dia | 10-25kg = 4/dia | +25kg = 6/dia
- Explicação dos benefícios baseada nos objetivos selecionados
- Botão "Fazer pedido pelo WhatsApp" com mensagem pré-formatada automática
- Os dados ficam em memória local (sem backend necessário)

### 4. Design
- Mobile-first, responsivo
- Paleta: verde escuro, dourado/amarelo, bege claro
- Tipografia arredondada e acolhedora
- Logo Muzzle no header
- Ícones com tema pet (patinhas, ossos)
- Inspiração Barkyn: limpo, espaçoso, premium

### Navegação
- Header fixo com logo e link para o quiz
- Footer com informações da marca e redes sociais
- Rotas: `/` (landing), `/quiz` (quiz), `/resultado` (resultado)
