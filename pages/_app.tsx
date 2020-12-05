import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import theme, { themeIcon } from '../styles/theme';
import Header from '../components/Header';
import { IconContext } from 'react-icons'

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')!;
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <title>Passaggregate | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ThemeProvider theme={theme}>
      <IconContext.Provider value={themeIcon}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </IconContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
