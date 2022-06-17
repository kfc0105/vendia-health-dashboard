import LandingPage from './LandingPage/LandingPage.js'

import { createVendiaClient } from '@vendia/client';

const myApiKey = `2edQCbZNsmLrogFXEsPPdwcUeGxhJzicaeyjbThNCYMV`;

const client = createVendiaClient({
  apiUrl: `https://aqzfdiwh32.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://96eoo7yd7g.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: myApiKey,
});

export default function App() {
  return (
    <LandingPage/>
  );
};

export { client };
