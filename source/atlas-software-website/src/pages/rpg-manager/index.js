import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Projects from '../../components/Projects';
import Systems from '../../components/RpgSystems';

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
            <h3>O RPG Manager oferecerá recursos para montar sua mesa de RPG em qualquer lugar</h3>
              <button class="button button--lg button--primary">APOIAR</button>
              <button class="button button--lg button--outline button--success">BAIXAR</button>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Systems />
      </main>
    </Layout>
  );
}
