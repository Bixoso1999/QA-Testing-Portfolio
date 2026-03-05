// @ts-check
import { test, expect } from '@playwright/test';

test('Deve confirmar bug de navegação duplicada (Item 06 - Ciclo 01)', async ({ context, page }) => {
  
  await page.goto('https://qualidade.apprbs.com.br/site');

  // 1. Localiza o link usando o seletor 
  const linkDiferenciais = page.getByRole('link', { name: 'NOSSOS DIFERENCIAIS' });

  // 2. Prepara para capturar a abertura de uma nova aba
  // O bug é justamente esse clique abrir uma aba extra (target="_blank")
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // O teste fica "escutando" para ver se nasce uma nova página
    linkDiferenciais.click(),      // Realiza o clique no botão
  ]);

  // 3. VALIDAÇÃO DO BUG: 
  // Se a 'newPage' existir, o teste confirma que o link está configurado errado.
  await expect(newPage).toBeDefined();
  
  // Opcional: Verifica se a nova aba abriu na mesma URL ou em uma âncora
  console.log("Bug confirmado: O link '" + await linkDiferenciais.innerText() + "' abriu uma nova aba.");
  
  // Fecha a aba extra para não poluir o teste
  await newPage.close();
});