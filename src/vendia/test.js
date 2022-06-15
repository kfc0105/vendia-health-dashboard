import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://gvargcawye.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://2l218fjw3k.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: process.env.r_fiIwtIkRyHseaoZ9XP_AGreRUuZ1qvgzEc4dmr,
});