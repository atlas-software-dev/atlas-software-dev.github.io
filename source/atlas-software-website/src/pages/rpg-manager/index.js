import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import styles from './index.module.css';
import Link from '@docusaurus/Link';
import Systems from '../../components/RpgSystems';
import RpgManagerMainFeatures from '../../components/RpgManagerMainFeatures';
import RpgManagerFeatures from '../../components/RpgManagerFeatures';
import Card from '../../components/Card';
import CardImage from '../../components/Card/CardImage';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

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
         <img src={require('@site/static/img/banner-3.jpg').default} /> 
      </div>
      <div className='container'>
        <div className="row">
          <div className={clsx('col', styles.headerCol)}>
            <img className={styles.logoImg} src={require('@site/static/img/rpg-manager-logo.png').default} />
            
          </div>
        </div>
        <div className={clsx('row')}>
          <div className={clsx('col col--5 col--offset-3 margin-top--lg margin-bottom--lg')}>
          <h1>Revolucione o seu roleplay</h1>
            <>
              Descubra o Atlas RPG Manager: seu companheiro completo para organizar campanhas de RPG. 
              Crie histórias envolventes, crie personagens e convide seus amigos para as sessoes.
            </>
            <div className={clsx('row')}>
              <div className='col col--12 margin-top--lg'>
                {/* <button className='button button--success' disabled >Baixar</button> */}
                <button onClick={ () => window.open("https://www.catarse.me/atlas_rpg_manager") } className='button button--block button--lg button--primary'>Apoiar</button>
              </div>
            </div>
          {/* <Card style={{ background: '#1b1b1d', color:'white'}}>
            <CardImage
              cardImageUrl={require('@site/static/img/logo-catarse-wt.png').default}
            />
            <CardBody >
              <h4>Apoie no catarse</h4>
              <>
                O projeto é independente e possui pagina para apoio na plataforma Catarse.
              </>
            </CardBody>
            <CardFooter  className='text--center'> 
              <div className='button-group button-group--block'>
                {/* <button className='button button--success' disabled >Baixar</button> 
                <button onClick={ () => window.open("https://www.catarse.me/atlas_rpg_manager") } className='button button--danger'>Apoiar</button>
              </div>
            </CardFooter> 
          </Card> */}
          </div>
          <div className={clsx('col col--4')}>
              <img className={styles.cellBannerImg} src={require('@site/static/img/cell-banner2.png').default} />
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
