# Teste de Qualidade - Projeto Rubeus

## Relatório de Inspeção de Qualidade (QA)

---

##  Ambiente de Teste

* Navegador: Google Chrome (versão atual)
* Resolução: 1920x1080 (Desktop)
* Tipo de Teste: Manual (Exploratório e Funcional)

---

##  Escopo dos Testes

Os testes foram realizados nos seguintes ambientes:

* **Landing Page Principal:** https://qualidade.apprbs.com.br/site  
* **Página de Certificação:** https://qualidade.apprbs.com.br/certificacao  

Este relatório apresenta o levantamento detalhado de falhas funcionais, problemas de usabilidade e inconsistências de interface identificadas durante os ciclos de teste.

---

##  Metodologia de Teste

Os testes foram conduzidos utilizando:

* Testes exploratórios
* Validação de formulários
* Análise heurística de usabilidade
* Inspeção visual de layout (CSS e Grid)
* Testes de navegação e fluxo do usuário

---

#  Ciclo de Teste 01 – Landing Page Institucional

##  Resumo Executivo

Nesta etapa, a análise concentrou-se na validação de formulários, fluxo de navegação, comportamento dos elementos interativos e consistência visual. Foram identificados pontos que impactam diretamente conversão, experiência do usuário e percepção de credibilidade institucional.

---

## 🔴 1. Críticos (Prioridade Alta)

* **Falha de Validação Obrigatória:** O formulário permite envio (botão "Concluir") sem o preenchimento do campo de telefone, possibilitando registros incompletos.
* **Persistência Indevida de Mensagem de Erro:** Mensagens em vermelho nos campos Nome e Email permanecem visíveis mesmo após correção ou remoção do conteúdo.
* **Comportamento de Navegação Duplicado:** Links como "Nossos Diferenciais", "Eventos" e "Depoimentos" realizam scroll na página atual e abrem nova aba simultaneamente.
* **Redirecionamento Incorreto:** O link "Atendimento" abre o WhatsApp, duplicando a função do botão adjacente.

---

## 🟠 2. Médios (Prioridade Média)

* **Banners Inertes:** O carrossel principal não é clicável.
* **Ausência de Navegação Automática:** Slides não avançam automaticamente.
* **Baixa Visibilidade das Setas do Carrossel:** Falta de contraste compromete identificação.
* **Ausência de Feedback Visual (Hover):** Elementos interativos não apresentam mudança de estado ao passar o cursor.
* **Área de Clique Desalinhada (Hitbox):** Zona de interação excede limites visuais.
* **Hierarquia Visual Insuficiente (Depoimentos):** Seção não recebe destaque proporcional.
* **Arquitetura de Informação Inadequada:** Redes sociais posicionadas fora do padrão esperado.

---

## 🟡 3. Baixos (Prioridade Baixa)

* **Inconsistência Tipográfica:** Mistura de fontes e uso despadronizado de caixa alta e baixa nos menus.
* **Desalinhamento de Grid:** Logotipo fora do centro vertical; datas do carrossel desalinhadas; rodapé desorganizado.
* **Baixa Qualidade e Distorção de Imagem:** Banner principal com resolução inferior e aspect ratio incorreto.

---

##  Evidências – Ciclo 01

As evidências visuais foram registradas para cada item classificado, contemplando prints das falhas funcionais e inconsistências visuais identificadas.

<details>
<summary>Clique para expandir as Evidências do Ciclo 01</summary>

### Evidência 01 
![Ciclo1-1](Evidências/Ciclo1-1.png)

### Evidência 02 
![Ciclo1-2](Evidências/Ciclo1-2.png)

### Evidência 03 
![Ciclo1-3](Evidências/Ciclo1-3.png)

### Evidência 04 
![Ciclo1-4](Evidências/Ciclo1-4.png)

### Evidência 05 
![Ciclo1-5](Evidências/Ciclo1-5.png)
</details>

###  Conclusão:
A aplicação apresenta uma estrutura base funcional, porém carece de polimento técnico na camada de front-end (CSS/Layout) e revisões de lógica no back-end para validação de dados. A correção dos itens de **Prioridade Alta** é recomendada antes da publicação em ambiente de produção para evitar a poluição do banco de dados com leads incompletos.

---

###  Detalhamento dos Itens:
### Ciclo de Teste 01 - Página de Site
**Ambiente de Teste (URL):** https://qualidade.apprbs.com.br/site

**Item 01 – Link de "Atendimento" direcionando para WhatsApp**
* **Tipo:** Correção
* **Classificação:** Usabilidade (gera confusão no fluxo esperado pelo usuário)
* **Prioridade:** Média (o usuário consegue ser atendido, mas não da forma indicada pelo rótulo)
* **Descrição:** Ao clicar na opção "Atendimento", o sistema redireciona o usuário para o WhatsApp, o mesmo comportamento do botão vizinho. O esperado seria o direcionamento para uma página de suporte, central de ajuda ou formulário de contato.

**Item 02 – Inconsistência visual e falta de ícone em "Institucional"**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** O item "Institucional" destoa dos demais elementos do cabeçalho por não possuir um ícone representativo, quebrando o padrão visual estabelecido em "Atendimento", "WhatsApp" e "Biblioteca".

**Item 03 – Tipografia inadequada (Font-family inconsistente)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** Os itens "Institucional" e "Biblioteca" utilizam uma caligrafia (fonte) que não harmoniza com o restante do sistema. Recomenda-se a padronização tipográfica para manter a identidade visual da aplicação.

**Item 04 – Espaçamento e distribuição irregular de ícones**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** Os ícones de redes sociais e os links de menu apresentam um agrupamento irregular, com espaços em branco excessivos em algumas áreas e falta de alinhamento centralizado no container, prejudicando a estética da interface.

**Item 05 – Área de clique (Hitbox) desalinhada ou excessiva**
* **Tipo:** Correção
* **Classificação:** Usabilidade
* **Prioridade:** Média
* **Descrição:** A zona de interação (hitbox) dos ícones e textos do menu superior não está restrita aos limites visuais dos elementos. Existe um "vazamento" da área clicável para os espaços vazios ao redor, o que pode causar cliques acidentais e dificultar a navegação precisa do usuário. O esperado é que a área ativa corresponda exatamente ao tamanho do botão ou ícone.

**Item 06 – Comportamento de navegação duplicado em "Nossos Diferenciais"**
* **Tipo:** Correção
* **Classificação:** Usabilidade
* **Prioridade:** Alta
* **Descrição:** Ao clicar no link "Nossos Diferenciais", “Eventos” Depoimentos”, o sistema direciona a página atual para a seção correspondente e, simultaneamente, abre uma nova aba com o mesmo conteúdo. Isso gera poluição no navegador do usuário e uma quebra no fluxo de navegação esperado. O link deve apenas realizar o scroll na página atual ou abrir uma nova aba, nunca ambos.

**Item 07 – Falta de destaque e contraste no botão "Falar com Consultor"**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O botão de Call to Action (CTA) principal apresenta um design "vazio" (ghost button) que não atrai a atenção necessária. Ele parece "perdido" no cabeçalho por não possuir uma cor de destaque que o diferencie dos links comuns de navegação, dificultando a conversão.

**Item 08 – Inconsistência de "Case" (Maiúsculas e Minúsculas) nos menus**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** Existe uma falta de padronização na identidade visual entre as seções da página. No menu superior, os itens utilizam "Sentence case" (ex: Atendimento, WhatsApp), enquanto no menu inferior (claro), os itens estão todos em "UPPERCASE" (ex: NOSSOS DIFERENCIAIS, EVENTOS).

**Item 09 – Desalinhamento vertical do Logotipo**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** O logotipo "FACULDADE EXEMPLO" apresenta um leve desalinhamento em relação ao centro vertical dos itens de menu posicionados à direita. Este problema de alinhamento de grid prejudica a harmonia visual do cabeçalho.

**Item 10 – Ausência generalizada de Feedback Visual (Hover)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Nenhum elemento interativo da página (botões, ícones de redes sociais ou links de menu) apresenta mudança de estado, como alteração de cor, brilho ou preenchimento, ao sofrer a interação do cursor (hover). Essa falta de resposta visual prejudica a navegabilidade, pois o usuário não recebe confirmação imediata de que o item é clicável antes de efetuar a ação.

**Item 11 – Baixa qualidade (nitidez) em imagem de banner**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A imagem principal do banner ("Graduação"), que apresenta a figura de uma mulher, exibe baixa resolução e parece borrada. Isso prejudica o apelo visual da página inicial, dando uma impressão de falta de cuidado com a qualidade gráfica. O ideal seria utilizar uma imagem de alta definição para esta posição de destaque.

**Item 12 – Carrossel de banner sem navegação automática**
* **Tipo:** Melhoria
* **Classificação:** Usabilidade
* **Prioridade:** Alta
* **Descrição:** O banner principal da página não apresenta transição automática de cenas (slides), permanecendo estático por tempo indeterminado. Além disso, o elemento não é clicável e não possui links (CTAs) de redirecionamento. Como o banner de destaque é a área de maior visibilidade, a falta de movimento obriga o usuário a descobrir a navegação manual, e a ausência de links impede a conversão direta para as ofertas anunciadas. O esperado é que os slides avancem automaticamente a cada 5-7 segundos e que o banner funcione como um link funcional.

**Item 13 – Setas de navegação do carrossel com visibilidade muito baixa**
* **Tipo:** Correção
* **Classificação:** Usabilidade
* **Prioridade:** Alta
* **Descrição:** As setas laterais para a navegação manual do carrossel são quase invisíveis. Elas são pequenas e não possuem um fundo com contraste suficiente em relação à imagem do banner, dificultando sua identificação por qualquer usuário, especialmente aqueles com baixa visão. Isso agrava o problema da falta de navegação automática. Recomenda-se aumentar o tamanho e, crucialmente, o contraste das setas para garantir sua visibilidade.

**Item 14 – Falta de indicação visual de "Página Ativa"**
* **Tipo:** Melhoria
* **Classificação:** Usabilidade
* **Prioridade:** Baixa
* **Descrição:** No menu superior ou inferior, não há uma indicação visual (como um sublinhado ou cor diferente) que mostre em qual página o usuário está no momento. Isso pode deixar o usuário desorientado em navegações mais longas.

**Item 15 – Ícones de Redes Sociais sem Identificação (Alt Text)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade / Acessibilidade
* **Prioridade:** Média
* **Descrição:** Os ícones de redes sociais (LinkedIn, Facebook, etc.) dependem puramente da interpretação visual do usuário. Para acessibilidade (leitores de tela), cada ícone deve ter uma descrição clara. Além disso, esteticamente, eles parecem "flutuar" sem um rótulo que os conecte ao contexto de "Siga-nos" ou "Redes Sociais".

**Item 16 – Proporção e Distorção de Elementos (Biblioteca)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** O ícone e o texto de "BIBLIOTECA" parecem ter um peso visual muito maior do que os outros itens do menu escuro, possivelmente devido à fonte ou ao preenchimento do ícone de livro. Isso quebra o equilíbrio visual da barra de navegação.

**Item 17 – Banners do Carrossel não são clicáveis**
* **Tipo:** Melhoria
* **Classificação:** Usabilidade
* **Prioridade:** Média
* **Descrição:** Os banners principais funcionam apenas como elementos visuais estáticos. Ao clicar na imagem do banner, nenhuma ação é executada. O esperado seria que o banner inteiro (ou um botão interno de "Saiba Mais") funcionasse como um link para a página de destino do conteúdo anunciado.

**Item 18 – Desalinhamento vertical de texto (Datas do carrossel)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** Os elementos de data no carrossel apresentam falha de alinhamento vertical. O número (ex: "05") está excessivamente deslocado para cima em relação ao mês (ex: "fevereiro"), quebrando a harmonia visual e dificultando a leitura rápida do conjunto da data.

**Item 19 – Distorção de imagem no banner**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Além da baixa resolução já mencionada, a imagem da mulher no banner principal apresenta sinais de distorção (aspect ratio incorreto). A imagem parece "esticada" ou "achatada", o que compromete o profissionalismo da interface visual.

**Item 20 – Posicionamento inadequado das setas de navegação**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** As setas de navegação lateral do carrossel estão posicionadas muito distantes do conteúdo central ou das bordas lógicas do banner. Esse distanciamento excessivo dificulta a percepção do usuário de que as setas pertencem ao controle daquele elemento específico.

**Item 21 – Desalinhamento de conteúdo na seção Newsletter**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** O título "NÃO FIQUE DE FORA!" e o texto de apoio (Lorem Ipsum) não estão alinhados corretamente em relação ao formulário ao lado. A falta de um eixo central ou uma distribuição simétrica entre o texto e os campos de entrada prejudica a estética visual da seção.

**Item 22 – Falta de espaçamento (Respiro) entre elementos do formulário**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O botão "CONCLUIR" está visualmente "colado" ao campo de telefone, sem a margem necessária para separá-los. Essa ausência de espaçamento (padding/margin) torna a interface densa e dificulta a distinção clara entre os campos de preenchimento e a ação final de envio.

**Item 23 – Baixo contraste no texto do botão "CONCLUIR"**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Alta
* **Descrição:** O texto "CONCLUIR" apresenta baixa legibilidade devido ao pouco contraste entre a cor da fonte e o fundo do botão. Isso fere princípios de acessibilidade, tornando o botão de ação principal difícil de ler para o usuário.

**Item 24 – Erro na lógica de persistência de validação (Campos Nome e Email)**
* **Tipo:** Correção
* **Classificação:** Utilidade
* **Prioridade:** Alta
* **Descrição:** Ao interagir com os campos "Nome" e "Email", inserir informações e depois apagá-las, o sistema exibe e mantém a mensagem de erro em vermelho ("preencha esses campos") de forma persistente. O esperado seria que a mensagem de erro fosse limpa ou reavaliada conforme a interação do usuário.

**Item 25 – Falha na validação de campos obrigatórios (Botão Concluir)**
* **Tipo:** Correção
* **Classificação:** Utilidade
* **Prioridade:** Alta
* **Descrição:** O formulário permite o envio dos dados através do botão "CONCLUIR" mesmo sem o preenchimento do campo de número de telefone. O esperado seria que o sistema bloqueasse a ação e exibisse uma mensagem de erro até que todos os campos necessários fossem preenchidos.

**Item 26 – Arquitetura de informação inadequada (Redes Sociais)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Os ícones de redes sociais apresentam um tamanho desproporcional e ocupam um espaço nobre no corpo da página. O padrão esperado é que esses elementos fiquem localizados de forma discreta no rodapé (footer).

**Item 27 – Falta de hierarquia visual na seção de Depoimentos**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** A seção "O QUE NOSSOS ALUNOS DIZEM?" carece de destaque visual. O título e os cards de depoimento fundem-se ao fundo branco da página, sem sombras ou bordas que os delimitem.

**Item 28 – Desalinhamento generalizado no Rodapé (Footer)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** As colunas de informações ("Endereço", "Contatos" e "UNIEXEMPLO Social") apresentam desalinhamento vertical e horizontal entre si. O texto de copyright na base também não está centralizado.

**Item 29 – Ausência de ícones representativos em "Social"**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** Na seção do rodapé intitulada "UNIEXEMPLO Social", os links são apresentados apenas como texto. O padrão de usabilidade dita o uso de ícones oficiais (LinkedIn, Facebook, Instagram) para identificação imediata.

**Item 30 – Problemas de Design no Balão de Matrícula**
* **Tipo:** Melhoria
* **Prioridade:** Baixa
* **Descrição:** O texto "MATRÍCULAS ABERTAS" está descentralizado verticalmente (muito próximo da borda inferior) e o balão está desalinhado em relação ao topo do formulário. Há baixo contraste entre o fundo amarelo e a fonte branca.

---

#  Ciclo de Teste 02 – Página de Certificação

##  Resumo Executivo

Nesta etapa, a análise focou na jornada de inscrição, validação de dados, consistência visual e presença de informações institucionais. Foram identificadas falhas que impactam conversão, acessibilidade e credibilidade jurídica da página.

---

## 🔴 1. Críticos (Prioridade Alta)

* **Botão "Saiba Mais" Inoperante:** Não executa nenhuma ação ao clique.
* **Ausência de Menu de Navegação Superior:** Usuário não consegue acessar outras áreas do site.
* **Inconsistência na Obrigatoriedade dos Campos:** Botão "AVANÇAR" é habilitado apenas com preenchimento do e-mail.
* **Ausência de Informações Institucionais no Rodapé:** Falta de CNPJ, endereço e políticas, comprometendo segurança jurídica e confiança do usuário.

---

## 🟠 2. Médios (Prioridade Média)

* **Baixo Contraste no Botão "AVANÇAR":** Prejudica legibilidade e acessibilidade.
* **Desalinhamento Geral do Formulário:** Elementos não seguem eixo consistente.
* **Ausência de Efeito Hover nos Botões:** Falta de feedback visual nas principais ações.
* **Excesso de Espaçamento entre Blocos:** Grandes vazios comprometem unidade visual.
* **Hierarquia de Títulos Inconsistente:** Dificulta leitura escaneável.
* **Sobreposição Inadequada do Selo "Gratuita":** Elemento invade área da imagem principal.

---

## 🟡 3. Baixos (Prioridade Baixa)

* **Ausência de Favicon:** Aba do navegador não possui identificação visual.
* **Baixa Qualidade e Corte Inadequado das Imagens:** Fotos com resolução insuficiente e enquadramento inadequado.
* **Desalinhamento de Ícones no Rodapé:** Redes sociais fora do eixo visual.
* **Falta de Espaçamento Interno (Padding):** Elementos muito próximos às bordas.
* **Inconsistência na Apresentação dos Cursos:** Texto sobreposto às imagens de forma pouco harmônica.

---

##  Evidências – Ciclo 02

As evidências foram registradas por meio de capturas de tela demonstrando os comportamentos identificados e inconsistências visuais analisadas.

<details>
<summary>Clique para expandir as Evidências do Ciclo 02</summary>

### Evidência 01
![Ciclo2-1](Evidências/Ciclo2-1.png)

### Evidência 02
![Ciclo2-2](Evidências/Ciclo2-2.png)

### Evidência 03
![Ciclo2-3](Evidências/Ciclo2-3.png)

### Evidência 04
![Ciclo2-4](Evidências/Ciclo2-4.png)

### Evidência 05
![Ciclo2-5](Evidências/Ciclo2-5.png)
</details>

###  Conclusão:

Após a segunda rodada de testes, observou-se evolução em parte das correções implementadas, porém ainda permanecem pontos críticos relacionados à validação de formulário e comportamento de navegação. Os itens pendentes continuam apresentando risco direto à conversão de leads e à experiência do usuário, exigindo priorização para evitar impactos funcionais e regressões futuras. Recomenda-se validação adicional após as próximas correções para garantir estabilidade e conformidade com os requisitos esperados.

---

##  Detalhamento dos Itens

**Item 1 – Botão "Saiba Mais" Inoperante**
* **Tipo:** Correção
* **Classificação:** Utilidade
* **Prioridade:** Alta
* **Descrição:** O botão "Saiba Mais" não apresenta comportamento de clique (não encaminha para nenhuma seção ou link), impedindo o usuário de obter mais informações.

**Item 2 – Ausência de Efeito Hover nos Botões**
* **Tipo:** Melhoria
* **Classificação:** Usabilidade
* **Prioridade:** Média
* **Descrição:** Os botões "Saiba Mais" e "Quero me certificar" não possuem estado de hover (mudança de cor ao passar o mouse), o que prejudica o feedback visual para o usuário.

**Item 3 – Ausência de Favicon na aba do navegador**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A página não possui um Favicon (ícone da marca na aba do navegador). Isso prejudica a identificação visual da "Faculdade Exemplo" quando o usuário possui várias abas abertas.

**Item 4 – Sobreposição inadequada do selo "Gratuita"**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O selo de certificação gratuita está sobreposto à imagem principal de forma invasiva, cobrindo parte do rosto da modelo e gerando poluição visual.

**Item 5 – Ausência de Menu de Navegação Superior (Header)**
* **Tipo:** Nova Funcionalidade
* **Classificação:** Usabilidade
* **Prioridade:** Alta
* **Descrição:** A página não apresenta um menu superior ou "menu hambúrguer". Isso impede que o usuário navegue para outras áreas do site ou acesse informações institucionais.

**Item 6 – Inconsistência na obrigatoriedade dos campos**
* **Tipo:** Correção
* **Classificação:** Utilidade
* **Prioridade:** Alta
* **Descrição:** O botão "AVANÇAR" é habilitado apenas com o preenchimento do e-mail. Todos os campos (Nome e Telefone) deveriam ser obrigatórios e possuir validação.

**Item 7 – Baixa qualidade da imagem (Avatar)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A foto do profissional ao lado dos depoimentos está desfocada e com baixa resolução, o que prejudica a estética profissional da página.

**Item 8 – Desalinhamento geral dos elementos do formulário**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Os elementos internos do formulário (título, campos e botão) não seguem uma linha de alinhamento comum, transmitindo uma sensação de desorganização.

**Item 9 – Baixo Contraste no Botão "AVANÇAR"**
* **Tipo:** Melhoria
* **Classificação:** Usabilidade
* **Prioridade:** Média
* **Descrição:** O contraste entre a cor do botão "AVANÇAR" e o fundo é inadequado, prejudicando a legibilidade e a acessibilidade.

**Item 10 – Linha de Progresso Desalinhada**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A linha branca que indica o progresso está visivelmente desalinhada ou encostando na borda, sugerindo erro de desenvolvimento visual.

**Item 11 – Inconsistência na Hierarquia de Títulos**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O título principal do formulário está centralizado, enquanto os rótulos dos campos estão alinhados à esquerda, quebrando a harmonia visual.

**Item 12 – Erro de Alinhamento e Centralização de Texto**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Os blocos de texto nas seções centrais e inferiores estão excessivamente deslocados para a direita, criando espaços vazios desproporcionais.

**Item 13 – Falta de Destaque Visual em Elementos Chave**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A página carece de contraste e elementos gráficos que destaquem as informações importantes, dificultando a leitura escaneável.

**Item 14 – Texto sem Contêiner (Fora de Box)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Os parágrafos informativos estão "soltos" no fundo da página, sem estarem contidos em seções visualmente delimitadas.

**Item 15 – Desalinhamento do Botão de Ação no Rodapé**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O botão amarelo "Quero me certificar" apresenta um desalinhamento em relação ao texto e às margens da faixa escura, sem seguir uma regra de grid.

**Item 16 – Excesso de Espaçamento entre Informações e Elementos**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Grandes vazios entre blocos de texto e ícones quebram a unidade visual da página, exigindo rolagem excessiva.

**Item 17 – Falta de Destaque Visual em Elementos Chave (Cursos)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A seção inferior carece de ícones ou cores de apoio que atraiam a atenção do usuário para os pontos principais.

**Item 18 – Inconsistência nos Textos e Formatação dos Cursos**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O texto "Curso: Lorem Ipsum..." está posicionado diretamente sobre a imagem de forma pouco estética, comprometendo o design e a clareza.

**Item 19 – Desalinhamento da Seta de "Saiba mais"**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** A seta nos cartões de curso está excessivamente deslocada para a direita, quebrando a harmonia visual do elemento.

**Item 20 – Corte Inadequado e Baixa Qualidade das Fotos**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** As fotografias nos cartões de cursos apresentam cortes desproporcionais (rostos próximos às bordas), prejudicando o acabamento profissional.

**Item 21 – Hierarquia de Títulos Confusa e Repetitiva**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** O título da seção verde e o título "Outros Cursos" possuem pesos visuais similares, dificultando a distinção de hierarquia.

**Item 22 – Ausência de Informações Institucionais e Legais no Rodapé**
* **Tipo:** Nova Funcionalidade
* **Classificação:** Usabilidade
* **Prioridade:** Alta
* **Descrição:** O rodapé carece de CNPJ, endereço e links de políticas de privacidade, comprometendo a credibilidade e suporte.

**Item 23 – Desalinhamento dos Ícones de Redes Sociais**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Baixa
* **Descrição:** Os ícones das redes sociais não estão alinhados verticalmente em relação ao logotipo na seção inferior.

**Item 24 – Falta de Margens e Espaçamento Interno (Padding)**
* **Tipo:** Melhoria
* **Classificação:** Desejabilidade
* **Prioridade:** Média
* **Descrição:** Elementos do rodapé estão colados às bordas da faixa escura. É necessário maior espaçamento interno para garantir o "respiro" do layout.

---

##  Análise de Risco

A aplicação apresenta riscos relevantes em:

* Validação de dados obrigatórios
* Conversão de leads
* Acessibilidade básica
* Consistência de navegação

A ausência de correção dos itens críticos pode gerar:
* Leads inválidos
* Perda de credibilidade
* Experiência inconsistente para o usuário

---

#  Conclusão Geral

Os ciclos de teste evidenciaram falhas funcionais críticas, inconsistências de usabilidade e desalinhamentos visuais que impactam diretamente conversão, experiência do usuário e credibilidade institucional.

Recomenda-se priorização imediata das falhas classificadas como críticas, seguida de ajustes estruturais de usabilidade e refinamento visual para melhoria da percepção de qualidade e confiabilidade da plataforma.

---

##  Estratégia Recomendada de Automação

Com base nos riscos identificados, recomenda-se automatizar:

* Validação de envio do formulário
* Persistência de mensagens de erro
* Habilitação correta do botão "AVANÇAR"
* Funcionamento do botão "Saiba Mais"
* Comportamento de navegação dos links internos

Esses cenários representam alto risco de regressão e impacto direto na conversão.
