import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '@/components/Container';

const Post = ({ title, body }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Head>
        <title>{title} | Blog post</title>
      </Head>

      <h1>POST {id}</h1>
      <p className="mt-12">{title}</p>
    </Container>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
  const post = await res.json();

  return post;
};

export default Post;
