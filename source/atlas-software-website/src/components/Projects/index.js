import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rpg Manager',
    image: require('@site/static/img/rpg-manager-card.png').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Urano',
    image: require('@site/static/img/docusaurus.png').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
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
