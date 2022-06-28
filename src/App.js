import LandingPage from "./LandingPage/LandingPage.js";

import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
  apiUrl: `https://qex2wmt1i8.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://kr771grhlf.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: `EzN78KA8TercXBSS9UFyrh8C7gfMfzsoyf2mXM5Faw3B`,
});

export default function App() {
  return <LandingPage />;
}

export { client };
