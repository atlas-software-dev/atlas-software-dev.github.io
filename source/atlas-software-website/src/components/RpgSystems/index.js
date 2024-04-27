import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rpg Manager',
    image: require('@site/static/img/aburei-card.jpg').default,
  },
  {
    title: 'Android Atlas',
    image: require('@site/static/img/ordem-card.jpg').default,
  },
  {
    title: 'Urano',
    image: require('@site/static/img/d&d-card.jpg').default,
  },
];

function SystemCard({image, title, description}) {
  return (
    <div className={clsx('card card__image')}>
      <img src={image} />
    </div>
  );
}

export default function Systems() {
  return (
    <section>
      <div className="container">
        <div className={styles.projects}>
        <Heading as="h3">Sistemas com previsão de suporte</Heading>
        <div className="row alogn-center">
          {FeatureList.map((props, idx) => (
            <div className="col col--2">
                <SystemCard key={idx} {...props} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
