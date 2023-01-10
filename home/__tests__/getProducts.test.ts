import * as dotenv from 'dotenv';
dotenv.config();

import { getProducts } from '../api/getProducts';

test('products firestore client test', () => {
  return getProducts().then((msg) => {
    // expect(msg).toBe();
  });
});
