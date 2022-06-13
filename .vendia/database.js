import { createVendiaClient } from '@vendia/client';
  

const client = createVendiaClient({
  apiUrl: `https://09xanrud64.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://d38fk97bqi.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: process.env.EmYRL4HgAfupvVoKn94gndRHrJqbVoNQBE32XeVZ4bCS,
});

const { entities } = client;

// Add a new "product"
const productResponse = await entities.product.add({
  name: 'super-widget',
  inventory: 100,
});

// List your "shipments"
const shipmentResponse = await entities.shipment.list();

// Get a "user" by id
const userResponse = await entities.user.get('abc-123');