import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crie e Compartilhe Suas Aventuras Épicas',
    image: require('@site/static/img/logo.png').default,
    description: (
      <>
        Com nosso aplicativo, você pode criar e gerenciar personagens incríveis, 
        desde seus detalhes até suas habilidades e imagens. Compartilhe seus personagens 
        com amigos e na web, criando perfis únicos e definindo suas histórias e conexões 
        no universo do jogo.
      </>
    ),
  },
  {
    title: 'Domine suas Campanhas',
    image: require('@site/static/img/logo.png').default,
    description: (
      <>
        Escreva e detalhe suas campanhas com facilidade, convidando amigos para se juntarem à diversão. 
        Defina arcos narrativos, planeje sessões emocionantes e estabeleça tanto os aspectos públicos quanto os 
        internos da história.
      </>
    ),
  },
  {
    title: 'Controle Total da Sessão',
    image: require('@site/static/img/logo.png').default,
    description: (
      <>
        Agende sessões com notificações para manter todos os jogadores informados. Prepare cenários envolventes, 
        inicie batalhas emocionantes e monitore o status de cada personagem durante a sessão para uma experiência 
        de jogo imersiva.
      </>
    ),
  },
  {
    title: 'Personalize Seu Equipamento',
    image: require('@site/static/img/logo.png').default,
    description: (
      <>
        Crie e gerencie itens, armas e consumíveis para enriquecer sua aventura. Importe itens da nossa extensa 
        galeria ou crie seus próprios equipamentos personalizados para uma experiência de jogo verdadeiramente única.

      </>
    ),
  },
  {
    title: 'Powered by React',
    image: require('@site/static/img/logo.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    image: require('@site/static/img/logo.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className="col col--6">
      <div className="row">
    <div className={clsx('col col--2')}>
      <div className="text--center">
        <img src={image} />
      </div>
    </div>
    <div className={clsx('col col--10')}>
    <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default function RpgManagerFeatures() {
  return (
    
    <section className={styles.features}>
      <div className="container">
        <Heading as="h3">Mais funções</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
