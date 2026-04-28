import type { Article } from '../types/content';

export const civilArticles: Article[] = [
  {
    slug: 'acoes-indenizatorias',
    area: 'civil',
    title: 'Ações Indenizatórias: Entenda o Direito à Reparação de Danos',
    description:
      'No direito brasileiro, a indenização não é um lucro, mas uma forma de restabelecer o equilíbrio rompido por um ato ilícito. Entenda os três pilares da responsabilidade civil.',
    sections: [
      {
        heading: 'Os Três Pilares da Responsabilidade Civil',
        blocks: [
          {
            type: 'text',
            content:
              'Para que uma ação indenizatória seja julgada procedente, é indispensável a comprovação de três elementos fundamentais (Art. 186 do Código Civil):',
          },
          {
            type: 'ordered-list',
            items: [
              'A Conduta: um ato ou uma omissão contrária à lei ou ao contrato.',
              'O Dano: a demonstração efetiva do prejuízo sofrido. Não se indeniza o "dano hipotético"; é preciso provar que houve uma perda real.',
              'O Nexo Causal: a relação direta de causa e efeito entre a conduta e o dano — provar que o prejuízo só ocorreu por causa daquele ato específico.',
            ],
          },
        ],
      },
      {
        heading: 'Espécies de Danos Indenizáveis',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Danos Emergentes', description: 'O que a pessoa efetivamente perdeu no momento (ex: custo do conserto de um carro).' },
              { title: 'Lucros Cessantes', description: 'O que a pessoa deixou de ganhar em razão do evento (ex: dias que um motorista de aplicativo ficou sem trabalhar).' },
              { title: 'Danos Morais', description: 'Lesão aos direitos da personalidade — honra, dignidade, imagem e bem-estar psicológico. Não é um "mero aborrecimento".' },
              { title: 'Danos Estéticos', description: 'Alteração física permanente na aparência da vítima — cicatrizes, deformidades ou perda de membros.' },
            ],
          },
          {
            type: 'text',
            content: 'Todas essas modalidades podem ser cumuladas (pedidas juntas) no mesmo processo.',
          },
        ],
      },
      {
        heading: 'Responsabilidade Objetiva vs. Subjetiva',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Subjetiva (Regra Geral)', 'Objetiva (Exceção)'],
            rows: [
              { label: 'Requisito', values: ['Prova de culpa (negligência, imprudência ou imperícia) ou dolo', 'Apenas dano e nexo causal — independe de culpa'] },
              { label: 'Aplicação', values: ['Regra geral nas relações civis', 'Relações de consumo, atos do Estado, atividades de risco'] },
            ],
          },
        ],
      },
      {
        heading: 'Riscos de Ignorar uma Ação Indenizatória',
        blocks: [
          {
            type: 'list',
            items: [
              'Revelia: se o réu não apresentar defesa no prazo legal (geralmente 15 dias úteis), os fatos do autor podem ser considerados verdadeiros.',
              'Atualização do Valor: a indenização é corrigida desde a data do evento danoso — o montante final pode ser muito maior.',
              'Penhora de Bens: após a sentença, sem pagamento voluntário, o juiz pode bloquear contas e penhorar patrimônio.',
            ],
          },
        ],
      },
      {
        heading: 'O Papel do Advogado',
        blocks: [
          {
            type: 'ordered-list',
            items: [
              'Quantificação do Dano: garantir que o valor pedido seja condizente com a extensão real do prejuízo.',
              'Produção de Provas: organizar perícias, testemunhas e documentos que comprovem ou afastem o nexo causal.',
              'Análise de Excludentes: verificar culpa exclusiva da vítima, caso fortuito ou força maior — motivos que podem anular o dever de indenizar.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'disputas-contratuais',
    area: 'civil',
    title: 'Disputas Contratuais: Como Prevenir e Resolver Conflitos no Ambiente de Negócios',
    description:
      'Os contratos são a base de qualquer relação comercial. Mas quando surgem divergências, o impacto pode ser financeiro, operacional e reputacional. Entenda como agir.',
    sections: [
      {
        heading: 'Causas Comuns de Litígios Contratuais',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Inadimplemento (Art. 475, CC)', description: 'Quando uma das partes deixa de cumprir sua obrigação principal — pagamento, entrega de produto ou prestação de serviço.' },
              { title: 'Cláusulas Ambíguas', description: 'Termos genéricos ou mal definidos que geram entendimentos divergentes sobre responsabilidades e penalidades.' },
              { title: 'Teoria da Imprevisão (Art. 478, CC)', description: 'Eventos extraordinários e imprevisíveis que tornam a obrigação excessivamente onerosa para uma das partes.' },
              { title: 'Quebra de Boa-fé Objetiva (Art. 422, CC)', description: 'Violação dos deveres de lealdade, cooperação e transparência que devem reger o contrato em todas as suas fases.' },
            ],
          },
        ],
      },
      {
        heading: 'Os Riscos de uma Gestão Contratual Deficiente',
        blocks: [
          {
            type: 'list',
            items: [
              'Multas e Encargos Elevados: aplicação acumulada de multas compensatórias e moratórias, além de juros e correção monetária.',
              'Rescisão Indevida: romper um contrato sem base legal correta pode transformar quem tinha razão em réu de uma ação indenizatória.',
              'Paralisação de Atividades: em contratos de fornecimento ou serviços essenciais, a disputa pode travar a operação da empresa.',
              'Danos à Imagem: conflitos judiciais públicos podem afastar investidores, parceiros e clientes.',
            ],
          },
        ],
      },
      {
        heading: 'Formas de Resolução de Conflitos',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Características', 'Vantagens'],
            rows: [
              { label: 'Judicial', values: ['Resolvido por um juiz estatal', 'Segurança jurídica e execução coercitiva'] },
              { label: 'Arbitragem', values: ['Decidido por especialistas privados', 'Sigilo, agilidade e alta especialização técnica'] },
              { label: 'Mediação', values: ['Facilitada por um terceiro neutro', 'Preservação da relação comercial e baixo custo'] },
              { label: 'Negociação Direta', values: ['Acordo direto entre as partes', 'Rapidez e controle total sobre o resultado'] },
            ],
          },
        ],
      },
      {
        heading: 'A Importância da Assessoria Jurídica Especializada',
        blocks: [
          {
            type: 'text',
            content: 'Preventiva (Compliance Contratual) — o foco é evitar o litígio antes que ele nasça:',
          },
          {
            type: 'list',
            items: [
              'Redação de cláusulas de limitação de responsabilidade e matriz de riscos.',
              'Definição clara de critérios de rescisão e penalidades.',
              'Inclusão de cláusulas de eleição de foro ou compromisso arbitral.',
            ],
          },
          {
            type: 'text',
            content: 'Reativa (Contencioso Estratégico) — quando o conflito já existe:',
          },
          {
            type: 'list',
            items: [
              'Notificação Extrajudicial: tentativa de resolver o impasse de forma amigável e documentada.',
              'Produção Antecipada de Provas: garantir evidências antes que o processo se arraste.',
              'Defesa ou Propositura de Ações: atuação técnica em ações de cobrança, obrigação de fazer, indenizatórias ou revisionais.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'indenizacao-por-negativacao-indevida',
    area: 'civil',
    title: 'Indenização por Negativação Indevida: Quando o "Nome Sujo" é um Erro',
    description:
      'Quando uma empresa inscreve o CPF de alguém nos órgãos de proteção ao crédito de forma injusta, ela comete um ato ilícito que gera o dever de indenizar.',
    sections: [
      {
        heading: 'O que caracteriza a Negativação Indevida?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Dívida já paga', description: 'O consumidor quitou o débito, mas a empresa não deu baixa no sistema em até 5 dias úteis.' },
              { title: 'Dívida inexistente', description: 'O nome é negativado por um serviço que nunca foi contratado — comum em fraudes de telefonia e cartões.' },
              { title: 'Falta de Notificação Prévia', description: 'O CDC exige que o órgão de proteção ao crédito avise o consumidor por escrito antes de negativá-lo.' },
              { title: 'Dívida Prescrita', description: 'Cobranças de dívidas com mais de 5 anos não podem constar nos sistemas de restrição ao crédito.' },
            ],
          },
        ],
      },
      {
        heading: 'O Dano Moral "In Re Ipsa" (Presumido)',
        blocks: [
          {
            type: 'text',
            content:
              'No caso de negativação indevida, o dano moral é presumido. O juiz reconhece que o simples fato de ter o crédito negado e o nome manchado injustamente já causa uma lesão à honra e à dignidade do cidadão — dispensando a prova de "tristeza" ou "humilhação".',
          },
        ],
      },
      {
        heading: 'Como reagir e produzir provas?',
        blocks: [
          {
            type: 'ordered-list',
            items: [
              'Print do Histórico: tire um print ou peça uma certidão do órgão de proteção ao crédito onde conste quem fez a inclusão e a data.',
              'Comprovantes de Pagamento: se a dívida já estava paga, guarde o comprovante e os protocolos de tentativas de solução amigável.',
              'Prova do Dano Extra: caso você tenha perdido uma oportunidade real — como a negativa de um financiamento já em andamento — guarde os documentos da negativa do banco; isso pode aumentar o valor da reparação.',
            ],
          },
        ],
      },
    ],
  },
];
