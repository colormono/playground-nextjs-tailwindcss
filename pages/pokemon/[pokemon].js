import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Container';

function Pokemon({ pokemon }) {
  return (
    <Container>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
      </Head>
      <div className="flex items-center gap-4">
        <h1 className="uppercase">{pokemon?.name}</h1>
        <img src={pokemon?.sprites.front_default} className="h-32" />
      </div>
      <Examples />
    </Container>
  );
}

export async function getStaticPaths() {
  // If want SSR instead of SSG, just:
  // return { paths: [], fallback: true };

  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => `/pokemon/${p.name}`);

  return {
    paths,
    fallback: true, // If not found return 404
    // fallback: true, // If not found use server-side rendering with the next-on-netlify package.
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

const Examples = () => (
  <div className="mt-12">
    <strong>Try:</strong>
    {` `}
    <Link href="/pokemon/bulbasaur">
      <a>Bulbasaur</a>
    </Link>
    ,{` `}
    <Link href="/pokemon/charmander">
      <a>Charmander</a>
    </Link>
    ,{` `}
    <Link href="/pokemon/rattata">
      <a>Rattata</a>
    </Link>
    ,{` `}
    <Link href="/pokemon/pikachu">
      <a>Pikachu</a>
    </Link>
    ,{` `}
    <Link href="/pokemon/abra">
      <a>Abra</a>
    </Link>
    ,{` `}
    <Link href="/pokemon/cascoon">
      <a>Cascoon</a>
    </Link>
    ...
  </div>
);

export default Pokemon;
