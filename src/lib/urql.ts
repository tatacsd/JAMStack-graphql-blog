// axios for graphql
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServeSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServeSide });

// Create the client to do the requests
const client = createClient({
    url: 'https://api-ca-central-1.hygraph.com/v2/cl9dssajl0j2601uodxngfa6e/master',
    // Exchanges works as intercepters on axios
    exchanges: [
        dedupExchange, // removes duplicated queries
        cacheExchange,
        ssrCache, // on serve side
        fetchExchange, 

    ]
})

export { client, ssrCache };
