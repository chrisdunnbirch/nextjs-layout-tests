import '../styles/globals.css'
import type { AppLayoutProps } from 'next/app'

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
