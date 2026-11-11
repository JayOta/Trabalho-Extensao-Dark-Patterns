// Teste rápido (seção 5). "answer" é o índice da opção certa.
// "screen" descreve a tela falsa: título + linhas (kind: text | check | timer | primary | link).
export const questions = [
  {
    screen: {
      title: 'Loja Exemplo · Carrinho',
      lines: [
        { kind: 'text', text: 'Fone de ouvido', value: 'R$ 89,90' },
        { kind: 'check', text: 'Garantia extra', value: 'R$ 19,90' },
        { kind: 'total', text: 'Total', value: 'R$ 109,80' },
      ],
    },
    options: ['Falsa urgência', 'Item pré-marcado', 'Difícil de cancelar'],
    answer: 1,
    explanation: 'A garantia veio marcada sem você pedir. Se não perceber, paga R$ 19,90 a mais.',
  },
  {
    screen: {
      title: 'Ganhe 10% de desconto!',
      lines: [
        { kind: 'primary', text: 'Quero meu desconto' },
        { kind: 'link', text: 'Não, prefiro pagar mais caro' },
      ],
    },
    options: ['Cobrança escondida', 'Culpa na recusa', 'Item pré-marcado'],
    answer: 1,
    explanation: 'O "não" foi escrito para você se sentir bobo por recusar. Pode clicar nele sem culpa.',
  },
  {
    screen: {
      title: 'Usamos cookies',
      lines: [
        { kind: 'text', text: 'Para melhorar sua experiência.' },
        { kind: 'primary', text: 'Aceitar tudo' },
        { kind: 'link', text: 'Configurar (4 telas)' },
      ],
    },
    options: ['Privacidade empurrada', 'Falsa urgência', 'Teste grátis que vira cobrança'],
    answer: 0,
    explanation: 'Aceitar é fácil e recusar dá trabalho. Isso empurra você a entregar seus dados.',
  },
  {
    screen: {
      title: 'Hotel Exemplo',
      lines: [
        { kind: 'alert', text: 'Só resta 1 quarto!' },
        { kind: 'text', text: '15 pessoas vendo agora' },
        { kind: 'timer', text: 'Preço garantido por 09:59' },
      ],
    },
    options: ['Opção menos visível', 'Item pré-marcado', 'Falsa urgência'],
    answer: 2,
    explanation: 'Relógio e contador servem para apressar você. Muitas vezes, eles nem são verdadeiros.',
  },
  {
    screen: {
      title: 'App de academia',
      lines: [
        { kind: 'primary', text: 'Assinar em 1 clique' },
        { kind: 'text', text: 'Para cancelar: ligue para nossa central, de segunda a sexta, das 9h às 12h.' },
      ],
    },
    options: ['Culpa na recusa', 'Difícil de cancelar', 'Cobrança escondida'],
    answer: 1,
    explanation: 'Entrar é rápido, mas sair é difícil de propósito. Veja como cancelar antes de assinar.',
  },
]

export function resultMessage(score, total) {
  if (score === total) return 'Você está atento! Compartilhe o teste com alguém.'
  if (score >= 3) return 'Muito bem! Revise os truques que errou.'
  return 'Esses truques enganam muita gente. Que tal ver os cards de novo?'
}
