import type { Article } from '../types/content';

export const tributarioArticles: Article[] = [
  {
    slug: 'execucao-fiscal',
    area: 'tributario',
    title: 'Execução Fiscal: Entenda o que é e quais os riscos de ignorar esta ação',
    description:
      'Muitos empresários e pessoas físicas são surpreendidos pela chegada de uma citação de Execução Fiscal. Entenda o que é, seus prazos críticos e como se defender.',
    sections: [
      {
        heading: 'O que é a Execução Fiscal?',
        blocks: [
          {
            type: 'text',
            content:
              'A execução fiscal é o procedimento judicial que a Fazenda Pública utiliza para cobrar créditos devidos ao erário. O processo é fundamentado na Certidão de Dívida Ativa (CDA), documento que goza de presunção de certeza e liquidez — o Estado não precisa provar a dívida novamente; cabe ao devedor contestar.',
          },
          {
            type: 'text',
            content: 'Os créditos cobrados podem ser:',
          },
          {
            type: 'simple-table',
            rows: [
              { title: 'Tributários', description: 'ICMS, IPTU, IPVA, ISS, IRPJ e outros impostos.' },
              { title: 'Não Tributários', description: 'Multas ambientais, de trânsito e administrativas.' },
            ],
          },
        ],
      },
      {
        heading: 'O Prazo Crítico: 5 Dias',
        blocks: [
          {
            type: 'text',
            content:
              'Ao ser citado, o executado tem apenas 5 (cinco) dias para tomar uma das seguintes providências:',
          },
          {
            type: 'ordered-list',
            items: [
              'Efetuar o pagamento integral do débito — acrescido de juros, correção monetária e honorários.',
              'Garantir a execução mediante depósito em dinheiro, fiança bancária, seguro garantia ou indicação de bens à penhora.',
            ],
          },
          {
            type: 'text',
            content:
              'Atenção: se nada for feito nesse curto período, o juiz poderá determinar imediatamente o bloqueio de valores e bens.',
          },
        ],
      },
      {
        heading: 'Os Riscos de Ignorar a Execução Fiscal',
        blocks: [
          {
            type: 'list',
            items: [
              'Bloqueio de Contas Bancárias (SISBAJUD): rastreio e bloqueio imediato de contas corrente, poupança e investimentos.',
              'Penhora de Bens: veículos (RENAJUD), imóveis e até faturamento da empresa.',
              'Inscrição no CADIN, Serasa e SPC.',
              'Responsabilidade dos Sócios: em casos de dissolução irregular, o patrimônio pessoal dos sócios pode ser atingido (Art. 135 do CTN).',
            ],
          },
        ],
      },
      {
        heading: 'Principais Teses de Defesa',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Prescrição e Decadência', description: 'Quando o Estado perde o prazo legal para cobrar a dívida.' },
              { title: 'Nulidade da CDA', description: 'Erros formais no título que embasa a execução.' },
              { title: 'Excesso de Execução', description: 'Cobrança de valores maiores que os devidos ou juros abusivos.' },
              { title: 'Impenhorabilidade', description: 'Proteção de bens indispensáveis, como o bem de família ou ferramentas de trabalho.' },
            ],
          },
          {
            type: 'text',
            content:
              'As defesas mais comuns são os Embargos à Execução e a Exceção de Pré-Executividade, cada uma com requisitos específicos que exigem análise técnica criteriosa.',
          },
        ],
      },
    ],
  },
  {
    slug: 'inscricao-em-divida-ativa-cda',
    area: 'tributario',
    title: 'Inscrição em Dívida Ativa: O Que Você Precisa Saber',
    description:
      'A inscrição em Dívida Ativa formaliza o crédito não pago e o transforma em título executivo. Entenda seus efeitos e como se proteger.',
    sections: [
      {
        heading: 'O Que é a Dívida Ativa?',
        blocks: [
          {
            type: 'text',
            content:
              'A Dívida Ativa compreende os créditos do Estado que não foram pagos voluntariamente no prazo determinado. A inscrição ocorre quando o contribuinte, após ser notificado do lançamento do crédito tributário, não realiza o pagamento no prazo legal.',
          },
          {
            type: 'simple-table',
            rows: [
              { title: 'Créditos Tributários', description: 'Impostos, taxas e contribuições de melhoria.' },
              { title: 'Créditos Não Tributários', description: 'Multas e outros valores devidos ao ente público.' },
            ],
          },
        ],
      },
      {
        heading: 'A Certidão de Dívida Ativa (CDA)',
        blocks: [
          {
            type: 'text',
            content:
              'A CDA contém a identificação do devedor, o valor exato do débito, juros, multas e demais acréscimos legais. De acordo com o Art. 784, IX do CPC, ela possui força de título executivo — a Fazenda Pública não precisa comprovar novamente a existência da dívida para iniciar a cobrança forçada.',
          },
        ],
      },
      {
        heading: 'Os Efeitos e Riscos da Inscrição',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Execução Fiscal', description: 'Ajuizamento de ação judicial para penhora e expropriação de bens.' },
              { title: 'Bloqueio de Certidões', description: 'Impedimento de obter a CND, inviabilizando licitações e financiamentos.' },
              { title: 'Inscrição no CADIN', description: 'Restrição de crédito junto a instituições financeiras e proibição de contratos públicos.' },
              { title: 'Medidas Cautelares', description: 'Possibilidade de indisponibilidade de bens antes mesmo da execução.' },
              { title: 'Interrupção da Prescrição', description: 'A inscrição pode interromper o prazo que o Estado tem para cobrar judicialmente.' },
            ],
          },
        ],
      },
      {
        heading: 'Prazos Importantes: Decadência vs. Prescrição',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Decadência', description: 'Prazo de 5 anos que o Estado tem para constituir o crédito tributário, contados do fato gerador. Se não o fizer, perde o direito de cobrar.' },
              { title: 'Prescrição', description: 'Prazo de 5 anos para a Fazenda Pública cobrar judicialmente o crédito já constituído. A inscrição em Dívida Ativa interrompe esse prazo.' },
            ],
          },
        ],
      },
      {
        heading: 'Como se Defender?',
        blocks: [
          {
            type: 'ordered-list',
            items: [
              'Embargos à Execução: contestação da validade da CDA, alegando erros, prescrição ou decadência.',
              'Exceção de Pré-Executividade: permite questionar vícios formais sem a necessidade de garantir o juízo com bens.',
              'Ações Anulatórias: discussão judicial da dívida, muitas vezes acompanhada do depósito integral do valor para suspender a cobrança.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'prescricao-intercorrente',
    area: 'tributario',
    title: 'Prescrição Intercorrente: Quando o Tempo Extingue a Execução Fiscal',
    description:
      'Se a Fazenda Pública não conseguir localizar bens penhoráveis dentro de um determinado período, ocorre a Prescrição Intercorrente, que resulta na extinção definitiva da dívida.',
    sections: [
      {
        heading: 'Como funciona o prazo?',
        blocks: [
          {
            type: 'text',
            content:
              'O rito da prescrição intercorrente segue uma cronologia rigorosa prevista no Art. 40 da Lei nº 6.830/80 (LEF) e detalhada pelo STJ:',
          },
          {
            type: 'ordered-list',
            items: [
              'Suspensão do Processo: se a Fazenda Pública não encontrar o devedor ou bens, o juiz suspende a execução por 1 ano. Durante esse período, o prazo prescricional não corre.',
              'Arquivamento Automático: findo o prazo de um ano sem resultado, o processo é arquivado automaticamente.',
              'Início da Contagem: a partir do arquivamento começa a correr o prazo de 5 anos.',
              'Reconhecimento da Prescrição: se a Fazenda não diligenciar de forma efetiva, o juiz declara a prescrição e extingue o processo.',
            ],
          },
        ],
      },
      {
        heading: 'O Marco Decisivo: Tema 566 do STJ',
        blocks: [
          {
            type: 'text',
            content:
              'A contagem do prazo independe de uma decisão formal do juiz ou de intimação da Fazenda Pública. O prazo de 1 ano de suspensão começa automaticamente na data em que a Fazenda é cientificada de que não foram encontrados bens ou o devedor — evitando que o processo fique "eterno" por falta de movimentação.',
          },
        ],
      },
      {
        heading: 'Por que esta é uma das melhores defesas para o contribuinte?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Extinção do Débito', description: 'O reconhecimento extingue o crédito tributário, limpa o nome do devedor e libera restrições.' },
              { title: 'Segurança Jurídica', description: 'Impede que o Estado cobre dívidas de décadas atrás, cujos documentos o contribuinte muitas vezes nem possui mais.' },
              { title: 'Economia', description: 'Evita o pagamento de multas e juros que, em processos muito antigos, costumam ultrapassar o valor do próprio imposto.' },
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
              'Auditoria de Datas: verificar exatamente quando ocorreu a ciência da não localização de bens e quando se iniciou o arquivamento automático.',
              'Peticionamento Estratégico: apresentar a Exceção de Pré-Executividade ou os Embargos à Execução demonstrando que o prazo de 5 anos já transcorreu.',
              'Combater Movimentações Inúteis: o STJ entende que pedidos da Fazenda que não resultam na localização de bens não interrompem o prazo prescricional.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'sisbajud-teimosinha',
    area: 'tributario',
    title: 'O Bloqueio "Teimosinha" do SISBAJUD: Como se Proteger Legalmente',
    description:
      'A "Teimosinha" permite o bloqueio contínuo de contas por até 30 dias. Entenda como funciona e quais estratégias jurídicas existem para combater bloqueios abusivos.',
    sections: [
      {
        heading: 'O que é a Teimosinha?',
        blocks: [
          {
            type: 'text',
            content:
              'Diferente do bloqueio tradicional, que ocorria em um único dia, a "Teimosinha" permite que o juiz emita uma ordem de bloqueio que permanece ativa monitorando sua conta por até 30 dias. Qualquer valor que entrar — seja pagamento de cliente ou salário — será automaticamente retido até atingir o valor total da dívida.',
          },
        ],
      },
      {
        heading: 'Estratégias Jurídicas de Proteção',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              {
                title: 'Regra dos 40 Salários Mínimos',
                description:
                  'Após o STJ (Tema 1.235), a proteção não é mais automática. O devedor deve provocar o juiz ativamente, comprovando que o valor é essencial para sua subsistência.',
              },
              {
                title: 'Impenhorabilidade de Salários',
                description:
                  'Salários, aposentadorias, pensões e BPC/LOAS são protegidos por lei. É necessário apresentar extratos e holerites que comprovem a origem do valor bloqueado.',
              },
              {
                title: 'Capital de Giro (Empresas)',
                description:
                  'É possível alegar o Princípio da Continuidade da Empresa. Se o bloqueio impedir a sobrevivência do negócio, o advogado pode solicitar a substituição ou limitação da penhora.',
              },
              {
                title: 'Excesso de Execução',
                description:
                  'Se o credor já possui outros bens penhorados que garantem a dívida, a ativação da teimosinha pode ser considerada excesso (Art. 805 do CPC) e revogada.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Dicas de Prevenção',
        blocks: [
          {
            type: 'list',
            items: [
              'Separação de Contas: nunca misture dinheiro de despesas pessoais com movimentações empresariais ou de reserva.',
              'Monitoramento Ativo: uma assessoria jurídica que monitore o processo permite antecipar a ordem de bloqueio e preparar a defesa.',
              'Comprovação Documental: mantenha sempre guardados os comprovantes de origem de cada valor depositado em suas contas.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'transacao-tributaria',
    area: 'tributario',
    title: 'Regularização de Dívidas: Transação Tributária e Parcelamentos Fiscais',
    description:
      'A Transação Tributária oferece descontos de até 70% e prazos de até 145 meses. Entenda como negociar suas dívidas com o Fisco de forma vantajosa.',
    sections: [
      {
        heading: 'O que é a Transação Tributária?',
        blocks: [
          {
            type: 'text',
            content:
              'Diferente do parcelamento comum, a Transação Tributária (Lei nº 13.988/2020) é um acordo entre o contribuinte e o Estado. O Fisco avalia a capacidade de pagamento do devedor e pode oferecer concessões significativas para encerrar o litígio.',
          },
          {
            type: 'list',
            items: [
              'Descontos de até 65% ou 70% sobre multas, juros e encargos.',
              'Pagamento em até 120 ou 145 meses dependendo da modalidade.',
              'Uso de créditos de Prejuízo Fiscal e Base de Cálculo Negativa de CSLL para abater parte da dívida.',
              'Suspensão de leilões e bloqueios de contas após formalizado o acordo.',
            ],
          },
        ],
      },
      {
        heading: 'PGFN vs. Receita Federal: Onde estão as melhores vantagens?',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Receita Federal (RFB)', 'PGFN (Dívida Ativa)'],
            rows: [
              { label: 'Fase do Débito', values: ['Administrativa (antes da inscrição)', 'Judicial ou inscrita em Dívida Ativa'] },
              { label: 'Descontos', values: ['Inexistentes ou limitados a editais raros', 'Altos descontos baseados na capacidade de pagamento (Capag)'] },
              { label: 'Flexibilidade', values: ['Regras rígidas e automáticas', 'Transação Individual ou por Adesão'] },
              { label: 'Prazo Máximo', values: ['Geralmente até 60 meses', 'Até 120 ou 145 meses'] },
              { label: 'Análise de Risco', values: ['Não considera a dificuldade financeira real', 'Avalia o grau de recuperabilidade do crédito (A, B, C ou D)'] },
            ],
          },
        ],
      },
      {
        heading: 'Por que o auxílio de um advogado é indispensável?',
        blocks: [
          {
            type: 'ordered-list',
            items: [
              'Diagnóstico Fiscal: analisar se a dívida realmente é devida ou se há prescrição/nulidades antes de confessar o débito para parcelar.',
              'Cálculo de Capacidade de Pagamento: questionar administrativamente o Rating atribuído pela PGFN se ele não condizer com a realidade financeira da empresa.',
              'Segurança Jurídica: garantir que as cláusulas do acordo sejam cumpridas e evitar a rescisão por erros formais.',
              'Estratégia de Defesa: coordenar a transação com a suspensão do processo judicial de forma estratégica.',
            ],
          },
        ],
      },
    ],
  },
];
