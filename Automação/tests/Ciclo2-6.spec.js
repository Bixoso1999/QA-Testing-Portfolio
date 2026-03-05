// @ts-check
import { test, expect } from '@playwright/test';

test('Ciclo 02 - Item 6: Validar Falha de Obrigatoriedade (Sem Print)', async ({ page }) => {
  
  await page.goto('https://qualidade.apprbs.com.br/certificacao');

  // Seletores mapeados por você
  const campoNome = page.locator('input[name="pessoa.nome"]');
  const campoEmail = page.getByPlaceholder('email@exemplo.com');
  const campoTelefone = page.getByPlaceholder('(11) 96123-');
  const botaoAvancar = page.locator('#rbActionsFormContainer button, #rbActionsFormContainer a').first();

  // 1. Simula o erro do usuário: preenche apenas o e-mail
  await campoEmail.fill('gabriel.teste@gmail.com');
  await page.keyboard.press('Tab'); 

  // 2. Lógica de validação:
  const nomeVazio = await campoNome.inputValue();
  const telVazio = await campoTelefone.inputValue();
  
  console.log(`LOG: Validando campos. Nome vazio: ${nomeVazio === ''} | Tel vazio: ${telVazio === ''}`);

  // 3. O teste dará "V" verde se o botão estiver habilitado incorretamente.
  // Isso confirma que a regra de obrigatoriedade do site está falha.
  await expect(botaoAvancar, 'BUG: O botão avançar permitiu interação sem Nome e Telefone').toBeEnabled();
  
  console.log("Teste finalizado com sucesso (Bug confirmado via log).");
});