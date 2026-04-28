import { CTAButton } from '@/components/CTAButton';
import Table from '@/components/Table';

export default function ExecucaoFiscal() {
  const execTable = [
    {
      title: 'Tributários',
      description:
        'Como o não pagamento de ICMS, IPTU, IPVA, ISS, IRPJ, entre outros.',
    },
    {
      title: 'Não Tributários',
      description:
        'Multas ambientais, multas de trânsito, multas administrativas ou contratuais.',
    },
  ];

  const execRiskTable = [
    {
      title: 'Bloqueio de Contas Bancárias (SISBAJUD)',
      description:
        'O sistema permite o rastreio e bloqueio imediato de valores em contas corrente, poupança e investimentos.',
    },
    {
      title: 'Penhora de Bens',
      description:
        'Veículos (via RENAJUD), imóveis e até faturamento da empresa podem ser penhorados para garantir o pagamento da dívida.',
    },
    {
      title: 'Inscrição em Cadastros de Inadimplentes',
      description:
        'O nome do devedor pode ser incluído no CADIN (Cadastro Informativo de Créditos não Quitados do Setor Público) e em órgãos de proteção ao crédito como Serasa e SPC.',
    },
    {
      title: 'Responsabilidade dos Sócios',
      description:
        'Em determinados casos de dissolução irregular da empresa ou infração à lei, o redirecionamento da execução pode atingir o patrimônio pessoal dos sócios e administradores (Art. 135 do CTN).',
    },
  ];
  return (
    <section>
      <div>
        <h1>
          Execução Fiscal: Entenda o que é e quais os riscos de ignorar esta
          ação
        </h1>
        <h2>
          Muitos empresários e pessoas físicas são surpreendidos pela chegada de
          uma citação judicial informando sobre uma Execução Fiscal. Por se
          tratar de um processo movido pelo Estado (União, Estados ou
          Municípios), ele possui ritos próprios e prazos muito mais curtos do
          que as ações cíveis comuns.
        </h2>
        <h3>
          Abaixo, explicamos os pontos essenciais que você precisa saber para
          proteger seu patrimônio e seus direitos.
        </h3>
      </div>
      <div>
        <h1>O que é a Execução Fiscal?</h1>
        <h2>
          A execução fiscal é o procedimento judicial que a Fazenda Pública
          utiliza para cobrar créditos devidos ao erário. Esses créditos podem
          ser:
        </h2>
        <Table types={execTable} />
        <h3>
          O processo é fundamentado na Certidão de Dívida Ativa (CDA). Este
          documento goza de presunção de certeza e liquidez, o que significa que
          o Estado não precisa provar a dívida novamente no início da ação; cabe
          ao devedor apresentar sua defesa para contestar os valores ou a
          legalidade da cobrança.
        </h3>
      </div>
      <div>
        <h1>O Prazo Crítico: 5 Dias</h1>
        <h2>
          Ao ser citado em uma execução fiscal, o executado tem o prazo de
          apenas 5 (cinco) dias para:
        </h2>
        <ol>
          <li>
            Efetuar o pagamento integral do débito (acrescido de juros, correção
            monetária e honorários);
          </li>
          <li>
            Garantir a execução mediante depósito em dinheiro, fiança bancária,
            seguro garantia ou indicação de bens à penhora.
          </li>
        </ol>
        <h3>
          Atenção: Se nada for feito nesse curto período, o juiz poderá
          determinar imediatamente o bloqueio de valores e bens.
        </h3>
      </div>
      <div>
        <h1>Os Riscos de Ignorar a Execução Fiscal</h1>
        <h2>
          O silêncio ou a inércia diante de uma execução fiscal pode gerar
          consequências severas e, muitas vezes, irreversíveis ao patrimônio:
        </h2>
        <Table types={execRiskTable} />
      </div>
      <div>
        <h1>A Importância da Defesa Técnica</h1>
        <h2>
          Diferente do que muitos acreditam, a Execução Fiscal nem sempre é
          absoluta. Existem diversas teses jurídicas que podem ser arguidas por
          um especialista, tais como:
        </h2>
        <ul>
          <li>
            Prescrição e Decadência: Quando o Estado perde o prazo legal para
            cobrar a dívida.
          </li>
          <li>
            Nulidade da CDA: Erros formais no título que embasa a execução.
          </li>
          <li>
            Excesso de Execução: Cobrança de valores maiores do que os devidos
            ou aplicação de juros abusivos.
          </li>
          <li>
            Impenhorabilidade: Proteção de bens indispensáveis, como o bem de
            família ou ferramentas de trabalho.
          </li>
        </ul>
        <h3>
          As defesas mais comuns são os Embargos à Execução e a Exceção de Pré-
          Executividade, cada uma com requisitos específicos que exigem análise
          técnica criteriosa.
        </h3>
      </div>
      <footer>
        <h4>
          Fugir da Execução Fiscal muito provavelmente é a pior das opções. A
          melhor delas é procurar um advogado de sua confiança para que atue
          estrategicamente na sua defesa, mitigando danos e buscando soluções
          eficazes.
        </h4>
      </footer>
      <CTAButton type="default" content="Fale com um Advogado" msn="" />
    </section>
  );
}
