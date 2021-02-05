import Head from 'next/head'

import { Container } from '../styles/pages/Homes'

import AxBladeSoftLogoNome from '../assets/images/abs_logo_nome_light.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AxBladeSoftLogoNome />
      <h1>AxBlade Software</h1>
      <p>
        App Base com Next.js TypeScript, ESLint, Prettier, Styled Components
      </p>
    </Container>
  )
}

export default Home
