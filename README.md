Teste de Qualidade - Projeto Rubeus


Relatório de Inspeção de Qualidade (QA) - Faculdade Exemplo
Escopo dos Testes
Os testes foram realizados nos seguintes ambientes:
Landing Page Principal: https://qualidade.apprbs.com.br/site
Página de Certificação: https://qualidade.apprbs.com.br/certificacao

Este repositório contém o levantamento detalhado de falhas de Funcionalidade (Utilidade), Interface (Desejabilidade) e Experiência do Usuário (Usabilidade) identificadas nos ambientes de teste da Faculdade Exemplo.
Resumo Executivo
Foram identificados 29 pontos de atenção, categorizados conforme abaixo:
Críticos (Prioridade Alta): Falhas de validação de formulário e navegação duplicada.
Médios (Prioridade Média): Inconsistências de UI, falta de contraste e áreas de clique desalinhadas.
Baixos (Prioridade Baixa): Ajustes estéticos, alinhamento de grid e padronização de fontes.

Detalhamento dos Problemas:
1. Funcionalidade e Validação (Bugs Críticos)
Falha de Validação Obrigatória: O formulário permite o envio (botão "Concluir") sem o preenchimento do campo de telefone.
Lógica de Erro Persistente: Mensagens de erro em vermelho não desaparecem após o usuário corrigir ou apagar o conteúdo dos campos Nome/Email.
Redirecionamento Incorreto: O link "Atendimento" abre o WhatsApp, duplicando a função do botão vizinho em vez de uma central de ajuda.

2. Navegação e UX (Usabilidade)
Comportamento Duplicado: Links como "Nossos Diferenciais", "Eventos" e "Depoimentos" abrem uma nova aba e fazem scroll na página atual simultaneamente.
Banners Inertes: O carrossel principal não é clicável e as setas de navegação possuem visibilidade quase nula (falta de contraste).
Ausência de Hover: Nenhum elemento interativo da página responde ao passar do mouse (hover), gerando incerteza sobre o que é clicável.

3. Interface e Identidade Visual (UI)
Inconsistência de Fontes e Case: Mistura de fontes em "Institucional" e "Biblioteca", além do uso despadronizado de UPPERCASE e Sentence case nos menus.
Erros de Alinhamento e Grid:
Datas do carrossel desalinhadas verticalmente (número sobre o mês).
Logotipo fora do centro vertical do menu.
Rodapé com colunas e copyright totalmente desalinhados.
Qualidade de Imagem: Banner principal com imagem borrada, distorcida (aspect ratio incorreto) e sem preenchimento automático de tela.
Hierarquia Visual: Seção de depoimentos sem destaque; Redes sociais com tamanho desproporcional fora do rodapé.

Conclusão:
A aplicação apresenta uma estrutura base funcional, porém carece de polimento técnico na camada de front-end (CSS/Layout) e revisões de lógica no back-end para validação de dados. A correção dos itens de Prioridade Alta é recomendada antes da publicação em ambiente de produção para evitar a poluição do banco de dados com leads incompletos.

Ciclo de Teste 01 - Página de Site
Ambiente de Teste (URL): https://qualidade.apprbs.com.br/site

Item 01 – Link de "Atendimento" direcionando para WhatsApp
Tipo: Correção
Classificação: Usabilidade (gera confusão no fluxo esperado pelo usuário)
Prioridade: Média (o usuário consegue ser atendido, mas não da forma indicada pelo rótulo)
Descrição: Ao clicar na opção "Atendimento", o sistema redireciona o usuário para o WhatsApp, o mesmo comportamento do botão vizinho. O esperado seria o direcionamento para uma página de suporte, central de ajuda ou formulário de contato.

Item 02 – Inconsistência visual e falta de ícone em "Institucional"
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: O item "Institucional" destoa dos demais elementos do cabeçalho por não possuir um ícone representativo, quebrando o padrão visual estabelecido em "Atendimento", "WhatsApp" e "Biblioteca".

Item 03 – Tipografia inadequada (Font-family inconsistente)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Os itens "Institucional" e "Biblioteca" utilizam uma caligrafia (fonte) que não harmoniza com o restante do sistema. Recomenda-se a padronização tipográfica para manter a identidade visual da aplicação

Item 04 – Espaçamento e distribuição irregular de ícones
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Os ícones de redes sociais e os links de menu apresentam um agrupamento irregular, com espaços em branco excessivos em algumas áreas e falta de alinhamento centralizado no container, prejudicando a estética da interface.

tem 05 – Área de clique (Hitbox) desalinhada ou excessiva
Tipo: Correção
Classificação: Usabilidade
Prioridade: Média
Descrição: A zona de interação (hitbox) dos ícones e textos do menu superior não está restrita aos limites visuais dos elementos. Existe um "vazamento" da área clicável para os espaços vazios ao redor, o que pode causar cliques acidentais e dificultar a navegação precisa do usuário. O esperado é que a área ativa corresponda exatamente ao tamanho do botão ou ícone.

Item 06 – Comportamento de navegação duplicado em "Nossos Diferenciais"
Tipo: Correção
Classificação: Usabilidade
Prioridade: Alta
Descrição: Ao clicar no link "Nossos Diferenciais", “Eventos” Depoimentos”, o sistema direciona a página atual para a seção correspondente e, simultaneamente, abre uma nova aba com o mesmo conteúdo. Isso gera poluição no navegador do usuário e uma quebra no fluxo de navegação esperado. O link deve apenas realizar o scroll na página atual ou abrir uma nova aba, nunca ambos.

Item 07 – Falta de destaque e contraste no botão "Falar com Consultor"
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Média
Descrição: O botão de Call to Action (CTA) principal apresenta um design "vazio" (ghost button) que não atrai a atenção necessária. Ele parece "perdido" no cabeçalho por não possuir uma cor de destaque que o diferencie dos links comuns de navegação, dificultando a conversão.

Item 08 – Inconsistência de "Case" (Maiúsculas e Minúsculas) nos menus
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Existe uma falta de padronização na identidade visual entre as seções da página. No menu superior, os itens utilizam "Sentence case" (ex: Atendimento, WhatsApp), enquanto no menu inferior (claro), os itens estão todos em "UPPERCASE" (ex: NOSSOS DIFERENCIAIS, EVENTOS).

Item 09 – Desalinhamento vertical do Logotipo
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: O logotipo "FACULDADE EXEMPLO" apresenta um leve desalinhamento em relação ao centro vertical dos itens de menu posicionados à direita. Este problema de alinhamento de grid prejudica a harmonia visual do cabeçalho.

Item 10 – Ausência generalizada de Feedback Visual (Hover)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Média
Descrição: Nenhum elemento interativo da página (botões, ícones de redes sociais ou links de menu) apresenta mudança de estado, como alteração de cor, brilho ou preenchimento, ao sofrer a interação do cursor (hover). Essa falta de resposta visual prejudica a navegabilidade, pois o usuário não recebe confirmação imediata de que o item é clicável antes de efetuar a ação.

Item 11 – Baixa qualidade (nitidez) em imagem de banner
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: A imagem principal do banner ("Graduação"), que apresenta a figura de uma mulher, exibe baixa resolução e parece borrada. Isso prejudica o apelo visual da página inicial, dando uma impressão de falta de cuidado com a qualidade gráfica. O ideal seria utilizar uma imagem de alta definição para esta posição de destaque.

Item 12 – Carrossel de banner sem navegação automática
Tipo: Melhoria
Classificação: Usabilidade
Prioridade: Alta
Descrição: O banner principal não transiciona as cenas (slides) automaticamente. Como os banners de destaque costumam conter as informações mais importantes, não mover automaticamente obriga o usuário a descobrir e usar a navegação manual. Em testes com usuários, isso frequentemente resulta em baixa visualização dos banners secundários. O esperado é que os slides avancem após um intervalo fixo (ex: 5-7 segundos).

Item 13 – Setas de navegação do carrossel com visibilidade muito baixa
Tipo: Correção
Classificação: Usabilidade
Prioridade: Alta
Descrição: As setas laterais para a navegação manual do carrossel são quase invisíveis. Elas são pequenas e não possuem um fundo com contraste suficiente em relação à imagem do banner, dificultando sua identificação por qualquer usuário, especialmente aqueles com baixa visão. Isso agrava o problema da falta de navegação automática. Recomenda-se aumentar o tamanho e, crucialmente, o contraste das setas para garantir sua visibilidade.

Item 14 – Falta de indicação visual de "Página Ativa"
Tipo: Melhoria
Classificação: Usabilidade
Prioridade: Baixa
Descrição: No menu superior ou inferior, não há uma indicação visual (como um sublinhado ou cor diferente) que mostre em qual página o usuário está no momento. Isso pode deixar o usuário desorientado em navegações mais longas.

Item 15 – Ícones de Redes Sociais sem Identificação (Alt Text)
Tipo: Melhoria
Classificação: Desejabilidade / Acessibilidade
Prioridade: Média
Descrição: Os ícones de redes sociais (LinkedIn, Facebook, etc.) dependem puramente da interpretação visual do usuário. Para acessibilidade (leitores de tela), cada ícone deve ter uma descrição clara. Além disso, esteticamente, eles parecem "flutuar" sem um rótulo que os conecte ao contexto de "Siga-nos" ou "Redes Sociais".

Item 16 – Proporção e Distorção de Elementos (Biblioteca)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: O ícone e o texto de "BIBLIOTECA" parecem ter um peso visual muito maior do que os outros itens do menu escuro, possivelmente devido à fonte ou ao preenchimento do ícone de livro. Isso quebra o equilíbrio visual da barra de navegação.

Item 17 – Banners do Carrossel não são clicáveis
Tipo: Melhoria
Classificação: Usabilidade
Prioridade: Média
Descrição: Os banners principais funcionam apenas como elementos visuais estáticos. Ao clicar na imagem do banner, nenhuma ação é executada. O esperado seria que o banner inteiro (ou um botão interno de "Saiba Mais") funcionasse como um link para a página de destino do conteúdo anunciado.

Item 18 – Desalinhamento vertical de texto (Datas do carrossel)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Os elementos de data no carrossel apresentam falha de alinhamento vertical. O número (ex: "05") está excessivamente deslocado para cima em relação ao mês (ex: "fevereiro"), quebrando a harmonia visual e dificultando a leitura rápida do conjunto da data.

Item 19 – Distorção de imagem no banner
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Média
Descrição: Além da baixa resolução já mencionada, a imagem da mulher no banner principal apresenta sinais de distorção (aspect ratio incorreto). A imagem parece "esticada" ou "achatada", o que compromete o profissionalismo da interface visual.

Item 20 – Posicionamento inadequado das setas de navegação
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: As setas de navegação lateral do carrossel estão posicionadas muito distantes do conteúdo central ou das bordas lógicas do banner. Esse distanciamento excessivo dificulta a percepção do usuário de que as setas pertencem ao controle daquele elemento específico.

Item 21 – Desalinhamento de conteúdo na seção Newsletter
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: O título "NÃO FIQUE DE FORA!" e o texto de apoio (Lorem Ipsum) não estão alinhados corretamente em relação ao formulário ao lado. A falta de um eixo central ou uma distribuição simétrica entre o texto e os campos de entrada prejudica a estética visual da seção.

Item 22 – Falta de espaçamento (Respiro) entre elementos do formulário
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Média
Descrição: O botão "CONCLUIR" está visualmente "colado" ao campo de telefone, sem a margem necessária para separá-los. Essa ausência de espaçamento (padding/margin) torna a interface densa e dificulta a distinção clara entre os campos de preenchimento e a ação final de envio.

Item 23 – Baixo contraste no texto do botão "CONCLUIR"
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Alta
Descrição: O texto "CONCLUIR" apresenta baixa legibilidade devido ao pouco contraste entre a cor da fonte e o fundo do botão. Isso fere princípios de acessibilidade, tornando o botão de ação principal difícil de ler para o usuário.

Item 24 – Erro na lógica de persistência de validação (Campos Nome e Email)
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: Ao interagir com os campos "Nome" e "Email", inserir informações e depois apagá-las, o sistema exibe e mantém a mensagem de erro em vermelho ("preencha esses campos") de forma persistente. O esperado seria que a mensagem de erro fosse limpa ou reavaliada conforme a interação do usuário, sem "travar" o estado de erro visual na tela.

Item 25 – Falha na validação de campos obrigatórios (Botão Concluir)
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: O formulário permite o envio dos dados através do botão "CONCLUIR" mesmo sem o preenchimento do campo de número de telefone. O esperado seria que o sistema bloqueasse a ação de concluir e exibisse uma mensagem de erro obrigatória até que todos os campos necessários fossem preenchidos corretamente.

Item 26 – Arquitetura de informação inadequada (Redes Sociais)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Média
Descrição: Os ícones de redes sociais apresentam um tamanho desproporcional e ocupam um espaço nobre no corpo da página que não condiz com sua importância hierárquica. O padrão esperado de mercado é que esses elementos fiquem localizados de forma discreta no rodapé (footer), permitindo que o conteúdo principal da página tenha maior destaque.

Item 27 – Falta de hierarquia visual na seção de Depoimentos
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Média
Descrição: A seção "O QUE NOSSOS ALUNOS DIZEM?" carece de destaque visual. O título e os cards de depoimento fundem-se ao fundo branco da página, sem sombras, bordas ou cores de fundo que os delimitem, dificultando a leitura e a percepção de que se trata de uma seção distinta.

Item 28 – Desalinhamento generalizado no Rodapé (Footer)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: As colunas de informações no rodapé ("Endereço", "Contatos" e "UNIEXEMPLO Social") apresentam desalinhamento vertical e horizontal entre si. Além disso, o texto de copyright na base não está centralizado em relação aos blocos superiores, resultando em uma interface visualmente desorganizada.
Perfeito! Você identificou um erro de consistência visual e identidade de marca. No rodapé, onde o texto diz "UNIEXEMPLO Social", o usuário espera ver os ícones (logos) das redes sociais para facilitar o reconhecimento rápido, e não apenas links de texto ou um espaço vazio.
Vamos adicionar este item à nossa lista:

Item 29 – Ausência de ícones representativos em "Social"
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Na seção do rodapé intitulada "UNIEXEMPLO Social", os links para as redes sociais são apresentados apenas como texto (ou estão ausentes visualmente). O padrão de usabilidade e design dita que sejam utilizados os ícones oficiais (LinkedIn, Facebook, Instagram) para facilitar a identificação visual imediata pelo usuário.

Item 30 – Problemas de Design no Balão de Matrícula
Gravidade: Baixa
Descrição: O texto "MATRÍCULAS ABERTAS" está descentralizado verticalmente dentro do balão amarelo (muito próximo da borda inferior) e o balão em si está desalinhado em relação ao topo do formulário. Além disso, há baixo contraste entre o fundo amarelo e a fonte branca.

Ciclo de Teste 02 - Página de Site
Ambiente de Teste (URL): https://qualidade.apprbs.com.br/certificacao
