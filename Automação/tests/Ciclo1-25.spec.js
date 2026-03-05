// @ts-check
import { test, expect } from '@playwright/test';

test('Captura de Evidência Visual - Bug Base Legal (Item 25)', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');

  // 1. Preenchimento conforme suas imagens anteriores
  await page.locator('input[name="pessoa.nome"]').fill('dsadas');
  await page.getByPlaceholder('email@exemplo.com').fill('gabriel.alesdaxandria96@gmail.com');

  // 2. Clique forçado para disparar o erro
  const botaoConcluir = page.locator('#rbBtnNext');
  await botaoConcluir.click({ force: true });

  // 3. Pequena espera para o toast animar na tela
  await page.waitForTimeout(1000);

  // 4. Tira o Print da tela inteira para o seu relatório
  await page.screenshot({ path: 'evidencia-bug-item25.png', fullPage: true });
  
  // 5. Tira o Print apenas da área onde o erro costuma aparecer (opcional)
  const toastArea = page.locator('#toast-container');
  if (await toastArea.isVisible()) {
      await toastArea.screenshot({ path: 'zoom-erro-toast.png' });
      console.log("Screenshot do erro capturada com sucesso!");
  }

  // Finalizamos o teste confirmando que a URL não mudou (o que prova o bloqueio)
  await expect(page).toHaveURL(/.*site/);
});