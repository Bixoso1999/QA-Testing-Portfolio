// @ts-check
import { test, expect } from '@playwright/test';

test('Validar ausência de Feedback Visual (Ciclo 01 - Item 10)', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');

  const botoes = [
    page.getByRole('link', { name: 'NOSSOS DIFERENCIAIS' }),
    page.getByRole('link', { name: 'EVENTOS' }),
    page.getByRole('link', { name: 'DEPOIMENTOS' }),
    page.getByRole('link', { name: 'FALAR COM CONSULTOR' })
  ];

  for (const botao of botoes) {
    // 1. Pega cor inicial
    const corInicial = await botao.evaluate(el => window.getComputedStyle(el).backgroundColor);

    // 2. Faz o hover e espera apenas o necessário
    await botao.hover();
    
    // 3. Pega cor após hover
    const corHover = await botao.evaluate(el => window.getComputedStyle(el).backgroundColor);

    console.log(`Botão: ${await botao.innerText()} | Cor Inicial: ${corInicial} | Cor Hover: ${corHover}`);

    // Validação: O teste PASSA se as cores forem IGUAIS (provando o bug do Item 10)
    expect(corHover, 'Erro: O botão mudou de cor (o bug não aconteceu)').toBe(corInicial);
  }
});