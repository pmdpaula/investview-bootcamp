import Head from 'next/head'

import { Container } from '../styles/pages/Homes'

import InvestViewLogo from '../assets/images/IVLogo01.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InvestViewLogo />
      <h1>AxBlade Software</h1>
      <p>
        App Base com Next.js TypeScript, ESLint, Prettier, Styled Components
      </p>
    </Container>
  )
}

export default Home
