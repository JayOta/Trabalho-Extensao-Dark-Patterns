// Seção 6: dicas, direitos, onde reclamar e "Quer ir mais fundo?".
// Em "parts", o item com strong: true aparece em negrito.
export const tips = [
  [{ t: 'Leia o ' }, { t: 'preço final', strong: true }, { t: ', com taxas, antes de pagar.' }],
  [{ t: 'Veja ' }, { t: 'quando começa', strong: true }, { t: ' a cobrança.' }],
  [{ t: 'Descubra ' }, { t: 'como cancelar', strong: true }, { t: ' antes de assinar.' }],
  [{ t: 'Desmarque o que ' }, { t: 'você não pediu', strong: true }, { t: '.' }],
  [{ t: 'Na dúvida, ' }, { t: 'feche e pense', strong: true }, { t: ' com calma.' }],
]

export const rights = [
  {
    parts: [{ t: 'A loja precisa informar o preço e as condições ' }, { t: 'com clareza', strong: true }, { t: '.' }],
    law: 'Código de Defesa do Consumidor, art. 6º',
  },
  {
    parts: [{ t: 'Comprou pela internet? Você pode ' }, { t: 'desistir em até 7 dias', strong: true }, { t: '.' }],
    law: 'CDC, art. 49',
  },
  {
    parts: [{ t: 'Seus dados só podem ser usados com ' }, { t: 'seu consentimento livre e informado', strong: true }, { t: '.' }],
    law: 'LGPD, art. 5º e 8º',
  },
]

export const complain = [
  {
    name: 'consumidor.gov.br',
    url: 'https://www.consumidor.gov.br/',
    text: 'site oficial do governo para reclamar de empresas.',
  },
  {
    name: 'Procon-PR',
    url: 'https://www.procon.pr.gov.br/',
    text: 'procon.pr.gov.br, ou o Procon da sua cidade.',
  },
]

export const deeper = [
  {
    name: 'Idec: "Deceptive patterns: você já ouviu falar de padrões enganosos?"',
    url: 'https://idec.org.br/node/30796',
    text: 'explicação em português, com exemplos.',
    english: false,
  },
  {
    name: 'Deceptive Patterns (Harry Brignull)',
    url: 'https://www.deceptive.design/types',
    text: 'o site de quem criou o termo, com dezenas de exemplos.',
    english: true,
  },
  {
    name: 'Código de Defesa do Consumidor',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm',
    text: 'a lei completa, no site do Planalto.',
    english: false,
  },
  {
    name: 'Pesquisa ICPEN 2024',
    url: 'https://icpen.org/news/1360',
    text: 'o estudo internacional dos 642 sites.',
    english: true,
  },
]
