# Intro to NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project use [TailwindCSS](https://tailwindcss.com/), a utility-first CSS framework.

### Features

- Minimal NextJS setup
- TailwindCSS configured
- Links and Static Routing
- Dynamic Routes using the [RESTful Pokémon API](https://pokeapi.co/)
- Light/Dark mode support

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

## Creating your project

Start by creating a new Next.js project if you don't have one set up already. The most common approach is to use Create Next App:

```bash
npx create-next-app my-project
cd my-project
```

## Setting up Tailwind CSS

**Tailwind CSS requires Node.js 12.13.0 or higher.**

### Install Tailwind via npm

Install Tailwind and its peer-dependencies using `npm`:

```bash
# If you're on Next.js v10
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# If you're on Next.js v9 or older
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
Next.js v9 and older don't support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility build for now as we've shown above.
```

### Create your configuration files

Next, generate your `tailwind.config.js` and `postcss.config.js` files:

```bash
npx tailwindcss init -p
```

This will create a minimal `tailwind.config.js` file at the root of your project:

```js
// tailwind.config.js
module.exports = {
  purge: [],
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

Learn more about configuring Tailwind in the [configuration documentation](https://tailwindcss.com/docs/configuration).

It will also create a `postcss.config.js` file that includes `tailwindcss` and `autoprefixer` already configured:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Configure Tailwind to remove unused styles in production

```js
// tailwind.config.js
module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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

### Include Tailwind in your CSS

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
