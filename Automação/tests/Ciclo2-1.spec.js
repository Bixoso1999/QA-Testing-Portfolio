// @ts-check
import { test, expect } from '@playwright/test';

test('Deve verificar se o botão Saiba Mais está operante (Item 01 - Ciclo 02)', async ({ page }) => {
  
  await page.goto('https://qualidade.apprbs.com.br/certificacao');

  // 1. Localiza o botão
  const botaoSaibaMais = page.locator('#iwgqid a').filter({ hasText: 'Saiba mais' });

  // 2. Verifica se ele está visível
  await expect(botaoSaibaMais).toBeVisible();

  // 3. Captura a URL atual ANTES do clique
  const urlAntes = page.url();

  // 4. Realiza o clique
  await botaoSaibaMais.click();

  // 5. Espera um pouco para garantir que o navegador teria tempo de reagir
  await page.waitForTimeout(2000); 

  // 6. Se a URL continuar a mesma, o bug está confirmado
  await expect(page).toHaveURL(urlAntes); 
  
  console.log("Bug confirmado: O botão foi clicado mas a página não navegou.");  
});