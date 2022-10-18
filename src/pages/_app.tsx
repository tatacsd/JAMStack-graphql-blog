import { Provider } from 'urql';
import { client, ssrCache } from '../lib/urql';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    // If we're on the server, restore the cache with the data from the server
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    // Wrap with a provider and with client as value
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
