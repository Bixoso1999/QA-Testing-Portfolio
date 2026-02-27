#  Relatório de Inspeção de Qualidade (QA) - Projeto Rubeus

Este repositório contém o levantamento detalhado de falhas de **Funcionalidade**, **Interface** e **Experiência do Usuário (UX)** 

##  Ambientes Testados
* **Landing Page:** [https://qualidade.apprbs.com.br/site](https://qualidade.apprbs.com.br/site) 
* **Certificação:** [https://qualidade.apprbs.com.br/certificacao](https://qualidade.apprbs.com.br/certificacao) 

---

## 📊 Resumo Executivo
[cite_start]Foram identificados **29 pontos de atenção**[cite: 9]:

| Severidade | Descrição |
| :--- | :--- |
| 🔴 **Crítica** | [cite_start]Falhas de validação e navegação duplicada[cite: 10]. |
| 🟡 **Média** | [cite_start]Inconsistências de UI e áreas de clique desalinhadas[cite: 11]. |
| 🟢 **Baixa** | [cite_start]Ajustes estéticos e padronização de fontes[cite: 12]. |

---

## 🛠️ Detalhamento dos Problemas (Ciclo 01)

### 1️⃣ Cabeçalho e Menu Superior
<details>
  <summary><b>Clique para ver os itens 01 a 05</b></summary>

* [cite_start]**Item 01 [🟡 Média]:** Link de "Atendimento" direciona para WhatsApp, duplicando a função do botão vizinho[cite: 36, 39, 40].
* [cite_start]**Item 02 [🟢 Baixa]:** Item "Institucional" sem ícone, quebrando o padrão visual[cite: 42, 45, 46].
* [cite_start]**Item 03 [🟢 Baixa]:** Fontes inconsistentes nos itens "Institucional" e "Biblioteca"[cite: 47, 50, 51].
* [cite_start]**Item 05 [🟡 Média]:** Área de clique (Hitbox) desalinhada, causando cliques acidentais em espaços vazios[cite: 58, 61, 63].

> 📸 **Evidência Visual:**
> <img src="NOME_DA_SUA_FOTO_01.png" width="800">
</details>

---

### 2️⃣ Navegação e Banners
<details>
  <summary><b>Clique para ver os itens 06 a 15</b></summary>

* [cite_start]**Item 06 [🔴 Alta]:** Links abrem nova aba e fazem scroll na página atual simultaneamente[cite: 65, 68, 69].
* [cite_start]**Item 11 [🟢 Baixa]:** Imagem do banner principal com baixa resolução e aspecto borrado[cite: 94, 97, 98].
* [cite_start]**Item 12 [🔴 Alta]:** Carrossel não possui navegação automática[cite: 101, 104, 105].
* [cite_start]**Item 13 [🔴 Alta]:** Setas de navegação quase invisíveis por falta de contraste[cite: 109, 112, 113].
* [cite_start]**Item 15 [🟡 Média]:** Ícones de redes sociais sem descrição (Alt Text) para acessibilidade[cite: 122, 125, 127].

> 📸 **Evidência Visual:**
> <img src="NOME_DA_SUA_FOTO_02.png" width="800">
</details>

---

### 3️⃣ Formulário e Rodapé
<details>
  <summary><b>Clique para ver os itens 23 a 30</b></summary>

* [cite_start]**Item 23 [🔴 Alta]:** Baixo contraste no texto "CONCLUIR" sobre fundo amarelo[cite: 172, 175, 176].
* [cite_start]**Item 25 [🔴 Alta]:** Formulário permite envio sem o campo obrigatório de telefone[cite: 184, 187, 188].
* [cite_start]**Item 28 [🟢 Baixa]:** Colunas do rodapé totalmente desalinhadas entre si[cite: 202, 205, 206].
* [cite_start]**Item 30 [🟢 Baixa]:** Texto "MATRÍCULAS ABERTAS" descentralizado dentro do balão[cite: 217, 219].

> 📸 **Evidência Visual:**
> <img src="NOME_DA_SUA_FOTO_03.png" width="800">
</details>

---

## 🚀 Conclusão
[cite_start]A aplicação carece de polimento técnico em front-end e revisões de lógica para validação de dados[cite: 31, 32]. [cite_start]Recomenda-se a correção imediata dos itens de **Prioridade Alta**[cite: 33].
