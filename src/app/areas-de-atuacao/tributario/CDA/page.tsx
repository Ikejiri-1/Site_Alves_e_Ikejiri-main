import Table from '@/components/Table';
import styles from './CDA.module.css';
import { CTAButton } from '@/components/CTAButton';

export default function CDA() {
  const tributarioTable = [
    {
      title: 'Tributários',
      description: 'Impostos, taxas e contribuições de melhoria.',
    },
    {
      title: 'Não Tributários',
      description: 'Multas e outros valores devidos ao ente público.',
    },
  ];
  const riskTable = [
    {
      title: 'Execução Fiscal',
      description:
        'Ajuizamento de ação judicial para penhora e expropriação de bens.',
    },
    {
      title: 'Bloqueio de Certidões',
      description:
        'Impedimento de obter a Certidão Negativa de Débitos (CND), inviabilizando licitações e financiamentos.',
    },
    {
      title: 'Inscrição no CADIN',
      description:
        'Restrição de crédito junto a instituições financeiras e proibição de contratos públicos.',
    },
    {
      title: 'Medidas Cautelares',
      description:
        'Possibilidade de pedido de indisponibilidade de bens antes mesmo do início da execução.',
    },
    {
      title: 'Interrupção da Prescrição',
      description:
        'A inscrição pode interromper a contagem do prazo que o Estado tem para cobrar a dívida.',
    },
  ];
  return (
    <section className={styles.CDAsection}>
      <div>
        <h1>Inscrição em Dívida Ativa: O Que Você Precisa Saber</h1>
        <p>
          A inscrição em Dívida Ativa é uma etapa crucial do processo tributário
          que formaliza o crédito não pago pelo contribuinte e o transforma em
          um título executivo extrajudicial. Este procedimento é essencial para
          que o Estado (União, Estados ou Municípios) possa cobrar judicialmente
          os débitos e garantir a arrecadação de recursos.
        </p>
      </div>
      <div>
        <h1>O Que é a Dívida Ativa?</h1>
        <h2>
          Ela compreende os créditos do Estado que não foram pagos
          voluntariamente no prazo determinado. Esses créditos podem ser:
        </h2>
        <Table types={tributarioTable} />
      </div>
      <div>
        <p>
          A inscrição ocorre quando o contribuinte, após ser notificado do
          lançamento do crédito tributário (seja de ofício, por declaração ou
          homologação), não realiza o pagamento no prazo legal.
        </p>
      </div>
      <div>
        <h1>A Certidão de Dívida Ativa (CDA)</h1>
        <h2>
          A inscrição é formalizada através da Certidão de Dívida Ativa (CDA).
          Este documento é de extrema importância pois contém a identificação do
          devedor, o valor exato do débito, juros, multas e demais acréscimos
          legais.
        </h2>
        <h3>
          De acordo com o Código de Processo Civil (Art. 784, IX), a CDA possui
          força para dar início direto à execução fiscal. Isso significa que a
          Fazenda Pública não precisa comprovar novamente a existência da dívida
          em juízo para começar a cobrança forçada.
        </h3>
      </div>
      <div>
        <h1>Os Efeitos e Riscos da Inscrição</h1>
        <h2>
          Ignorar um débito inscrito em Dívida Ativa traz consequências severas
          que podem paralisar a atividade de uma empresa ou comprometer o
          patrimônio de uma pessoa física:
        </h2>
        <Table types={riskTable} />
      </div>
      <div>
        <h1>Prazos Importantes: Decadência vs. Prescrição</h1>
        <h2>
          É fundamental que o contribuinte compreenda a diferença entre esses
          dois prazos legais:
        </h2>
        <ul>
          <li>
            Decadência: É o prazo de 5 anos que o Estado tem para constituir o
            crédito tributário (contados do fato gerador). Se não o fizer, perde
            o direito de cobrar.
          </li>
          <li>
            Prescrição: É o prazo de 5 anos para a Fazenda Pública cobrar
            judicialmente o crédito já constituído. A inscrição em Dívida Ativa
            atua como um marco que interrompe esse prazo, permitindo que o
            Estado ajuíze a execução fiscal.
          </li>
        </ul>
      </div>
      <div>
        <h1>Como se Defender?</h1>
        <h2>
          Apesar do poder de cobrança do Estado, o contribuinte possui garantias
          legais de defesa em todas as fases. As principais ferramentas são:
        </h2>
        <ol>
          <li>
            Embargos à Execução: Contestação da validade da CDA, alegando erros,
            prescrição ou decadência.
          </li>
          <li>
            Exceção de Pré-Executividade: Permite questionar vícios formais
            (como falta de notificação) sem a necessidade de garantir o juízo
            com bens.
          </li>
          <li>
            Ações Anulatórias: Discussão judicial da dívida, muitas vezes
            acompanhada do depósito integral do valor para suspender a cobrança.
          </li>
        </ol>
      </div>
      <footer>
        <p>
          A inscrição em Dívida Ativa marca a transição da cobrança
          administrativa para a esfera judicial, conferindo à Fazenda Pública um
          instrumento de alta eficácia: a Certidão de Dívida Ativa (CDA). Esse
          documento possui força de título executivo, permitindo que o Estado
          inicie medidas de expropriação de bens sem a necessidade de um
          processo de conhecimento prévio.
        </p>
        <CTAButton type="default" content="Fale com um Advogado" msn="" />
      </footer>
    </section>
  );
}
