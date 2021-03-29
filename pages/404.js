import Head from 'next/head';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Custom Error Page</title>
      </Head>

      <h1>404</h1>
    </Container>
  );
}
