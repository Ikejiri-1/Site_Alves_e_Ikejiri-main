import type { Article } from '../types/content';

export const imobiliarioArticles: Article[] = [
  {
    slug: 'acao-de-despejo',
    area: 'imobiliario',
    title: 'Ação de Despejo: O Caminho Legal para a Retomada do Imóvel',
    description:
      'A Ação de Despejo é a única via judicial para que o proprietário retire o inquilino e retome a posse direta do seu patrimônio quando a relação locatícia entra em conflito.',
    sections: [
      {
        heading: 'Principais Motivos que Geram o Despejo',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Falta de Pagamento', description: 'O motivo mais comum. Um único dia de atraso no aluguel ou nos encargos já autoriza o início da ação.' },
              { title: 'Descumprimento de Cláusulas', description: 'Uso do imóvel para fins diferentes do contratado, sublocação não autorizada ou danos graves à estrutura.' },
              { title: 'Término do Prazo Contratual', description: 'Quando o contrato por tempo determinado chega ao fim e o inquilino permanece sem a concordância do locador.' },
              { title: 'Uso Próprio ou Reformas Urgentes', description: 'Em casos específicos previstos em lei, o proprietário pode pedir o imóvel para moradia própria, de familiares ou para obras determinadas pelo Poder Público.' },
            ],
          },
        ],
      },
      {
        heading: 'Resumo do Procedimento de Despejo',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Petição Inicial', description: 'O advogado protocola a ação com as provas da infração ou atraso.' },
              { title: 'Liminar (se houver)', description: 'O juiz ordena a saída em 15 dias sob pena de despejo forçado.' },
              { title: 'Citação', description: 'O inquilino é avisado oficialmente para se defender ou pagar a dívida.' },
              { title: 'Sentença', description: 'O juiz decide o mérito da causa e confirma o despejo definitivo.' },
              { title: 'Mandado de Despejo', description: 'Ordem final para desocupação, com auxílio de força policial, se necessário.' },
            ],
          },
        ],
      },
      {
        heading: 'O Despejo Liminar: A Retomada em 15 Dias',
        blocks: [
          {
            type: 'text',
            content: 'Para que a liminar seja concedida, são exigidos três requisitos cumulativos:',
          },
          {
            type: 'ordered-list',
            items: [
              'Fundamento específico: a causa deve se enquadrar nas hipóteses do Art. 59 da Lei 8.245/91.',
              'Prestação de Caução: o autor deve depositar em juízo valor equivalente a três meses de aluguel.',
              'Ausência de Garantias (Art. 37): a liminar só é permitida se o contrato estiver desprovido de fiador, seguro-fiança ou caução.',
            ],
          },
        ],
      },
      {
        heading: 'O Direito de "Purgar a Mora"',
        blocks: [
          {
            type: 'text',
            content:
              'A lei oferece uma última chance ao inquilino: realizar a purgação da mora, depositando judicialmente o valor total da dívida — incluindo juros, multas e honorários — no prazo da contestação.',
          },
          {
            type: 'text',
            content: 'Nota importante: este direito só pode ser utilizado uma vez a cada 24 meses.',
          },
        ],
      },
    ],
  },
  {
    slug: 'usucapiao',
    area: 'imobiliario',
    title: 'Usucapião: Como Regularizar seu Imóvel e Garantir a Propriedade Definitiva',
    description:
      'A Usucapião permite que quem exerce a posse de um bem por determinado tempo, de forma ininterrupta e sem oposição, torne-se o dono oficial. Entenda como funciona.',
    sections: [
      {
        heading: 'Os Requisitos Essenciais',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Posse Mansa e Pacífica', description: 'Você deve ocupar o bem sem que o antigo dono tenha contestado ou tentado reaver o imóvel judicialmente.' },
              { title: 'Animus Domini', description: 'Você deve agir como se fosse o proprietário: cuidando da manutenção, pagando impostos e realizando benfeitorias.' },
              { title: 'Tempo', description: 'O prazo varia de 2 a 15 anos, dependendo do tamanho do imóvel e da finalidade da posse.' },
            ],
          },
        ],
      },
      {
        heading: 'Extrajudicial vs. Judicial',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Extrajudicial (Cartório)', 'Judicial'],
            rows: [
              { label: 'Quando usar', values: ['Sem conflito, documentação em ordem', 'Resistência de herdeiros, documentação escassa ou necessidade de perícias'] },
              { label: 'Velocidade', values: ['Poucos meses', 'Mais lento — processo completo'] },
              { label: 'Custo', values: ['Geralmente menor', 'Maior — custas e perícias judiciais'] },
            ],
          },
        ],
      },
      {
        heading: 'Por que regularizar agora?',
        blocks: [
          {
            type: 'list',
            items: [
              'Impossibilidade de Venda por Financiamento: bancos não financiam imóveis sem matrícula regularizada.',
              'Dificuldade em Heranças: herdeiros terão problemas dobrados para regularizar o bem no futuro.',
              'Desvalorização: imóveis irregulares valem de 30% a 50% menos no mercado imobiliário.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'posse-e-propriedade',
    area: 'imobiliario',
    title: 'Direitos sobre Bens Móveis e Imóveis: A Diferença entre Posse e Propriedade',
    description:
      'Ser o possuidor é diferente de ser o proprietário de um bem. Entenda essa distinção fundamental e como ela define as medidas a serem tomadas em caso de conflitos.',
    sections: [
      {
        heading: 'Posse vs. Propriedade',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Posse', 'Propriedade'],
            rows: [
              { label: 'Definição', values: ['Situação de fato — exercício dos poderes inerentes à propriedade (Art. 1.196, CC)', 'Direito real mais amplo — usar, gozar, dispor e reaver o bem (Art. 1.228, CC)'] },
              { label: 'Como se prova', values: ['Pela ocupação e uso efetivo do bem', 'Pelo registro da escritura na Matrícula do Imóvel'] },
              { label: 'Proteção', values: ['Ações possessórias (independem de quem é o dono no papel)', 'Ações petitórias (dependem da titularidade)'] },
            ],
          },
        ],
      },
      {
        heading: 'Ações Possessórias vs. Petitórias',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Possessórias (foco na posse)', 'Petitórias (foco na propriedade)'],
            rows: [
              { label: 'Reintegração / Reivindicatória', values: ['Quando há perda total da posse (esbulho)', 'O proprietário sem posse busca reaver o bem'] },
              { label: 'Manutenção / Adjudicação', values: ['Quando há perturbação da posse (turbação)', 'Comprador quitou o imóvel, mas o vendedor se recusa a outorgar a escritura'] },
              { label: 'Interdito Proibitório / Usucapião', values: ['Ameaça iminente de invasão', 'Aquisição da propriedade pela posse prolongada'] },
            ],
          },
        ],
      },
      {
        heading: 'Os Riscos de Ignorar o Conflito',
        blocks: [
          {
            type: 'list',
            items: [
              'Perda da Propriedade por Usucapião: após determinado tempo, quem exerce a posse sem oposição pode pleitear a propriedade para si.',
              'Deterioração do Bem: sem proteção judicial imediata, o bem pode ser ocultado, destruído ou sofrer desvalorização.',
              'Consolidação da Posse Nova: agir dentro de um ano e um dia garante ritos processuais mais rápidos e liminares mais eficazes.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'regularizacao-de-imoveis',
    area: 'imobiliario',
    title: 'Regularização de Imóveis: Segurança Jurídica e Valorização Patrimonial',
    description:
      'No mercado imobiliário existe uma máxima: "Quem não registra, não é dono." Manter um imóvel irregular pode desvalorizá-lo em até 50%. Entenda como resolver.',
    sections: [
      {
        heading: 'O Impacto da Irregularidade no Valor',
        blocks: [
          {
            type: 'text',
            content:
              'Estatísticas do setor imobiliário demonstram que um imóvel irregular pode valer de 30% a 50% menos do que se estivesse com a documentação em ordem. Esse deságio ocorre por dois motivos:',
          },
          {
            type: 'simple-table',
            rows: [
              { title: 'Restrição ao Financiamento', description: 'Bancos não concedem crédito para imóveis sem matrícula regularizada. Sem financiamento, o mercado potencial cai drasticamente, reduzindo o preço.' },
              { title: 'Risco Jurídico', description: 'Imóveis com pendências cadastrais afastam investidores que buscam segurança contra futuras disputas judiciais ou dívidas herdadas.' },
            ],
          },
        ],
      },
      {
        heading: 'Riscos Concretos da Não Regularização',
        blocks: [
          {
            type: 'list',
            items: [
              'Penhora por Dívidas do Antigo Dono: como o imóvel legalmente ainda pertence a quem consta na matrícula, ele pode ser penhorado para pagar dívidas do vendedor.',
              'Venda em Duplicidade: o antigo proprietário pode vender o mesmo imóvel a um terceiro. No Direito Brasileiro, a propriedade pertence a quem registrar o título primeiro.',
              'Entraves no Inventário: a morte do possuidor de um imóvel irregular impede a transmissão direta aos herdeiros, tornando o processo mais lento, caro e complexo.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'due-diligence-imobiliaria',
    area: 'imobiliario',
    title: 'Due Diligence Imobiliária: A Investigação que Protege seu Investimento',
    description:
      'A Due Diligence é a investigação minuciosa e preventiva realizada antes da compra de um imóvel. É o que separa um excelente investimento de um prejuízo judicial que pode durar anos.',
    sections: [
      {
        heading: 'Os Três Pilares da Investigação',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'A Situação do Imóvel', description: 'Verificação da Matrícula para buscar penhoras, hipotecas, usufrutos ou cláusulas de inalienabilidade. Também inclui a checagem de débitos de IPTU e taxas de condomínio.' },
              { title: 'A Situação do Vendedor', description: 'Pesquisa em todos os tribunais (Cível, Trabalhista, Federal e Criminal) para identificar processos que possam levar à anulação da venda por Fraude à Execução.' },
              { title: 'A Situação do Cônjuge/Sócios', description: 'Se o vendedor for casado ou o imóvel pertencer a uma empresa, a investigação deve se estender aos parceiros — dívidas familiares ou societárias podem atingir o patrimônio.' },
            ],
          },
        ],
      },
      {
        heading: 'Checklist de Documentos Essenciais',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Documento', 'O que revela?'],
            rows: [
              { label: 'Matrícula Atualizada (Inteiro Teor)', values: ['Imóvel', 'Quem é o dono real e se há ônus no bem'] },
              { label: 'CND de Débitos Tributários (Prefeitura)', values: ['Imóvel', 'Se há dívidas de IPTU que "seguem" o imóvel'] },
              { label: 'Certidões dos Distribuidores Cíveis e Criminais', values: ['Vendedor', 'Se o vendedor está sendo processado'] },
              { label: 'Certidão Negativa de Débitos Trabalhistas', values: ['Vendedor', 'Se há risco de o imóvel ser leiloado para pagar funcionários'] },
              { label: 'Declaração de Inexistência de Débitos de Condomínio', values: ['Condomínio', 'Garante que você não herdará dívidas de taxas condominiais'] },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'suspensao-de-leiloes',
    area: 'imobiliario',
    title: 'Suspensão de Leilões Judiciais e Extrajudiciais: Como Proteger seu Patrimônio',
    description:
      'O procedimento de leilão deve seguir regras rígidas. Em muitos casos, apresenta irregularidades que permitem a sua suspensão imediata. Entenda como agir.',
    sections: [
      {
        heading: 'Leilão Judicial vs. Extrajudicial',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Judicial', 'Extrajudicial (Bancos)'],
            rows: [
              { label: 'Origem', values: ['Dentro de um processo na Justiça (Execução Fiscal ou Civil)', 'Financiamentos imobiliários — Lei nº 9.514/97 (Alienação Fiduciária)'] },
              { label: 'Necessita de processo?', values: ['Sim — o juiz determina a venda', 'Não — o banco retoma e leva a leilão sem processo prévio'] },
              { label: 'Erros mais comuns', values: ['Preço vil, ausência de intimação, erro de avaliação', 'Falta de notificação para purgação da mora, vício no edital'] },
            ],
          },
        ],
      },
      {
        heading: 'Motivos para Suspender um Leilão Judicial',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Preço Vil (Art. 891, CPC)', description: 'Lance inferior a 50% da avaliação atualizada do bem.' },
              { title: 'Ausência de Intimação Pessoal (Art. 889, CPC)', description: 'O proprietário deve ser intimado pessoalmente e com antecedência. A falha gera nulidade.' },
              { title: 'Erro na Avaliação', description: 'Valor atribuído ao bem defasado em relação ao mercado atual — pode ser suspenso para nova perícia.' },
              { title: 'Impenhorabilidade do Bem de Família', description: 'Se for a única residência da família, é protegido por lei (Lei nº 8.009/90) e não pode ser leiloado por dívidas comuns.' },
            ],
          },
        ],
      },
      {
        heading: 'Motivos para Suspender um Leilão Extrajudicial',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Falta de Notificação para Purgação da Mora', description: 'O banco deve notificar o devedor via cartório para que ele tenha a chance de quitar as parcelas atrasadas antes do leilão.' },
              { title: 'Ausência de Notificação sobre as Datas', description: 'O STJ consolidou que o devedor deve ser comunicado sobre o dia, hora e local dos leilões, sob pena de nulidade.' },
              { title: 'Direito de Preferência', description: 'O devedor tem o direito de preferência para adquirir o imóvel pelo valor da dívida até a data do segundo leilão.' },
              { title: 'Vícios no Edital', description: 'Omissões sobre o estado do imóvel, débitos de condomínio ou IPTU no edital podem levar à suspensão.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'reintegracao-e-manutencao-de-posse',
    area: 'imobiliario',
    title: 'Reintegração e Manutenção de Posse: Como Proteger o Uso do seu Bem',
    description:
      'No Direito Brasileiro, a posse é protegida de forma independente da propriedade. Para cada tipo de agressão à posse, existe uma ação judicial específica.',
    sections: [
      {
        heading: 'Tipo de Agressão × Ação Cabível',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Tipo de Agressão', 'Ação Cabível', 'Objetivo'],
            rows: [
              { label: 'Esbulho', values: ['Perda total da posse — invasão, retenção indevida', 'Reintegração de Posse', 'Retomar o controle total sobre o bem'] },
              { label: 'Turbação', values: ['Perturbação da posse — cercas derrubadas, obras não autorizadas', 'Manutenção de Posse', 'Cessar a perturbação e garantir o uso pleno'] },
              { label: 'Ameaça', values: ['Risco iminente de invasão ou agressão', 'Interdito Proibitório', 'Prevenir a agressão antes que ela ocorra'] },
            ],
          },
        ],
      },
      {
        heading: 'O Fator Tempo: Posse Nova vs. Posse Velha',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Posse Nova (até 1 ano e 1 dia)', 'Posse Velha (mais de 1 ano e 1 dia)'],
            rows: [
              { label: 'Liminar', values: ['O juiz pode determinar a desocupação imediatamente, antes de ouvir a outra parte', 'Não cabe liminar — segue o rito comum'] },
              { label: 'Velocidade', values: ['Processo mais rápido e eficaz', 'Mais lento — exige fase de provas mais extensa'] },
            ],
          },
          {
            type: 'text',
            content: 'Agir rapidamente é a estratégia mais eficaz para evitar prejuízos prolongados.',
          },
        ],
      },
    ],
  },
  {
    slug: 'arbitramento-e-cobranca-de-aluguel',
    area: 'imobiliario',
    title: 'Arbitramento e Cobrança de Aluguel: Como Garantir a Renda Justa pelo seu Imóvel',
    description:
      'Quando um inquilino deixa de pagar ou quando um coproprietário utiliza o bem sozinho sem indenizar os demais, o Direito oferece ferramentas para reequilibrar essa relação.',
    sections: [
      {
        heading: 'Diferenças entre as Ações',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Objetivo', 'Quando utilizar?'],
            rows: [
              { label: 'Cobrança / Execução', values: ['Receber valores em atraso', 'Inquilino parou de pagar o aluguel contratado'] },
              { label: 'Arbitramento', values: ['Fixar um valor de ocupação', 'Coproprietário (ex-cônjuge ou herdeiro) usa o bem sozinho sem pagar os demais'] },
              { label: 'Revisionária', values: ['Ajustar o valor ao mercado', 'O aluguel ficou muito baixo ou muito alto com o tempo (após 3 anos)'] },
            ],
          },
        ],
      },
      {
        heading: 'Vantagem Estratégica da Ação de Cobrança',
        blocks: [
          {
            type: 'text',
            content:
              'Contratos de locação assinados pelas partes são considerados títulos executivos extrajudiciais. Isso permite uma cobrança muito mais rápida, podendo gerar o bloqueio de contas bancárias do devedor logo no início do processo — sem a necessidade de um processo de conhecimento prévio.',
          },
        ],
      },
    ],
  },
  {
    slug: 'distrato-imobiliario',
    area: 'imobiliario',
    title: 'Distrato: O Limite de Retenção e a Proteção do Consumidor',
    description:
      'A rescisão de contratos de compra e venda de lotes agora possui balizas claras definidas pelo STJ. A autonomia da vontade não pode anular os direitos básicos do consumidor.',
    sections: [
      {
        heading: 'As Regras do STJ para o Distrato',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Teto de Retenção', description: 'A soma total dos descontos (multas, corretagem e encargos) não pode ultrapassar 25% dos valores efetivamente pagos pelo comprador.' },
              { title: 'Lotes Vazios (Não Edificados)', description: 'É indevida a cobrança de taxa de fruição — a rescisão não gera enriquecimento do comprador ou empobrecimento do vendedor nessas condições.' },
              { title: 'Lotes Edificados', description: 'A taxa de fruição pode ser cobrada fora do limite de 25%, limitada a 0,75% sobre o valor atualizado do contrato por mês de ocupação.' },
              { title: 'Devolução Imediata', description: 'A restituição parcelada ou apenas ao término da obra é prática abusiva. A devolução dos valores deve ocorrer de forma imediata (Súmula 543 do STJ).' },
            ],
          },
        ],
      },
      {
        heading: 'O que isso significa na prática?',
        blocks: [
          {
            type: 'text',
            content:
              'A "Lei do Distrato" não é um cheque em branco para as loteadoras. A proteção contra cláusulas iníquas e a exigência de devolução imediata garantem que o patrimônio investido seja respeitado, mesmo diante da necessidade de interromper o contrato.',
          },
        ],
      },
    ],
  },
];
