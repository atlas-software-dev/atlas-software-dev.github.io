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
        <div className="row" >
        <div className='col col--8'>
          <div class="row margin-vert--lg" >
          <div className='col col--3'>
            <div className='avatar'>
              <img style={{width: 150, height: 150}}
                className='avatar__photo avatar__photo--xl'
                src={require('@site/static/img/bubu-avatar.jpg').default}
              />
            </div>
          </div>
          <div className='col col--9'>
            <Heading as="h1" className="hero__title">
              Locutorbubu
            </Heading>
            <p className="hero__subtitle">Artista digital, criador de monstros e amante de RPG</p>
          </div>
          <div className='col col--12'>
          <div className='button-group button-group--block'>
          <button class="button  button--outline button--secondary">Bluesky</button>
          <button class="button  button--outline button--secondary">Instagram</button>
          <button class="button  button--outline button--secondary">Email</button>
          </div>
          </div>
          </div>
          </div>
          <div className='col col--4'>
            <Card style={{ backgroundColor: '#b113bf', color: 'black' }} >

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
    <div className="hero hero--secondary">
      <div className="container">
        <h1>Sobre</h1>
        <p>Locutorbubu é um ilustrador de horror e RPG, conhecido por suas criaturas grotescas e paisagens sombrias. 
          Com um estilo gótico e Lovecraftiano, minhas obras convidam o espectador a explorar os cantos mais escuros da imaginação.
          Nao perca tempo e solicite a sua arte agora!</p>
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
              <CardHeader style={{ backgroundColor: "#78135C", color: "white" }} className='padding-vert--md'>
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
              <CardHeader style={{ backgroundColor: "#78135C", color: "white" }} className='padding-vert--md'>
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
              <CardHeader style={{ backgroundColor: "#78135C", color: "white" }} className='padding-vert--md'>
                <Heading as="h4">Promoções:</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/monsters.jpg').default}
              />
              <CardBody style={{ backgroundColor: "#78135C", color: "white" }} >
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
              <CardHeader style={{ backgroundColor: "#78135C", color: "white" }} className='padding-vert--md'>
                <Heading as="h4">Token completo</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/token-complexo.jpg').default}
              />
              <CardBody className='padding-vert--md'>
                <p>Simples: <span class="badge badge--secondary">R$ 49,90</span></p>
                <p>Complicado: <span class="badge badge--secondary">R$ 79,90</span></p>
              </CardBody>
              <CardFooter style={{ backgroundColor: "#78135C", color: "white" }}>
                <Heading as="h4">Promocao</Heading>
                <p>3 tokens simples: <span class="badge badge--primary">R$ 119,90</span></p>
                <p>3 tokens complicados: <span class="badge badge--primary">R$ 199,90</span></p>
              </CardFooter>
            </Card>
          </div>
          <div className='col'>
            <Card className="margin-vert--md">
              <CardHeader style={{ backgroundColor: "#78135C", color: "white" }} className='padding-vert--md'>
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
              <CardHeader style={{ backgroundColor: "#78135C", color: "white" }} className='padding-vert--md'>
                <Heading as="h4">Variacao de token</Heading>
              </CardHeader>
              <CardImage style={{ padding: 0 }}
                cardImageUrl={require('@site/static/img/token-simples.jpg').default}
              />
              <CardBody>
                <p>Simples: <span class="badge badge--secondary">R$ 29,90</span></p>
                <p>Complicado: <span class="badge badge--secondary">R$ 39,90</span></p>
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
