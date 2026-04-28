import type { Article } from '../types/content';

export const previdenciarioArticles: Article[] = [
  {
    slug: 'bpc-loas',
    area: 'previdenciario',
    title: 'BPC-LOAS: O Que É e Quem Tem Direito a Este Benefício?',
    description:
      'O BPC é um direito garantido pela Constituição Federal que assegura o pagamento mensal de um salário-mínimo a pessoas sem condições de se sustentar. Não é necessário ter contribuído para o INSS.',
    sections: [
      {
        heading: 'Quem Pode Receber o BPC?',
        body: 'O benefício é destinado a dois grupos específicos:\n\n1. Idosos: pessoas com 65 anos ou mais.\n2. Pessoas com Deficiência (PcD): de qualquer idade, desde que apresentem impedimentos de longo prazo (mínimo de 2 anos) de natureza física, mental, intelectual ou sensorial que dificultem sua participação plena na sociedade.',
      },
      {
        heading: 'Os Requisitos Obrigatórios',
        body: 'Para ter o pedido aprovado, o requerente deve preencher critérios rigorosos:\n\n• Renda Familiar: a renda por pessoa do grupo familiar deve ser, em regra, inferior a 1/4 do salário-mínimo. Atualmente, a justiça brasileira permite uma análise mais flexível, considerando gastos com medicamentos, fraldas e tratamentos que comprovem a situação de miserabilidade.\n• CadÚnico: é obrigatório que o beneficiário e sua família estejam inscritos e com os dados atualizados no Cadastro Único. Sem isso, o pedido é negado automaticamente.\n• Avaliação Pericial (para PcD): o requerente passará por perícia médica e avaliação social realizada por assistentes sociais do INSS.',
      },
      {
        heading: 'O Que o BPC NÃO Garante?',
        body: 'É fundamental compreender as limitações deste direito:\n\n• Não paga 13º salário: por ser assistencial, não há gratificação natalina.\n• Não deixa Pensão por Morte: caso o beneficiário faleça, o benefício é extinto e não é transferido aos dependentes.\n• Não permite acumulação: não é possível receber o BPC junto com outro benefício previdenciário como aposentadoria ou pensão.',
      },
      {
        heading: 'Os Riscos de um Pedido Mal Elaborado',
        body: 'Muitos cidadãos tentam solicitar o benefício sozinhos e enfrentam o indeferimento por erros evitáveis:\n\n• CadÚnico Desatualizado: informações conflitantes no cadastro da prefeitura e no sistema do INSS.\n• Falta de Laudos Médicos: documentação incompleta ou que não descreve adequadamente a barreira imposta pela deficiência.\n• Cálculo Errado da Renda: deixar de excluir rendas que, por lei, não deveriam entrar na conta (como o BPC de outro idoso da casa).',
      },
      {
        heading: 'A Importância da Assessoria Jurídica',
        body: 'A atuação de um advogado especialista é decisiva, especialmente quando o INSS nega o pedido administrativamente. O advogado poderá:\n\n1. Corrigir o Cadastro: orientar a retificação de dados no CRAS/CadÚnico.\n2. Ação Judicial: buscar na Justiça a flexibilização do critério de renda e a realização de novas perícias, onde as chances de êxito costumam ser maiores.\n3. Provar a Vulnerabilidade: demonstrar que, embora a renda ultrapasse levemente o limite, a família vive em situação de risco social.',
      },
    ],
  },
  {
    slug: 'bpc-autismo',
    area: 'previdenciario',
    title: 'BPC-LOAS e Autismo: O Direito ao Benefício Além do Limite de Renda',
    description:
      'A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais (Lei nº 12.764/12). O limite de renda de 1/4 do salário-mínimo não é absoluto — entenda como.',
    sections: [
      {
        heading: 'O Autismo como Deficiência Legal',
        body: 'Para fins de concessão do BPC, o autismo é enquadrado como uma deficiência que gera impedimentos de longo prazo de natureza física, mental, intelectual ou sensorial. O benefício visa compensar as barreiras que impedem a participação plena da pessoa na sociedade em igualdade de condições.',
      },
      {
        heading: 'A Flexibilização da Renda: O Fim do "Mito dos 25%"',
        body: 'O critério de 1/4 do salário-mínimo por pessoa do grupo familiar é apenas um parâmetro inicial. O Judiciário brasileiro consolidou o entendimento de que a miserabilidade deve ser analisada caso a caso.\n\nÉ possível obter o benefício mesmo com renda superior através de dois caminhos:\n\nA. Dedução de Gastos Obrigatórios: a lei permite descontar da renda familiar todos os valores gastos com a criança que não são supridos pelo Estado. Isso inclui:\n• Terapias Especializadas: Fonoaudiologia, Terapia Ocupacional, Psicologia (Método ABA, Denver, etc.);\n• Medicamentos de uso contínuo;\n• Fraldas descartáveis e alimentação especial;\n• Consultas e exames frequentes.\n\nB. Critério de 1/2 Salário-Mínimo (Lei nº 14.176/21): o limite pode ser ampliado dependendo do grau de deficiência e do comprometimento do orçamento familiar.',
      },
      {
        heading: 'Por que o INSS costuma negar (e por que recorrer)?',
        body: 'O INSS utiliza um sistema automatizado que raramente considera as particularidades e as despesas reais de uma família com autista. A negativa administrativa é comum, mas abre as portas para a Ação Judicial, onde as chances de êxito são consideravelmente maiores.\n\nNa justiça, o juiz nomeará um Assistente Social para visitar a residência e realizar um estudo social. Este profissional não olhará apenas para o contracheque, mas para a realidade da casa: o esforço dos pais, a renúncia de renda de um dos genitores para cuidar do filho e o alto custo da vida com autismo.',
      },
      {
        heading: 'O Papel da Assessoria Especializada',
        body: 'A condução por um advogado especialista garante que:\n\n1. Os Laudos Médicos estejam adequados às exigências legais.\n2. A Planilha de Gastos seja apresentada com notas fiscais e comprovantes que permitam a dedução da renda.\n3. O CadÚnico esteja corretamente preenchido para evitar conflitos de dados.',
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
        heading: 'TDAH é considerado deficiência para o BPC?',
        body: 'Para fins de concessão do BPC, o conceito de deficiência não se limita à aparência física. Segundo a LOAS, considera-se pessoa com deficiência aquela que tem impedimentos de longo prazo (mínimo de 2 anos) de natureza física, mental, intelectual ou sensorial.\n\nNo caso do TDAH, o benefício é concedido quando o transtorno causa um compromisso severo no desempenho escolar e social. O foco do INSS e da Justiça não é o nome da doença, mas sim o grau de limitação que ela impõe à criança em comparação com outras da mesma idade.',
      },
      {
        heading: 'Os Requisitos para a Concessão',
        body: 'Para que a criança com TDAH receba o benefício, é necessário preencher dois requisitos principais:\n\n• Impedimento de Longo Prazo: comprovação, através de laudos médicos e relatórios escolares, de que o TDAH gera barreiras reais na aprendizagem, na interação social e na autonomia.\n• Miserabilidade (Critério Econômico): a renda por pessoa do grupo familiar deve ser, em regra, inferior a 1/4 do salário-mínimo.',
      },
      {
        heading: 'A Flexibilização da Renda (Acima do Limite)',
        body: 'Assim como ocorre nos casos de autismo, o limite de renda pode ser flexibilizado. Se a família ganha um pouco acima do teto, mas possui gastos elevados com o tratamento da criança, o advogado pode pleitear a dedução dessas despesas do cálculo da renda:\n\n• Medicamentos contínuos;\n• Terapias (Psicopedagogia, Psicologia, Neuropediatria);\n• Alimentação especial ou gastos extras com transporte para tratamentos.',
      },
      {
        heading: 'A Importância das Provas Escolares e Médicas',
        body: 'O TDAH exige uma prova documental muito específica. Para aumentar as chances de aprovação, é essencial apresentar:\n\n1. Laudo Médico Detalhado: indicando o CID e descrevendo as limitações intelectuais e comportamentais.\n2. Relatório da Escola: documento da coordenação pedagógica relatando as dificuldades de aprendizado, necessidade de mediador ou atraso no desenvolvimento em relação aos colegas.\n3. Histórico de Tratamentos: comprovantes de que a criança realiza ou precisa realizar terapias multidisciplinares.',
      },
      {
        heading: 'Por que a Negativa do INSS é Comum?',
        body: 'O INSS costuma ser muito rígido na análise do TDAH, muitas vezes classificando-o como "apenas uma dificuldade de aprendizado". No entanto, na via judicial, o juiz nomeia um perito especializado que analisará o contexto social e funcional da criança de forma mais humanizada, onde as chances de êxito são consideravelmente maiores.',
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
        heading: 'A Regra da Atualização do CadÚnico',
        body: 'Para ter direito ao BPC, a lei exige que o beneficiário esteja inscrito no Cadastro Único e que seus dados tenham sido atualizados em um período não superior a 2 anos. Se, na data em que você deu entrada no pedido (DER), sua última atualização tinha menos de dois anos, você cumpriu rigorosamente a exigência legal.',
      },
      {
        heading: 'A Ilegalidade da Demora na Análise',
        body: 'É comum que o INSS demore mais de um ano para analisar um requerimento. Se durante esse período de espera o seu CadÚnico ultrapassar o prazo de dois anos, a autarquia não pode transferir para você o ônus dessa demora.\n\n• Se o INSS tivesse analisado o pedido dentro dos prazos estabelecidos pela Lei Federal nº 9.784/99, o cadastro ainda estaria válido.\n• O segurado não pode ser punido pela "ilegal demora" do órgão público em cumprir seus deveres.',
      },
      {
        heading: 'O Direito ao Pagamento Retroativo',
        body: 'Quando a justiça reconhece que o erro foi do INSS, o cidadão passa a ter direito ao benefício desde a Data da Entrada do Requerimento (DER). Isso significa que você deve receber todos os valores acumulados desde o mês em que fez o primeiro pedido, e não apenas a partir da decisão judicial.',
      },
      {
        heading: 'O Que Fazer se o Seu Pedido Foi Indeferido?',
        body: 'Se o motivo do seu indeferimento foi a suposta desatualização do CadÚnico, é fundamental:\n\n• Verificar a data da sua última atualização no CRAS antes do pedido administrativo.\n• Comprovar que, no momento do protocolo, os dados estavam ativos e dentro do prazo de 2 anos.\n• Buscar auxílio jurídico para contestar a negativa, fundamentando que o preenchimento dos critérios legais já ocorria na época do requerimento.',
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
        heading: 'Exigência de Documentos Inexistentes ou Desnecessários',
        body: 'É comum o INSS indeferir o pedido alegando que o segurado deixou de entregar a Carteira de Trabalho (CTPS). No entanto, em muitos casos, o requerente sequer possui esse documento.\n\nAlém disso, mesmo que o segurado possua a carteira, o próprio INSS tem a possibilidade de consultar os dados diretamente no CNIS (Cadastro Nacional de Informações Sociais), sistema que o próprio órgão gerencia. Exigir do cidadão uma prova que o governo já possui é uma barreira burocrática ilegal.',
      },
      {
        heading: 'A "Carta que Nunca Chegou": Falha na Notificação',
        body: 'Outro erro grave ocorre quando o benefício é negado porque o segurado supostamente "não cumpriu uma exigência" dentro do prazo. O problema é que, frequentemente, o cidadão jamais foi notificado.\n\nEm diversos processos, nota-se que o Aviso de Recebimento (AR) das correspondências do INSS foi enviado para um endereço que não corresponde ao do autor. Se o órgão envia a notificação para o local errado, ele não pode punir o segurado pela falta de resposta.',
      },
      {
        heading: 'O Direito ao Pagamento Retroativo (DER)',
        body: 'Se a exigência imposta pelo INSS é ilegal ou impossível de ser cumprida, o indeferimento não deve prevalecer. Uma vez comprovado que o cidadão preenchia os critérios de renda e deficiência/idade na época do pedido, ele faz jus ao recebimento do benefício desde a Data de Entrada do Requerimento (DER).\n\nIsso significa que o segurado deve receber todos os valores acumulados desde o dia em que pisou no INSS pela primeira vez para solicitar o auxílio.',
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
        heading: 'A Regra da Exclusão: O BPC não é renda para outro BPC',
        body: 'O INSS frequentemente comete o equívoco de incluir no cálculo da renda per capita o valor do salário-mínimo recebido por um irmão ou parente que também possui deficiência ou é idoso. Contudo, esse valor não deve ser contabilizado para fins de análise de um novo pedido de BPC dentro da mesma família.',
      },
      {
        heading: 'O Entendimento do STJ (Tema Repetitivo 640)',
        body: 'O erro do INSS em somar esses valores conflita diretamente com a tese firmada pelo Superior Tribunal de Justiça (STJ) no Tema Repetitivo 640. A justiça brasileira consolidou o entendimento de que benefícios assistenciais já concedidos a outros membros do grupo familiar devem ser desconsiderados no cálculo da renda per capita para a concessão de um novo benefício.',
      },
      {
        heading: 'O Impacto no Cálculo da Renda',
        body: 'Quando a renda do familiar é corretamente excluída, muitas vezes o requerente passa a ter uma renda per capita de zero ou muito próxima a isso, o que demonstra a total ausência de meios para a própria subsistência. Esse cenário gera o direito imediato ao benefício assistencial, conforme estabelecido no Artigo 20 da Lei nº 8.742/93.',
      },
      {
        heading: 'Direito ao Pagamento desde o Primeiro Pedido (DER)',
        body: 'Se o seu pedido foi negado injustamente por esse erro de cálculo, você tem o direito de receber o benefício desde a Data de Entrada do Requerimento (DER). Isso significa que, ao reverter a negativa na justiça, o segurado deve receber todos os valores retroativos acumulados desde que o erro foi cometido pela primeira vez administrativamente.',
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
        heading: 'O que é o Auxílio-Acidente?',
        body: 'Diferente do auxílio-doença, o Auxílio-Acidente não substitui o salário. Ele funciona como um "plus" financeiro: o segurado recebe o benefício e continua trabalhando normalmente, recebendo seu salário da empresa cumulado com o valor do INSS.\n\nO valor corresponde a 50% do salário de benefício.',
      },
      {
        heading: 'Quem tem direito?',
        body: 'Para receber o auxílio-acidente, é necessário preencher quatro requisitos fundamentais:\n\n• Qualidade de segurado: estar contribuindo ou em período de graça no momento do acidente.\n• Ter sofrido um acidente: pode ser um acidente de trabalho, de trajeto ou qualquer acidente de qualquer natureza (ex: queda em casa, acidente de lazer, batida de carro no fim de semana).\n• Redução da capacidade laboral: a sequela deve tornar o trabalho habitual mais difícil ou exigir maior esforço para ser executado.\n• Nexo causal: provar que a redução da capacidade foi gerada especificamente por aquele acidente.',
      },
      {
        heading: 'O INSS raramente concede automaticamente',
        body: 'Os riscos de tentar o processo sem condução técnica incluem:\n\n• Negativa por "Sequela Mínima": o INSS costuma negar o benefício alegando que a redução foi mínima. No entanto, o STJ (Tema Repetitivo 416) já decidiu que, havendo qualquer redução, o benefício é devido, independentemente do grau.\n• Falta de Documentação Médica Estratégica: não basta ter um raio-x; é preciso um laudo que descreva como aquela lesão atrapalha a função exata que o trabalhador exerce.\n• Perda de Valores Retroativos: muitas vezes o segurado tem direito a receber os valores atrasados desde que o seu antigo auxílio-doença foi cortado, mas não sabe como pleitear esse retroativo.',
      },
      {
        heading: 'Por que a condução por um advogado é essencial?',
        body: 'O papel do advogado é garantir que a perícia médica seja realizada com foco na realidade funcional do trabalhador:\n\n1. Análise de Viabilidade: verificar se a sequela realmente se enquadra nos critérios da Lei 8.213/91.\n2. Impugnação de Perícias Falhas: se o perito do INSS não avaliar corretamente o impacto da lesão no dia a dia do trabalho, o advogado entra com as medidas judiciais para garantir uma nova perícia especializada.\n3. Cálculo de Atrasados: garantir que o segurado receba tudo o que deixou de ganhar desde que a sequela foi consolidada.',
      },
    ],
  },
  {
    slug: 'auxilio-acidente-10-motivos',
    area: 'previdenciario',
    title: 'Você pode ter direito a uma indenização mensal do INSS sem saber',
    description:
      'Muitos trabalhadores retornam às suas atividades após um acidente sem perceber que possuem sequelas permanentes que garantem o Auxílio-Acidente. Conheça as 10 principais teses jurídicas.',
    sections: [
      {
        heading: 'O Dever do INSS em Conceder o Auxílio-Acidente Automaticamente',
        body: 'Segundo o Tema 862 do STJ, o INSS tem o dever de analisar a concessão do auxílio-acidente "de ofício" (automaticamente) assim que encerra o benefício por incapacidade, desde que os requisitos estejam presentes no processo administrativo. Caso o órgão tenha falhado nessa análise, é possível buscar a concessão judicial com o pagamento de todos os valores retroativos.',
      },
      {
        heading: 'Sequela Mínima Também Gera Direito ao Benefício',
        body: 'O INSS nega o auxílio-acidente por considerar que a redução da capacidade foi "mínima". Contudo, o Tema 416 do STJ consolidou o entendimento de que não importa o grau da redução: se houver qualquer limitação permanente decorrente de acidente, o benefício deve ser concedido. O foco não é a gravidade da lesão, mas o fato de o trabalho agora exigir um esforço maior do que antes.',
      },
      {
        heading: 'O Direito ao Benefício Mesmo em Período de Desemprego (Período de Graça)',
        body: 'O INSS frequentemente alega falta da "qualidade de segurado" para negar o benefício a quem sofreu um acidente enquanto estava desempregado. No entanto, existe o chamado "período de graça", onde o trabalhador mantém seus direitos previdenciários mesmo sem contribuir. Situações de desemprego involuntário podem estender esse período por mais 12 meses.',
      },
      {
        heading: 'Estabelecendo o Nexo Causal: O Elo Entre o Acidente e a Lesão',
        body: 'Um dos maiores motivos de indeferimento é o não reconhecimento do nexo causal entre o acidente e a atividade laboral. Provar que a lesão atual é consequência direta do evento acidentário exige uma combinação de provas documentais robustas e uma perícia técnica detalhada que conecte o fato ocorrido com a redução da capacidade de trabalho apresentada hoje.',
      },
      {
        heading: 'Estratégia de Defesa: Pedidos Subsidiários e Cumulativos',
        body: 'Em casos de dúvida sobre a gravidade da lesão, a melhor estratégia jurídica é priorizar o pedido de benefício por incapacidade temporária e, subsidiariamente, requerer o auxílio-acidente. Isso garante que, se a incapacidade total não for reconhecida, o juiz ainda possa analisar se houve ao menos uma redução permanente da capacidade que dê direito à indenização mensal.',
      },
      {
        heading: 'Cumulação de Benefícios por Fatos Distintos',
        body: 'O INSS por vezes interrompe o pagamento do auxílio-acidente ao conceder um novo auxílio-doença, alegando que eles não podem ser acumulados. No entanto, se os fatos que geraram os benefícios forem distintos — por exemplo, um acidente antigo e uma doença nova sem relação entre si —, a jurisprudência dos Tribunais Regionais Federais (TRFs) admite que ambos sejam mantidos simultaneamente.',
      },
      {
        heading: 'Moléstia Reversível Também Pode Gerar Auxílio-Acidente',
        body: 'O INSS costuma negar o benefício alegando que a lesão do segurado pode ser revertida com o tempo. Todavia, a jurisprudência do STJ entende que a possibilidade de reversão da moléstia é irrelevante para a concessão do auxílio-acidente. O que importa é se, no momento da consolidação das lesões, existe uma redução da capacidade que demande maior esforço do trabalhador.',
      },
      {
        heading: 'Negativa por Ausência de Redução da Capacidade? Busque Provas Externas',
        body: 'É comum o INSS indeferir o pedido alegando que não houve redução da capacidade laboral. No entanto, a perícia do órgão não é absoluta. A estratégia jurídica eficaz para esses casos envolve a apresentação de documentos médicos externos — laudos de especialistas, exames de imagem e relatórios de fisioterapia — que comprovem detalhadamente como a sequela dificulta o exercício da sua profissão habitual.',
      },
    ],
  },
];
