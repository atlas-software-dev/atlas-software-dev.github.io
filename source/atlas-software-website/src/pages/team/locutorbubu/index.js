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
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container" >
        <div class="row" >
          <div className='col col--2'>
            <div className='avatar'>
              <img
                className='avatar__photo avatar__photo--x2'
                src={require('@site/static/img/bubu-avatar.jpg').default}
              />
            </div>
          </div>
          <div className='col col--6'>
            <Heading as="h1" className="hero__title">
              Locutorbubu
            </Heading>
            <p className="hero__subtitle">Comissoes</p>
          </div>
          <div className='col col--4'>
            <Card style={{ backgroundColor: '#2887bf', color: 'black' }} >

              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/char1.jpg').default}
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
                  <button onClick={() => location.href = "https://locutorbubu.bsky.social"} className='button button--secondary'>Encomendar minha arte</button>
                </div>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>
    </header>
  );
}

function AboutMe() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero hero--dark">
      <div className="container">
        <h1 className="hero__title">Sobre mim</h1>
        <p className="hero__subtitle">Not all heroes wear capes</p>
        <div>
          <button className="button button--secondary button-outline button--lg">Contratar agora</button>
        </div>
      </div>
    </div>
  );
}

function CharacterArt() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className="container">
        <div className="row margin--lg">
          <div className={clsx('col col--2')}>
            <div className="text--center">
              <img src={require('@site/static/img/halloween.png').default} />
            </div>
          </div>
          <div className={clsx('col col--10')}>
            <div className="padding-horiz--md">
              <Heading as="h3">Arte de Character</Heading>
              <p>Description Text</p>
            </div>
          </div>
        </div>

        <div className="row margin-top--md margin-bottom-md">
          <div className='col'>
            <Card className='margin-vert--md'>
              <CardHeader style={{ backgroundColor: "#78135C" }} className='padding-vert--md'>
                <Heading as="h4">Torso</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/char3.jpg').default}
              />
              <CardBody className='padding-vert--md'>
                <p>Line: <span class="badge badge--secondary">R$ 59,90</span></p>
                <p>Full Colors: <span class="badge badge--secondary">R$ 89,90</span></p>
              </CardBody>
            </Card>
          </div>
          <div className='col'>
            <Card className="margin-vert--md">
              <CardHeader style={{ backgroundColor: "#78135C" }} className='padding-vert--md'>
                <Heading as="h4">Corpo todo</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/char2.jpg').default}
              />
              <CardBody>
                <p>Line: <span class="badge badge--secondary">R$ 79,90</span></p>
                <p>Full Colors: <span class="badge badge--secondary">R$ 119,90</span></p>
              </CardBody>
            </Card>
          </div>
          <div className='col'>
            <Card className="margin-vert--md">
              <CardHeader style={{ backgroundColor: "#78135C" }} className='padding-vert--md'>
                <Heading as="h4">Promoções:</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/monsters.jpg').default}
              />
              <CardBody style={{ backgroundColor: "#78135C" }} >
                <p>Party full colour (5-6 characters): <span class="badge badge--primary">R$ 549,90</span> </p>
                <p>Party lineart (5-6 characters): <span class="badge badge--primary">R$ 399,90</span></p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function RpgMonsterTokens() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className="container">
        <div className="row margin--lg">
          <div className={clsx('col col--2')}>
            <div className="text--center">
              <img src={require('@site/static/img/monster.png').default} />
            </div>
          </div>
          <div className={clsx('col col--10')}>
            <div className="padding-horiz--md">
              <Heading as="h3">Tokens de monstro RPG</Heading>
              <p>Description Text</p>
            </div>
          </div>
        </div>

        <div className="row margin-top--md margin-bottom-md">
          <div className='col'>
            <Card className='margin-vert--md'>
              <CardHeader style={{ backgroundColor: "#78135C" }} className='padding-vert--md'>
                <Heading as="h4">Token completo</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/token-complexo.jpg').default}
              />
              <CardBody className='padding-vert--md'>
                <p>Simples: <span class="badge badge--secondary">R$ 49,90</span></p>
                <p>Complicado: <span class="badge badge--secondary">R$ 79,90</span></p>
              </CardBody>
              <CardFooter style={{ backgroundColor: "#78135C" }}>
                <Heading as="h4">Promocao</Heading>
                <p>3 tokens simples: <span class="badge badge--primary">R$ 119,90</span></p>
                <p>3 tokens complicados: <span class="badge badge--primary">R$ 199,90</span></p>
              </CardFooter>
            </Card>
          </div>
          <div className='col'>
            <Card className="margin-vert--md">
              <CardHeader style={{ backgroundColor: "#78135C" }} className='padding-vert--md'>
                <Heading as="h4">Lineart Token</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/lineart.jpg').default}
              />
              <CardBody>
                <p>Simples: <span class="badge badge--secondary">R$ 24,90</span></p>
                <p>Complicado: <span class="badge badge--secondary">R$ 39,90</span></p>
              </CardBody>
            </Card>
          </div>
          <div className='col'>
            <Card className="margin-vert--md">
              <CardHeader style={{ backgroundColor: "#78135C" }} className='padding-vert--md'>
                <Heading as="h4">Variacao de token</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/token-simples.jpg').default}
              />
              <CardBody>
                <p>Simples: <span class="badge badge--secondary">R$ 89,90</span></p>
                <p>Complicado: <span class="badge badge--secondary">R$ 159,90</span></p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <RpgMonsterTokens />
      <hr />
      <CharacterArt />
      <AboutMe />
    </Layout>
  );
}
