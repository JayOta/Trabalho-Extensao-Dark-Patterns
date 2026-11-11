// Referências ABNT (NBR 6023:2018) das fontes usadas no site.
// Formato: before + **title** + after + "Disponível em: url. Acesso em: ..."
const ACCESS = 'Acesso em: 11 nov. 2026.'

export const references = [
  {
    before: 'BRASIL. ',
    title: 'Decreto nº 7.962, de 15 de março de 2013',
    after: '. Regulamenta a Lei nº 8.078, de 11 de setembro de 1990, para dispor sobre a contratação no comércio eletrônico. Brasília, DF: Presidência da República, 2013.',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm',
  },
  {
    before: 'BRASIL. ',
    title: 'Lei nº 8.078, de 11 de setembro de 1990',
    after: '. Dispõe sobre a proteção do consumidor e dá outras providências. Brasília, DF: Presidência da República, 1990.',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm',
  },
  {
    before: 'BRASIL. ',
    title: 'Lei nº 13.709, de 14 de agosto de 2018',
    after: '. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018.',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
  },
  {
    before: 'BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. ',
    title: 'VLibras',
    after: ': suíte de ferramentas para tradução automática do português para a Língua Brasileira de Sinais. Brasília, DF: Governo Digital, [20--].',
    url: 'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras',
  },
  {
    before: 'BRIGNULL, Harry. ',
    title: 'Deceptive Patterns',
    after: ': types of deceptive pattern. [S. l.], 2010-.',
    url: 'https://www.deceptive.design/types',
  },
  {
    before: 'IDEC – INSTITUTO DE DEFESA DE CONSUMIDORES. ',
    title: 'Deceptive patterns',
    after: ': você já ouviu falar de padrões enganosos? São Paulo, 2024.',
    url: 'https://idec.org.br/node/30796',
  },
  {
    before: 'ICPEN – INTERNATIONAL CONSUMER PROTECTION AND ENFORCEMENT NETWORK. ',
    title: 'ICPEN Sweep finds majority of websites and mobile apps use dark patterns in the marketing of subscription services',
    after: '. [S. l.], 2024.',
    url: 'https://icpen.org/news/1360',
  },
  {
    before: 'W3C – WORLD WIDE WEB CONSORTIUM. ',
    title: 'Web Content Accessibility Guidelines (WCAG) 2.1',
    after: '. [S. l.], 2018.',
    url: 'https://www.w3.org/TR/WCAG21/',
  },
].map((r) => ({ ...r, access: ACCESS }))
