# Intro to NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project use [TailwindCSS](https://tailwindcss.com/), a utility-first CSS framework.

### Features

- Minimal NextJS setup
- [TailwindCSS](https://tailwindcss.com/), a Utility-first CSS framework
- [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit) to generate styles on demand
- Light/Dark mode support
- Links and Static Routing examples
- Dynamic Routes examples using the [RESTful Pokémon API](https://pokeapi.co/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Configure TailwindCSS

```js
// tailwind.config.js
module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

### Extend Tailwind CSS

Open the `./styles/globals.css` file that Next.js generates for you by default and use the `@tailwind` directive to include Tailwind's `base`, `components`, and `utilities` styles, replacing the original file contents:

```css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, ensure your CSS file is being imported in your `pages/_app.js` component:

```js
// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

If you've chosen to use a different file than the default `globals.css` file, you'll want to update the import accordingly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel](https://vercel.com) (from the creators of Next.js), or [Netlify](https://netlify.com).

This is a basic example of a `netlify.toml` setup file:

```toml
[build]
  command = "npm run build && npm run export"
  publish = "out"
```

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
