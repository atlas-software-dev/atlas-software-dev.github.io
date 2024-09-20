import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Card from '../../../components/Card';
import CardImage from '../../../components/Card/CardImage';
import CardBody from '../../../components/Card/CardBody';
import CardFooter from '../../../components/Card/CardFooter';
import CardHeader from '../../../components/Card/CardHeader';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container" >
         <Heading as="h1" className="hero__title">
          Locutorbubu
        </Heading>
        <p className="hero__subtitle">Comissoes</p> 
        <div class="row" >
          <div class="col col--6 col--offset-3">
          <Card style={{ backgroundColor: '#2887bf' , color:'black'}} >
        <CardHeader
      className='padding-top--lg padding-bottom--lg'
      
    >
      <div className='avatar avatar--vertical'>
        <img
          className='avatar__photo avatar__photo--xl' 
          src={require('@site/static/img/bubu-avatar.jpg').default}
        />
        <div className='avatar__intro'>
          <div className='avatar__name'>Emanoel Silva (@locutorbubu)</div>
          <small className='avatar__subtitle'>
            Artista digital e criador de Concept Arts na 
            <a style={{ color:'white'}} href='https://atlassoftware.dev/'>Atlas Software</a>
          </small>
        </div>
      </div>
    </CardHeader>
            <CardImage style={{ padding: 0}}
              cardImageUrl={require('@site/static/img/bubu-com.jpg').default}
            />
            <CardBody
      
      className='padding-vert--md'
      textAlign='center'
    >
      <h3>Comissoes Abertas!</h3>
      Tokens de monstros de RPG, tokens de personagem do mais simples esboco ate artes mais complicadas completas, verifique minha tabela de valores e encomende agora sua arte.
    </CardBody>  
    <CardFooter
      
      className='text--center'
    >
      <div className='button-group button-group--block'>
        <button onClick={() => location.href = "https://locutorbubu.bsky.social" } className='button button--secondary'>Encomendar minha arte</button>
      </div>
    </CardFooter> 
          </Card>
          </div>
          
          </div>
      </div>
    </header>
  );
}

function RpgMonsterTokens() {
  const {siteConfig} = useDocusaurusContext();
  return  (
    <section>
      <div className="container">
      <div className="row">
    <div className={clsx('col col--2')}>
      <div className="text--center">
      <img className={require('@site/static/img/char.svg').default} role="img" />
      </div>
    </div>
    <div className={clsx('col col--10')}>
    <div className="padding-horiz--md">
        <Heading as="h3">RPG Monster Tokens</Heading>
        <p>Description Text</p>
      </div>
    </div>
    </div>
        
        <div className="row">
          <div className='col'>Section 1</div>
          <div className='col'>Section 2</div>
          <div className='col'>Section 3</div>
          <div className='col'>Section 3</div>
        </div>
      </div>
    </section>
  );
} 

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <RpgMonsterTokens />
    </Layout>
  );
}
