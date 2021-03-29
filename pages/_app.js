import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

export default MyApp;
