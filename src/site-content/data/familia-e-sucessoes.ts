import type { Article } from '../types/content';

export const familiaESucessoesArticles: Article[] = [
  {
    slug: 'divorcio-e-uniao-estavel',
    area: 'familia-e-sucessoes',
    title: 'Divórcio e União Estável: Direitos, Patrimônio e Formalização',
    description:
      'A dissolução de um vínculo conjugal ou de uma união estável exige estratégia jurídica. A falta de clareza na partilha pode gerar litígios que se arrastam por anos.',
    sections: [
      {
        heading: 'Modalidades de Divórcio',
        blocks: [
          {
            type: 'text',
            content:
              'Desde a Emenda Constitucional nº 66/2010, o divórcio pode ser solicitado por qualquer uma das partes a qualquer tempo, sem necessidade de prévia separação judicial.',
          },
          {
            type: 'comparison-table',
            headers: ['Extrajudicial (Cartório)', 'Judicial'],
            rows: [
              { label: 'Quando usar', values: ['Consenso entre as partes, sem filhos menores ou incapazes', 'Discordância, filhos menores envolvidos ou testamento'] },
              { label: 'Velocidade', values: ['Mais ágil e econômico', 'Mais lento — depende do Judiciário'] },
              { label: 'Advogado', values: ['Obrigatório', 'Obrigatório'] },
            ],
          },
        ],
      },
      {
        heading: 'União Estável: Reconhecimento e Dissolução',
        blocks: [
          {
            type: 'text',
            content:
              'A união estável é configurada pela convivência pública, contínua, duradoura e com objetivo de constituição de família (Art. 1.723, CC). Muitos casais vivem em união estável sem contrato escrito — nesses casos, a lei aplica, por regra, o regime de comunhão parcial de bens.',
          },
        ],
      },
      {
        heading: 'Regimes de Bens: O Que Será Dividido?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Comunhão Parcial', description: 'Comunicam-se os bens adquiridos onerosamente na constância do casamento/união.' },
              { title: 'Comunhão Universal', description: 'Todos os bens, presentes e futuros, tornam-se comuns ao casal.' },
              { title: 'Separação Total', description: 'Os patrimônios permanecem isolados.' },
              { title: 'Participação Final nos Aquestos', description: 'Cada cônjuge tem patrimônio próprio, mas há divisão do que foi adquirido com esforço comum ao fim da relação.' },
            ],
          },
        ],
      },
      {
        heading: 'Os Riscos da Inércia e da Informalidade',
        blocks: [
          {
            type: 'list',
            items: [
              'Confusão Patrimonial: bens adquiridos após a separação de fato, mas antes da formalização, podem ser alvo de disputa.',
              'Direito Sucessório: enquanto não houver dissolução formal, o ex-parceiro pode ainda ser considerado herdeiro em caso de falecimento.',
              'Responsabilidade por Dívidas: dívidas contraídas por um dos cônjuges podem atingir o patrimônio do outro sem separação jurídica clara.',
              'Impedimento para Novo Casamento: sem o divórcio ou dissolução formal anterior, podem incidir causas suspensivas para uma nova união.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'guarda-e-visitas',
    area: 'familia-e-sucessoes',
    title: 'Guarda e Direito de Convivência: Protegendo o Bem-Estar dos Filhos',
    description:
      'As decisões sobre guarda e visitas são norteadas pelo princípio de que o interesse da criança deve prevalecer sobre qualquer conflito entre os adultos.',
    sections: [
      {
        heading: 'Modalidades de Guarda no Brasil',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Guarda Compartilhada (Regra Geral)', 'Guarda Unilateral (Exceção)'],
            rows: [
              { label: 'Quem decide', values: ['Ambos os pais — responsabilidade conjunta', 'Apenas um dos genitores'] },
              { label: 'Quando se aplica', values: ['Modelo padrão desde 2014', 'Um dos pais declara que não quer a guarda ou não tem condições'] },
              { label: 'Convivência', values: ['Tempo equilibrado com ambos os pais', 'O outro genitor mantém direito de visita regulamentado'] },
            ],
          },
          {
            type: 'text',
            content:
              'Importante: compartilhar a guarda não significa necessariamente que o filho terá "duas casas" ou passará metade do tempo em cada uma — significa que ambos os pais participam ativamente das decisões.',
          },
        ],
      },
      {
        heading: 'Alienação Parental: Um Risco Grave',
        blocks: [
          {
            type: 'text',
            content:
              'A Alienação Parental (Lei nº 12.318/2010) ocorre quando um dos genitores interfere na formação psicológica da criança para que ela repudie o outro genitor. As consequências são severas:',
          },
          {
            type: 'list',
            items: [
              'Multas processuais.',
              'Alteração da guarda para o outro genitor.',
              'Suspensão da autoridade parental.',
              'Determinação de acompanhamento psicológico obrigatório.',
            ],
          },
        ],
      },
      {
        heading: 'Os Riscos de Não Regulamentar Judicialmente',
        blocks: [
          {
            type: 'list',
            items: [
              'Insegurança Jurídica: sem um documento oficial, qualquer parte pode alterar a rotina abruptamente.',
              'Dificuldade de Execução: sem um termo assinado pelo juiz, a polícia ou o conselho tutelar pouco podem fazer em casos de retenção indevida do menor.',
              'Viagens e Documentos: a falta de regulamentação clara pode impedir a emissão de passaportes ou autorizações de viagem.',
            ],
          },
        ],
      },
      {
        heading: 'O Plano de Parentalidade',
        blocks: [
          {
            type: 'text',
            content: 'Documento personalizado que o advogado ajuda a construir, detalhando:',
          },
          {
            type: 'ordered-list',
            items: [
              'Como serão tomadas as decisões cotidianas.',
              'A logística de transporte e moradia.',
              'A divisão de responsabilidades financeiras além da pensão alimentícia.',
              'O método de resolução de futuros conflitos entre os pais.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'pensao-alimenticia',
    area: 'familia-e-sucessoes',
    title: 'Pensão Alimentícia: Direitos, Deveres e as Consequências do Inadimplemento',
    description:
      'O termo "alimentos" abrange moradia, vestuário, saúde, educação, lazer e transporte — não apenas alimentação. Entenda seus direitos e os riscos do não pagamento.',
    sections: [
      {
        heading: 'Quem tem direito aos alimentos?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Filhos', description: 'Caso mais comum — decorrente do poder familiar.' },
              { title: 'Ex-cônjuges ou ex-companheiros', description: 'Quando comprovada a dependência econômica e a impossibilidade de prover o próprio sustento.' },
              { title: 'Parentes (Ascendentes e Descendentes)', description: 'Entre pais e filhos maiores (estudantes ou incapazes), ou mesmo de netos para avós — respeitando a reciprocidade.' },
              { title: 'Alimentos Gravídicos', description: 'Direitos da gestante para cobrir as despesas do período de gravidez (Lei nº 11.804/08).' },
            ],
          },
        ],
      },
      {
        heading: 'O Critério de Fixação: Trinômio Necessidade-Possibilidade-Proporcionalidade',
        blocks: [
          {
            type: 'text',
            content: 'A justiça brasileira não utiliza uma tabela fixa. O juiz analisa três fatores:',
          },
          {
            type: 'ordered-list',
            items: [
              'Necessidade: quanto o beneficiário precisa para viver com dignidade.',
              'Possibilidade: quanto quem paga pode oferecer sem comprometer o próprio sustento.',
              'Proporcionalidade: o equilíbrio entre as duas pontas, visando manter o padrão de vida que o beneficiário possuía.',
            ],
          },
        ],
      },
      {
        heading: 'Os Riscos Críticos de Ignorar o Dever Alimentar',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Prisão Civil (Art. 528, CPC)', description: 'Única dívida civil que autoriza prisão no Brasil. O devedor pode ser preso por 1 a 3 meses pelo não pagamento das três últimas parcelas.' },
              { title: 'Penhora de Bens e Valores', description: 'Bloqueio de contas bancárias (SISBAJUD), penhora de veículos, imóveis e até do FGTS ou parte do salário.' },
              { title: 'Protesto e Negativação', description: 'O nome do devedor é incluído no SPC/Serasa, prejudicando o crédito no mercado.' },
              { title: 'Suspensão de CNH e Passaporte', description: 'Em casos de devedores contumazes que ocultam patrimônio, a justiça tem autorizado essas medidas atípicas.' },
              { title: 'Crime de Abandono Material', description: 'Deixar de prover a subsistência de filho menor sem justa causa pode configurar crime com pena de detenção e multa (Art. 244, Código Penal).' },
            ],
          },
        ],
      },
      {
        heading: 'Ação Revisional e Ação de Exoneração',
        blocks: [
          {
            type: 'text',
            content:
              'Nunca reduza ou pare de pagar a pensão por conta própria — isso gera débito imediato e risco de prisão. Use as vias judiciais adequadas:',
          },
          {
            type: 'simple-table',
            rows: [
              { title: 'Ação Revisional', description: 'Se a situação financeira mudar (para melhor ou para pior), ingressar imediatamente com ação para readequar o valor.' },
              { title: 'Ação de Exoneração', description: 'O pagamento não cessa automaticamente quando o filho faz 18 anos. É preciso uma decisão judicial que autorize o encerramento.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'inventario',
    area: 'familia-e-sucessoes',
    title: 'Inventário: O Passo Necessário para a Regularização do Patrimônio',
    description:
      'O Inventário é o procedimento jurídico indispensável para transferir formalmente o patrimônio do falecido aos herdeiros. Entenda os prazos e as consequências de não fazê-lo.',
    sections: [
      {
        heading: 'Tipos de Inventário',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Extrajudicial (Cartório)', 'Judicial'],
            rows: [
              { label: 'Quando usar', values: ['Consenso entre herdeiros, sem testamento e sem menores/incapazes', 'Divergência entre herdeiros, menores envolvidos ou testamento'] },
              { label: 'Velocidade', values: ['Mais rápido — pode ser concluído em poucos meses', 'Mais lento — depende do Judiciário'] },
              { label: 'Base legal', values: ['Lei nº 11.441/07', 'Art. 610 do CPC'] },
              { label: 'Advogado', values: ['Obrigatório (Art. 610, §2º do CPC)', 'Obrigatório'] },
            ],
          },
        ],
      },
      {
        heading: 'O Prazo Crítico e as Multas',
        blocks: [
          {
            type: 'text',
            content:
              'De acordo com o Art. 611 do CPC, o processo deve ser iniciado dentro de 2 (dois) meses a contar da data do falecimento. O atraso implica multa pesada sobre o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) — cada estado define sua alíquota, mas a multa pode elevar consideravelmente o custo do processo.',
          },
        ],
      },
      {
        heading: 'Consequências de Não Fazer o Inventário',
        blocks: [
          {
            type: 'list',
            items: [
              'Impossibilidade de Venda: imóveis e veículos permanecem em nome do falecido e não podem ser vendidos, transferidos ou dados em garantia.',
              'Bloqueio de Contas Bancárias: valores depositados ficam retidos e só podem ser liberados por alvará ou ao fim do inventário.',
              'Problemas em Novos Casamentos: restrições de regime de bens (Separação Obrigatória) se o inventário do cônjuge anterior não estiver finalizado (Art. 1.523, I, CC).',
              'Insegurança Jurídica: com o passar dos anos, os herdeiros originais também podem falecer, acumulando novos inventários e tornando a partilha extremamente complexa e cara.',
            ],
          },
        ],
      },
      {
        heading: 'Custos Envolvidos',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'ITCMD', description: 'Imposto estadual cuja alíquota varia conforme o estado (teto atual de 8%).' },
              { title: 'Custas de Cartório ou Judiciais', description: 'Taxas para o processamento do inventário.' },
              { title: 'Emolumentos de Registro', description: 'Taxas cobradas pelos Cartórios de Registro de Imóveis para atualizar as matrículas.' },
              { title: 'Honorários Advocatícios', description: 'A presença de um advogado é obrigatória tanto no inventário judicial quanto no extrajudicial.' },
            ],
          },
        ],
      },
    ],
  },
];
