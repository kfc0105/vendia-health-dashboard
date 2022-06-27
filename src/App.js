import LandingPage from './LandingPage/LandingPage.js'

import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://tzuz85d56l.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://7etxn8y2fi.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: `D84ei2uR57g3r9rvh5RNbkNhp3qfonFkPTLadyoVMQHM`,
});

export default function App() {
  return (
    <LandingPage/>
  );
};

export { client };
