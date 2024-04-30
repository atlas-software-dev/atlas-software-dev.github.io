import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Systems from '../../components/RpgSystems';
import RpgManagerMainFeatures from '../../components/RpgManagerMainFeatures';
import RpgManagerFeatures from '../../components/RpgManagerFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      
      <div className={styles.bannerImgBack}>
        <img src={require('@site/static/img/rpg-manager-head-back.jpg').default} />
      </div>
      <div className='container'>
        <div className="row">
          <div className={clsx('col col--8')}>
            <img className={styles.logoImg} src={require('@site/static/img/logo.png').default} />
            <h1>Revolucione o seu roleplay</h1>
            <h4>
              Descubra o Atlas RPG Manager: seu companheiro completo para organizar campanhas de RPG. 
              Crie histórias envolventes, crie personagens e convide seus amigos para as sessoes.
            </h4>
            <div className="card">
            <div className="card__body">
              <button class="button button--lg button--primary">Apoiar</button>
              </div>
            </div>
            <div className="card">
              <div className="card__body">
              <button class="button button--lg button--primary">Baixar</button>
              </div>
            </div>
          </div>
          <div className={clsx('col col--4')}>
              <img className={styles.cellBannerImg} src={require('@site/static/img/cell-banner.png').default} />
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Atlas RPG Manager"
      description="Revolucione o seu roleplay com o gerenciador de campanhas RPG do Atlas">
      <HomepageHeader />
      <main>
        <RpgManagerMainFeatures />
        <Systems />
        <RpgManagerFeatures />
      </main>
    </Layout>
  );
}
