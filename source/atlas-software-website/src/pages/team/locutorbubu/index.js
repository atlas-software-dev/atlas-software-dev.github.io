import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
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
        <p className="hero__subtitle">comissions</p> 
        <div class="row" >
          <div class="col col--6 col--offset-3">
          <Card >
        <CardHeader
      className='padding-top--lg padding-bottom--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'black'}}
    >
      <div className='avatar avatar--vertical'>
        <img
          className='avatar__photo avatar__photo--xl' 
          src={require('@site/static/img/bubu-avatar.jpg').default}
        />
        <div className='avatar__intro'>
          <div className='avatar__name'>Locutor (@locutorbubu)</div>
          <small className='avatar__subtitle'>
            Digital artist and concept art creator at 
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
      style={{ backgroundColor: '#2887bf' , color:'black'}}
      className='text--center'
    >
      <div className='button-group button-group--block'>
        <button className='button button--secondary'>Encomendar minha arte</button>
      </div>
    </CardFooter> 
          </Card>
          </div>
          
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        
      </main>
    </Layout>
  );
}
