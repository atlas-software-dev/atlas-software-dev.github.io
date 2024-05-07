import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Systems from '../../components/RpgSystems';
import RpgManagerMainFeatures from '../../components/RpgManagerMainFeatures';
import RpgManagerFeatures from '../../components/RpgManagerFeatures';

function LaunchPlan() {
  const {siteConfig} = useDocusaurusContext();
  return (
<header className={clsx('hero hero--dark', styles.cronogramaBanner)}>
<div className='container'>
  <h3>Cronograma de lançamento</h3>
  <img className={styles.cronogramaImg}  src={require('@site/static/img/cronograma.png').default} />
</div>
</header>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      
      <div className={styles.bannerImgBack}>
        <img src={require('@site/static/img/rpg-manager-head-back.jpg').default} />
      </div>
      <div className='container'>
        <div className="row">
          <div className={clsx('col col--8 col--offset-2', styles.headerCol)}>
            <img className={styles.logoImg} src={require('@site/static/img/logo.png').default} />
            <h1>Revolucione o seu roleplay</h1>
            <>
              Descubra o Atlas RPG Manager: seu companheiro completo para organizar campanhas de RPG. 
              Crie histórias envolventes, crie personagens e convide seus amigos para as sessoes.
            </>
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--5 col--offset-2')}>
            <div className="card">
              <div className="card__image">
                <img src={require('@site/static/img/logo-catarse-wt.png').default} />
              </div>
              <div className="card__body">
                <h4>Apoie no catarse</h4>
                <>
                  O projeto é independente e possui pagina para apoio na plataforma Catarse.
                </>
              </div>
              <div className="card__footer">
                <button className="button button--lg button--primary button--block">Apoiar o projeto</button>
              </div>
            </div>
          </div>
          <div className={clsx('col col--5')}>
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
        <LaunchPlan/>
        <RpgManagerFeatures />
      </main>
    </Layout>
  );
}
