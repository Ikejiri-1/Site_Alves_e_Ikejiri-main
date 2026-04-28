import type { Article } from '../types/content';

export const previdenciarioArticles: Article[] = [
  {
    slug: 'bpc-loas',
    area: 'previdenciario',
    title: 'BPC-LOAS: O Que É e Quem Tem Direito a Este Benefício?',
    description:
      'O BPC é um direito garantido pela Constituição Federal que assegura o pagamento mensal de um salário-mínimo. Não é necessário ter contribuído para o INSS.',
    sections: [
      {
        heading: 'Quem Pode Receber o BPC?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Idosos', description: 'Pessoas com 65 anos ou mais (homens e mulheres).' },
              { title: 'Pessoas com Deficiência (PcD)', description: 'De qualquer idade, com impedimentos de longo prazo (mínimo 2 anos) de natureza física, mental, intelectual ou sensorial que dificultem a participação plena na sociedade.' },
            ],
          },
        ],
      },
      {
        heading: 'Os Requisitos Obrigatórios',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Renda Familiar', description: 'Renda por pessoa do grupo familiar inferior a 1/4 do salário-mínimo. A justiça admite análise mais flexível considerando gastos com medicamentos, fraldas e tratamentos.' },
              { title: 'CadÚnico', description: 'É obrigatório que o beneficiário e sua família estejam inscritos e com dados atualizados no Cadastro Único. Sem isso, o pedido é negado automaticamente.' },
              { title: 'Avaliação Pericial (PcD)', description: 'Perícia médica e avaliação social realizada por assistentes sociais do INSS.' },
            ],
          },
        ],
      },
      {
        heading: 'O Que o BPC NÃO Garante?',
        blocks: [
          {
            type: 'list',
            items: [
              'Não paga 13º salário: por ser assistencial, não há gratificação natalina.',
              'Não deixa Pensão por Morte: o benefício é extinto com o falecimento do beneficiário.',
              'Não permite acumulação: não é possível receber o BPC junto com outro benefício previdenciário (aposentadoria ou pensão).',
            ],
          },
        ],
      },
      {
        heading: 'Erros Comuns que Causam Indeferimento',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'CadÚnico Desatualizado', description: 'Informações conflitantes no cadastro da prefeitura e no sistema do INSS.' },
              { title: 'Falta de Laudos Médicos', description: 'Documentação incompleta ou que não descreve adequadamente a barreira imposta pela deficiência.' },
              { title: 'Cálculo Errado da Renda', description: 'Deixar de excluir rendas que, por lei, não deveriam entrar na conta — como o BPC de outro idoso da casa.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'bpc-autismo',
    area: 'previdenciario',
    title: 'BPC-LOAS e Autismo: O Direito ao Benefício Além do Limite de Renda',
    description:
      'A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais (Lei nº 12.764/12). O limite de renda de 1/4 do salário-mínimo não é absoluto.',
    sections: [
      {
        heading: 'Caminhos para Obter o Benefício Mesmo com Renda Superior',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Dedução de Gastos Obrigatórios', 'Critério de 1/2 Salário-Mínimo (Lei nº 14.176/21)'],
            rows: [
              { label: 'Base legal', values: ['Jurisprudência STF e STJ — miserabilidade analisada caso a caso', 'Lei nº 14.176/21 — amplia o limite dependendo do grau de deficiência'] },
              { label: 'Como funciona', values: ['Desconta-se da renda familiar os gastos com o autista não supridos pelo Estado', 'O teto de renda sobe de 1/4 para 1/2 salário-mínimo por pessoa'] },
              { label: 'Exemplos de gastos dedutíveis', values: ['Terapias (ABA, Denver, Fonoaudiologia), medicamentos, fraldas, alimentação especial', 'Não se aplica — é a ampliação direta do teto de renda'] },
            ],
          },
        ],
      },
      {
        heading: 'Por que o INSS costuma negar?',
        blocks: [
          {
            type: 'text',
            content:
              'O INSS utiliza um sistema automatizado que raramente considera as particularidades e despesas reais de uma família com autista. A negativa administrativa é comum, mas abre as portas para a Ação Judicial.',
          },
          {
            type: 'text',
            content:
              'Na justiça, o juiz nomeará um Assistente Social para visitar a residência. Este profissional não olhará apenas para o contracheque, mas para a realidade da casa: o esforço dos pais, a renúncia de renda de um dos genitores para cuidar do filho e o alto custo da vida com autismo.',
          },
        ],
      },
      {
        heading: 'O Papel da Assessoria Especializada',
        blocks: [
          {
            type: 'ordered-list',
            items: [
              'Garantir que os laudos médicos estejam adequados às exigências legais.',
              'Apresentar a planilha de gastos com notas fiscais e comprovantes que permitam a dedução da renda.',
              'Certificar que o CadÚnico está corretamente preenchido para evitar conflitos de dados.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'bpc-tdah',
    area: 'previdenciario',
    title: 'BPC-LOAS para Crianças com TDAH: Entenda os Critérios e Seus Direitos',
    description:
      'Crianças diagnosticadas com TDAH também podem ter direito ao BPC, desde que o transtorno gere limitações significativas e a família se enquadre nos critérios de renda.',
    sections: [
      {
        heading: 'Requisitos para a Concessão',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Impedimento de Longo Prazo', description: 'Comprovação, através de laudos médicos e relatórios escolares, de que o TDAH gera barreiras reais na aprendizagem, interação social e autonomia por no mínimo 2 anos.' },
              { title: 'Miserabilidade (Critério Econômico)', description: 'Renda por pessoa do grupo familiar inferior a 1/4 do salário-mínimo — podendo ser flexibilizada se houver gastos elevados com tratamento.' },
            ],
          },
        ],
      },
      {
        heading: 'Gastos que Podem Ser Deduzidos da Renda',
        blocks: [
          {
            type: 'list',
            items: [
              'Medicamentos contínuos.',
              'Terapias: Psicopedagogia, Psicologia, Neuropediatria.',
              'Alimentação especial ou gastos extras com transporte para tratamentos.',
            ],
          },
        ],
      },
      {
        heading: 'Documentação Essencial',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Laudo Médico Detalhado', description: 'Indicando o CID e descrevendo as limitações intelectuais e comportamentais.' },
              { title: 'Relatório da Escola', description: 'Documento da coordenação pedagógica relatando dificuldades de aprendizado, necessidade de mediador ou atraso no desenvolvimento em relação aos colegas.' },
              { title: 'Histórico de Tratamentos', description: 'Comprovantes de que a criança realiza ou precisa realizar terapias multidisciplinares.' },
            ],
          },
        ],
      },
      {
        heading: 'Por que a Negativa do INSS é Comum?',
        blocks: [
          {
            type: 'text',
            content:
              'O INSS costuma classificar o TDAH como "apenas uma dificuldade de aprendizado". Na via judicial, o juiz nomeia um perito especializado que analisará o contexto social e funcional da criança de forma mais humanizada — as chances de êxito são consideravelmente maiores.',
          },
        ],
      },
    ],
  },
  {
    slug: 'bpc-cadunico-desatualizado',
    area: 'previdenciario',
    title: 'BPC Negado por "CadÚnico Desatualizado"? A Culpa Pode Ser da Demora do INSS',
    description:
      'Se o seu cadastro estava em dia no momento do pedido, o INSS não pode negar o benefício apenas porque ele "venceu" enquanto estava parado na mesa do analista.',
    sections: [
      {
        heading: 'A Lógica do Erro do INSS',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'A Regra', description: 'O CadÚnico deve estar atualizado há no máximo 2 anos na data de entrada do requerimento (DER).' },
              { title: 'O Erro do INSS', description: 'O INSS demora mais de 1 ano para analisar o pedido. Durante a espera, o CadÚnico "vence" — e o INSS usa isso para negar.' },
              { title: 'Por que é ilegal', description: 'A Lei Federal nº 9.784/99 estabelece prazos para a análise. O segurado não pode ser punido pela demora do próprio órgão público.' },
            ],
          },
        ],
      },
      {
        heading: 'O Direito ao Pagamento Retroativo (DER)',
        blocks: [
          {
            type: 'text',
            content:
              'Quando a justiça reconhece que o erro foi do INSS, o cidadão tem direito ao benefício desde a Data de Entrada do Requerimento — recebendo todos os valores acumulados desde o primeiro pedido, não apenas a partir da decisão judicial.',
          },
        ],
      },
      {
        heading: 'O que fazer se o pedido foi indeferido?',
        blocks: [
          {
            type: 'ordered-list',
            items: [
              'Verificar a data da sua última atualização no CRAS antes do pedido administrativo.',
              'Comprovar que, no momento do protocolo, os dados estavam ativos e dentro do prazo de 2 anos.',
              'Buscar auxílio jurídico para contestar a negativa, fundamentando que os critérios legais já estavam preenchidos na época do requerimento.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'bpc-negado-por-documentos-ou-notificacao',
    area: 'previdenciario',
    title: 'BPC Negado por Erro do INSS? Entenda como Reverter Negativas Absurdas',
    description:
      'Muitas vezes, o motivo do "não" do INSS não é a falta de direito ao benefício, mas uma falha na própria condução do processo administrativo.',
    sections: [
      {
        heading: 'Dois Erros Comuns que Tornam a Negativa Ilegal',
        blocks: [
          {
            type: 'comparison-table',
            headers: ['Exigência de Documentos Desnecessários', 'A "Carta que Nunca Chegou"'],
            rows: [
              { label: 'O que acontece', values: ['O INSS exige a Carteira de Trabalho (CTPS) de quem sequer a possui', 'O benefício é negado por "não cumprimento de exigência" que o cidadão nunca soube'] },
              { label: 'Por que é ilegal', values: ['O próprio INSS pode consultar os dados no CNIS — exigir prova que o governo já tem é barreira burocrática ilegal', 'O Aviso de Recebimento (AR) foi enviado para um endereço errado — sem notificação válida, não há punição'] },
              { label: 'O que fazer', values: ['Contestar a negativa demonstrando que o INSS pode obter a informação por conta própria', 'Provar que o AR foi entregue no endereço errado e requerer a desconsideração da exigência'] },
            ],
          },
        ],
      },
      {
        heading: 'O Direito ao Pagamento Retroativo (DER)',
        blocks: [
          {
            type: 'text',
            content:
              'Se a exigência imposta pelo INSS é ilegal ou impossível de ser cumprida, o indeferimento não deve prevalecer. Uma vez comprovado que o cidadão preenchia os critérios de renda e deficiência/idade na época do pedido, ele tem direito ao benefício desde a Data de Entrada do Requerimento — recebendo todos os valores acumulados desde o primeiro contato com o INSS.',
          },
        ],
      },
    ],
  },
  {
    slug: 'bpc-beneficio-familiar-renda',
    area: 'previdenciario',
    title: 'BPC: O Benefício de um Familiar Pode Impedir o Seu? Entenda o Erro do INSS',
    description:
      'Uma das situações mais comuns — e injustas — é ter o BPC negado porque o INSS somou, no cálculo da renda, o benefício que outro familiar já recebe. Isso é ilegal.',
    sections: [
      {
        heading: 'A Regra da Exclusão (Tema Repetitivo 640 do STJ)',
        blocks: [
          {
            type: 'text',
            content:
              'O STJ consolidou no Tema Repetitivo 640 que benefícios assistenciais já concedidos a outros membros do grupo familiar devem ser desconsiderados no cálculo da renda per capita para a concessão de um novo benefício.',
          },
          {
            type: 'simple-table',
            rows: [
              { title: 'O que o INSS faz (errado)', description: 'Soma o BPC de um irmão ou parente deficiente/idoso ao cálculo da renda per capita do requerente.' },
              { title: 'O que a lei determina', description: 'Benefícios assistenciais já concedidos na mesma família não contam como renda para fins de análise de um novo BPC.' },
              { title: 'O impacto prático', description: 'Quando a renda do familiar é corretamente excluída, o requerente frequentemente passa a ter renda per capita zero ou próxima a isso — configurando o direito imediato ao benefício.' },
            ],
          },
        ],
      },
      {
        heading: 'Direito ao Pagamento desde o Primeiro Pedido (DER)',
        blocks: [
          {
            type: 'text',
            content:
              'Se o pedido foi negado injustamente por esse erro de cálculo, o segurado tem direito a receber todos os valores retroativos acumulados desde que o erro foi cometido pela primeira vez administrativamente.',
          },
        ],
      },
    ],
  },
  {
    slug: 'auxilio-acidente',
    area: 'previdenciario',
    title: 'Auxílio-Acidente: A Indenização por Redução da Capacidade Laboral',
    description:
      'O Auxílio-Acidente é destinado ao segurado que ficou com sequelas permanentes após um acidente. O diferencial: você recebe o benefício e continua trabalhando normalmente.',
    sections: [
      {
        heading: 'Quem tem direito?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Qualidade de segurado', description: 'Estar contribuindo ou em período de graça no momento do acidente.' },
              { title: 'Ter sofrido um acidente', description: 'Pode ser acidente de trabalho, de trajeto ou qualquer acidente de qualquer natureza (queda em casa, acidente de lazer, batida de carro no fim de semana).' },
              { title: 'Redução da capacidade laboral', description: 'A sequela deve tornar o trabalho habitual mais difícil ou exigir maior esforço para ser executado.' },
              { title: 'Nexo causal', description: 'Provar que a redução da capacidade foi gerada especificamente por aquele acidente.' },
            ],
          },
        ],
      },
      {
        heading: 'A Diferença Crucial: Você pode trabalhar e receber',
        blocks: [
          {
            type: 'text',
            content: 'O Auxílio-Acidente não substitui o salário — ele funciona como um "plus" financeiro:',
          },
          {
            type: 'list',
            items: [
              'O benefício começa a ser pago no dia seguinte à cessação do auxílio-doença.',
              'O trabalhador pode ser registrado normalmente em qualquer empresa.',
              'O valor corresponde a 50% do salário de benefício.',
              'O benefício é pago até a véspera da aposentadoria ou do óbito do segurado.',
            ],
          },
        ],
      },
      {
        heading: 'Por que o INSS raramente concede automaticamente?',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              { title: 'Negativa por "Sequela Mínima"', description: 'O STJ (Tema 416) decidiu que qualquer redução, independentemente do grau, gera direito ao benefício.' },
              { title: 'Falta de Documentação Estratégica', description: 'Não basta um raio-x. É preciso um laudo que descreva como a lesão atrapalha especificamente a função que o trabalhador exerce.' },
              { title: 'Perda de Valores Retroativos', description: 'Muitas vezes o segurado tem direito a receber os valores atrasados desde que o auxílio-doença foi cortado, mas não sabe como pleitear.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'auxilio-acidente-10-motivos',
    area: 'previdenciario',
    title: 'Você pode ter direito a uma indenização mensal do INSS sem saber',
    description:
      'Muitos trabalhadores retornam às atividades após um acidente sem perceber que possuem sequelas permanentes que garantem o Auxílio-Acidente. Conheça as principais teses jurídicas.',
    sections: [
      {
        heading: 'Principais Teses para Reverter a Negativa do INSS',
        blocks: [
          {
            type: 'simple-table',
            rows: [
              {
                title: '1. Concessão Automática (Tema 862 do STJ)',
                description: 'O INSS tem o dever de analisar o auxílio-acidente "de ofício" ao encerrar o auxílio-doença. A falha nessa análise permite buscar a concessão judicial com pagamento retroativo.',
              },
              {
                title: '2. Sequela Mínima (Tema 416 do STJ)',
                description: 'Não importa o grau da redução. Qualquer limitação permanente decorrente de acidente gera direito ao benefício — o INSS não pode exigir sequela "grave".',
              },
              {
                title: '3. Período de Graça',
                description: 'O trabalhador desempregado mantém os direitos previdenciários durante o "período de graça". O desemprego involuntário pode estender esse período por mais 12 meses.',
              },
              {
                title: '4. Nexo Causal por Provas Externas',
                description: 'A perícia do INSS não é absoluta. Laudos de especialistas, exames de imagem e relatórios de fisioterapia externos podem comprovar o nexo que o INSS negou.',
              },
              {
                title: '5. Pedidos Subsidiários',
                description: 'Requerer o auxílio-acidente subsidiariamente ao auxílio por incapacidade total garante que o juiz analise ao menos a redução permanente da capacidade.',
              },
              {
                title: '6. Moléstia Reversível',
                description: 'A possibilidade de reversão da moléstia é irrelevante para a concessão do auxílio-acidente. O que importa é a redução da capacidade no momento da consolidação das lesões.',
              },
              {
                title: '7. Cumulação por Fatos Distintos',
                description: 'Se o auxílio-acidente e o novo auxílio-doença decorrem de fatos distintos (acidente antigo + doença nova sem relação), a jurisprudência dos TRFs admite a acumulação simultânea.',
              },
              {
                title: '8. Histórico de Direito Adquirido',
                description: 'Para quem o fato gerador do auxílio-acidente e a aposentadoria ocorreram antes da vedação legal à cumulação, o direito adquirido pode autorizar o recebimento simultâneo.',
              },
            ],
          },
        ],
      },
    ],
  },
];
