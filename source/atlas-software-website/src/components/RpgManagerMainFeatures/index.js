import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Criação de Personagens',
    image: require('@site/static/img/personagens.png').default,
    description: (
      <>
        Crie, edite e gerencie a ficha do seu personagem, adicione imagens, habilidades, 
        compartilhe com seus amigos, defina a historia do seu personagem e defina as 
        ligacoes dele na história.
      </>
    ),
  },
  {
    title: 'Gerenciamento de Campanha',
    image: require('@site/static/img/campanha.png').default,
    description: (
      <>
        Escreva e detalhe suas campanhas com facilidade, convidando amigos para se juntarem à diversão. 
        Defina arcos narrativos, planeje sessões emocionantes e estabeleça tanto os aspectos públicos 
        quanto os internos da história.
      </>
    ),
  },
  {
    title: 'Gerenciamento de Sessão',
    image: require('@site/static/img/sessao.png').default,
    description: (
      <>
        Agende sessões com notificações para manter todos os jogadores informados. Prepare cenários envolventes, 
        inicie batalhas emocionantes e monitore o status de cada personagem durante a sessão para uma experiência 
        de jogo imersiva.
      </>
    ),
  }
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function RpgManagerMainFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h3">Funcionalidades</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
