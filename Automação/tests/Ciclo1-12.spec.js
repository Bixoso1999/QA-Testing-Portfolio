// @ts-check
import { test, expect } from '@playwright/test';

test('Deve confirmar banner estático e sem link (Item 12 - Ciclo 01)', async ({ page }) => {
  
  await page.goto('https://qualidade.apprbs.com.br/site');

  // Localiza o banner pelo seletor que você identificou
  const banner = page.locator('#iwhtfk');
  
  // 1. Validar se o banner é estático (Falta de Autoplay)
  const screenshotAntes = await banner.screenshot();
  await page.waitForTimeout(7000); // Espera 7 segundos para transição esperada
  const screenshotDepois = await banner.screenshot();

  if (screenshotAntes.equals(screenshotDepois)) {
    console.log("Bug confirmado: O banner não transiciona automaticamente.");
  }

  // 2. Validar se o banner é clicável (Falta de Link/Ação)
  // Tenta encontrar qualquer tag de link (a) dentro ou em volta do banner
  const linkNoBanner = banner.locator('a');
  const contagemLinks = await linkNoBanner.count();

  if (contagemLinks === 0) {
    console.log("Bug confirmado: O banner não possui link de redirecionamento.");
  }

  // 3. Teste de clique e navegação
  const urlAntes = page.url();
  await banner.click({ force: true }).catch(() => {});
  await page.waitForTimeout(2000);

  if (page.url() === urlAntes) {
    console.log("Bug confirmado: O clique no banner não gera navegação.");
  }

  // O teste abaixo gera a falha oficial no relatório se o bug persistir
  await expect(contagemLinks, 'O banner deveria ter ao menos um link funcional').toBeGreaterThan(0);
});