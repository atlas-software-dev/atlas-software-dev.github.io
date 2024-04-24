import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rpg Manager',
    image: require('@site/static/img/rpg-manager-card.png').default,
    description: (
      <>
        Crie, gerencie e jogue a sua campanha de RPG com seus amigos de forma interativa no celular.
      </>
    ),
  },
  {
    title: 'Android Atlas',
    image: require('@site/static/img/android-atlas-card.png').default,
    description: (
      <>
        Módulo android open-source para acelerar o desenvolvimento de aplicações android profissionais.
      </>
    ),
  },
  {
    title: 'Urano',
    image: require('@site/static/img/urano-card.png').default,
    description: (
      <>
        Plataforma de ensino evolutivo e inovativo para aprender tudo de forma rapida e inteligente.
      </>
    ),
  },
];

function Project({image, title, description}) {
  return (
    <div className={clsx('card')}>
      <div className="card__image">
        <img src={image} />
      </div>
      <div className="card__body">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <button class="button button--primary button--block disabled">em breve</button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section>
      <div className="container">
        <div className={styles.projects}>
        <Heading as="h3">Projetos</Heading>
        <div className="row alogn-center">
          {FeatureList.map((props, idx) => (
            <div className="col col--3">
                <Project key={idx} {...props} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
