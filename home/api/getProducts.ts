import { db } from '@/lib/firestore';

export const revalidate = 3600; // Management cache. See: https://beta.nextjs.org/docs/data-fetching/fetching#segment-cache-configuration

async function getProducts() {
  const snapshot = await db.collection('products').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

export { getProducts };
