import Head from 'next/head';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Hello Nerds</title>
      </Head>

      <h1>Hello, nerds</h1>
    </Container>
  );
}
