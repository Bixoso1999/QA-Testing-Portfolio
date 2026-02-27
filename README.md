# Teste de Qualidade - Projeto Rubeus

## Relatório de Inspeção de Qualidade (QA) 

### Escopo dos Testes
Os testes foram realizados nos seguintes ambientes:
* **Landing Page Principal:** https://qualidade.apprbs.com.br/site
* **Página de Certificação:** https://qualidade.apprbs.com.br/certificacao

Este repositório contém o levantamento detalhado de falhas de **Funcionalidade (Utilidade)**, **Interface (Desejabilidade)** e **Experiência do Usuário (Usabilidade)** identificadas nos ambientes de teste.

---

### Resumo Executivo
Foram identificados **29 pontos de atenção**, categorizados conforme abaixo:
* **Críticos (Prioridade Alta):** Falhas de validação de formulário e navegação duplicada.
* **Médios (Prioridade Média):** Inconsistências de UI, falta de contraste e áreas de clique desalinhadas.
* **Baixos (Prioridade Baixa):** Ajustes estéticos, alinhamento de grid e padronização de fontes.

---

### 🛠️ Detalhamento dos Problemas

#### 1. Funcionalidade e Validação (Bugs Críticos)
* **Falha de Validação Obrigatória:** O formulário permite o envio (botão "Concluir") sem o preenchimento do campo de telefone.
* **Lógica de Erro Persistente:** Mensagens de erro em vermelho não desaparecem após o usuário corrigir ou apagar o conteúdo dos campos Nome/Email.
* **Redirecionamento Incorreto:** O link "Atendimento" abre o WhatsApp, duplicando a função do botão vizinho em vez de uma central de ajuda.

#### 2. Navegação e UX (Usabilidade)
* **Comportamento Duplicado:** Links como "Nossos Diferenciais", "Eventos" e "Depoimentos" abrem uma nova aba e fazem scroll na página atual simultaneamente.
* **Banners Inertes:** O carrossel principal não é clicável e as setas de navegação possuem visibilidade quase nula (falta de contraste).
* **Ausência de Hover:** Nenhum elemento interativo da página responde ao passar do mouse (hover), gerando incerteza sobre o que é clicável.

#### 3. Interface e Identidade Visual (UI)
* **Inconsistência de Fontes e Case:** Mistura de fontes em "Institucional" e "Biblioteca", além do uso despadronizado de UPPERCASE e Sentence case nos menus.
* **Erros de Alinhamento e Grid:**
    * Datas do carrossel desalinhadas verticalmente (número sobre o mês).
    * Logotipo fora do centro vertical do menu.
    * Rodapé com colunas e copyright totalmente desalinhados.
* **Qualidade de Imagem:** Banner principal com imagem borrada, distorcida (aspect ratio incorreto) e sem preenchimento automático de tela.
* **Hierarquia Visual:** Seção de depoimentos sem destaque; Redes sociais com tamanho desproporcional fora do rodapé.

---

### 📸 Evidências

<details>
  <summary>📂 <b>Clique aqui para visualizar as capturas de tela (Evidências)</b></summary>
  <br>

  ### Evidência 01 - Cabeçalho e Menu
  ![Evidência 01](ciclo1-1.png)

  ---

  ### Evidência 02 - Banner Principal
  ![Evidência 02](ciclo1-2.png)

  ---

  ### Evidência 03 - Seção de Conteúdo
  ![Evidência 03](ciclo1-3.png)

  ---

  ### Evidência 04 - Formulário de Lead
  ![Evidência 04](ciclo1-4.png)

  ---

  ### Evidência 05 - Rodapé e Redes Sociais
  ![Evidência 05](ciclo1-5.png)

</details>

---

### 🚀 Conclusão
A aplicação apresenta uma estrutura base funcional, porém carece de polimento técnico na camada de front-end (CSS/Layout) e revisões de lógica no back-end para validação de dados. A correção dos itens de **Prioridade Alta** é recomendada antes da publicação em ambiente de produção para evitar a poluição do banco de dados com leads incompletos.

---

### Ciclo de Teste 01 - Página de Site
**Ambiente de Teste (URL):** https://qualidade.apprbs.com.br/site
